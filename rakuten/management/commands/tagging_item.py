import itertools
from django.core.management.base import BaseCommand
from django.conf import settings
from django.db import transaction
from rakuten.models import Genre, Tag


class Command(BaseCommand):

    # TODO with-cache flag

    @transaction.atomic
    def handle(self, *args, **options):
        for g in Genre.objects.all():
            Tag.objects.get_or_create(name=g.name)
        for tag in Tag.objects.all():
            pass


