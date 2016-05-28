from typing import Sequence, Dict
import time
import json
import queue
import requests
from django.conf import settings
from shery.secret import rakuten_api_app_id
from shery.utils import info_dump


class Genre(object):

    def __init__(self, data: dict, parent_id: str):
        self.id = str(data['genreId'])
        self.name = data['genreName']
        self.level = data['genreLevel']
        self.parent_id = parent_id
        self.path = None

    def to_model_param(self):
        ret = self.__dict__
        del ret['parent_id']
        return ret

    def get_api_data(self) -> Dict:
        url = 'https://app.rakuten.co.jp/services/api/IchibaGenre/Search/20140222'
        queryparameter = {
          'genreId': self.id,
          'applicationId': rakuten_api_app_id,
          'format': 'json',
        }
        res = requests.get(url, params=queryparameter)
        if not res.from_cache:
            time.sleep(0.3)  # API制限回避
        info_dump('get-genre-api-data', **self.__dict__)
        return json.loads(res.content.decode('utf-8'))

    def get_children(self) -> Sequence:
        data = self.get_api_data()
        children = data.get('children', [])
        dicts = map(lambda d: d['child'], children)
        return [Genre(g, self.id) for g in dicts]


class GenreCollector(object):

    cached_filepath = settings.BASE_DIR + '/rakuten/resources/cached_genre.pickle'

    def __init__(self):
        self._map = {}  # type: Dict[str, Genre]
        self.root = Genre({
            "genreId": 112104,
            "genreName": "ドッグフード",
            "genreLevel": 2
        }, '101213')
        self.append(self.root)

    def append(self, genre: Genre):
        genre.path = self.get_parents_path(genre)
        self._map[genre.id] = genre

    def get_parents_path(self, genre: Genre) -> str:
        cur = genre
        ret = [genre, ]
        while cur.parent_id in self._map:
            parent = self._map.get(cur.parent_id)
            ret.append(parent)
            cur = parent
        return "/".join(g.id for g in reversed(ret))

    def collect(self) -> Sequence[Genre]:
        assert len(self._map) == 1
        q = queue.Queue()  # type: queue.Queue
        q.put(self.root)
        while not q.empty():
            genre = q.get()  # type: Genre
            self.append(genre)
            for g in genre.get_children():
                q.put(g)
        return list(self._map.values())
