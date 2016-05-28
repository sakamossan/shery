import requests_cache
from django.core.management.base import BaseCommand
from django.db import transaction
from django.conf import settings
from rakuten.models import Genre
from rakuten.collect_genre import GenreCollector


class Command(BaseCommand):

    # TODO with-cache flag

    def handle(self, *args, **options):
        with requests_cache.enabled(**settings.REQUEST_CACHE):
            collector = GenreCollector()
            genres = [Genre(**_.to_model_param()) for _ in collector.collect()]
        with transaction.atomic():
            Genre.objects.bulk_create(genres)
