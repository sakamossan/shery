import itertools
import requests_cache
from django.core.management.base import BaseCommand
from django.conf import settings
from django.db import transaction
from rakuten.models import Genre, Item
from rakuten.collect_item import ItemCollector


class Command(BaseCommand):

    def handle(self, *args, **options):
        with requests_cache.enabled(**settings.REQUEST_CACHE):
            _ = [ItemCollector(g).collect() for g in Genre.objects.all()]
            _ = itertools.chain.from_iterable(_)  # flatten
            with transaction.atomic():
                for i in _:
                    # http://stackoverflow.com/questions/7837033/valueerror-cannot-add-instance-is-on-database-default-value-is-on-databas/7999014
                    item = Item(**i.to_model_param())
                    item.save()
                    item.genres = i.genres()
                    item.save()
