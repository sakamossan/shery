from typing import Iterable, Dict
import datetime
import time
import json
import requests
from rakuten.models import Genre
from shery.secret import rakuten_api_app_id
from shery.utils import info_dump


class Item(object):

    n = datetime.datetime.now()

    def __init__(self, data: Dict):
        self.data = data

    def image_url(self) -> str:
        m = self.data.get('mediumImageUrls', [])
        if m:
            return m[0]
        else:
            s = self.data.get('smallImageUrls', [])
            if s:
                return s[0]

    def genres(self):
        genre = Genre.objects.get(pk=self.data['genreId'])
        return genre.parents()

    def to_model_param(self) -> Dict:
        return {
            'code': self.data['itemCode'],
            'name': self.data['itemName'],
            'catchcopy': self.data['catchcopy'],
            'caption': self.data['itemCaption'],
            'price': self.data['itemPrice'],
            'review_count': self.data['reviewCount'],
            'review_average': self.data['reviewAverage'],
            'url': self.data['itemUrl'],
            'shop_code': self.data['shopCode'],
            'shop_url': self.data['shopUrl'],
            'image_url': self.image_url(),
            'created': self.n,
            'modified': self.n,
        }


class ItemCollector(object):

    def __init__(self, genre: Genre):
        self.genre = genre
        self.current_page = 1

    def collect(self) -> Iterable[Dict]:
        while self.current_page <= 3:  # とりあえず100件くらいとれたら十分
            data = self.get_api_data()
            self.current_page += 1
            if data:
                for item in data:
                    yield item
            else:
                break
        info_dump('collect-item-pages', genre=self.genre.name, page=self.current_page)
        raise StopIteration

    def get_api_data(self) -> Dict:
        url = 'https://app.rakuten.co.jp/services/api/IchibaItem/Search/20140222'
        queryparameter = {
            'genreId': self.genre.id,
            'applicationId': rakuten_api_app_id,
            'sort': '-reviewCount',
            'page': self.current_page,
            'availability': 1,
            'imageFlag': 1,
            'carrier': 2,  # smartphone
            'purchaseType': 0,  # 通常購入
            'formatVersion': 2,
            'format': 'json',
        }
        res = requests.get(url, params=queryparameter)
        if not res.from_cache:
            time.sleep(0.3)  # API制限回避
        info_dump('get-item-api-data', **queryparameter)
        data = json.loads(res.content.decode('utf-8'))
        return [Item(d) for d in data['Items']]
