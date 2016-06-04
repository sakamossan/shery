from django.db import transaction
from django.core.management.base import BaseCommand
from shery.utils import info
from rakuten.models import Item


class Command(BaseCommand):

    @transaction.atomic
    def handle(self, *args, **options):
        for i in Item.objects.all():
            if '_ex=128x128' in i.image_url:
                i.image_url = str(i.image_url).replace('_ex=128x128', '_ex=256x256')
                i.save()
            else:
                info('found not `_ex=128x128` {}:{}'.format(i.id, i.image_url))
