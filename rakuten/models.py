from django.db import models
from django_extensions.db.models import TimeStampedModel


class Genre(TimeStampedModel):
    id = models.CharField(primary_key=True, max_length=64)
    name = models.CharField(max_length=256)
    level = models.PositiveSmallIntegerField()


class Item(TimeStampedModel):
    code = models.CharField(primary_key=True, max_length=128)
    genres = models.ManyToManyField(Genre)
    name = models.CharField(max_length=256)
    catchcopy = models.TextField()
    caption = models.TextField()
    price = models.PositiveIntegerField()
    review_count = models.PositiveIntegerField()
    review_average = models.PositiveSmallIntegerField()
    url = models.CharField(max_length=2048)
    image_url = models.CharField(max_length=2048)

    # shop
    shop_code = models.CharField(max_length=64)
    shop_url = models.CharField(max_length=2048)
