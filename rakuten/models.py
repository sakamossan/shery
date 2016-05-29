from typing import Sequence
import functools
from django.db import models
from django_extensions.db.models import TimeStampedModel


class Genre(TimeStampedModel):

    class Manager(models.Manager):

        queried_by_names = [
            'ウェットフード',
            'ドライフード',
            'ガム',
            'おやつ',
            'サプリ',
            '水',
            'ミルク',
            '離乳食',
            'その他',
        ]

        @functools.lru_cache(maxsize=256, typed=True)
        def get_by_cache(self, pk):
            return self.get(pk=pk)

    objects = Manager()

    id = models.CharField(primary_key=True, max_length=64)
    name = models.CharField(max_length=256)
    level = models.PositiveSmallIntegerField()
    path = models.CharField(max_length=256)  # e.g. `123/223/456`

    def parents(self) -> Sequence[models.Model]:
        mgr = self.__class__.objects
        parent_ids = self.path.split('/')
        return [mgr.get_by_cache(pk) for pk in parent_ids] + [self]


class Item(TimeStampedModel):

    code = models.CharField(primary_key=True, max_length=128)
    genres = models.ManyToManyField(Genre)
    name = models.CharField(max_length=256)
    catchcopy = models.TextField()
    caption = models.TextField()
    price = models.PositiveIntegerField()
    review_count = models.PositiveIntegerField()
    review_average = models.FloatField()
    url = models.CharField(max_length=2048)
    image_url = models.CharField(max_length=2048, null=True)

    # shop
    shop_code = models.CharField(max_length=64)
    shop_url = models.CharField(max_length=2048)
