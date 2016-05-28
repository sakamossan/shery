import itertools
import requests_cache
from django.core.management.base import BaseCommand
from django.conf import settings
from django.db import transaction
from rakuten.models import Genre, Item
from rakuten.collect_item import ItemCollector


class Command(BaseCommand):

    # TODO with-cache flag

    def handle(self, *args, **options):
        with requests_cache.enabled(**settings.REQUEST_CACHE):
            _ = [ItemCollector(g).collect() for g in Genre.objects.all()]
            _ = itertools.chain.from_iterable(_)  # flatten
            items = [Item(**i.to_model_param()) for i in _]
        with transaction.atomic():
            for i in items:
                i.save()
