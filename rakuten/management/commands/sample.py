from django.core.management.base import BaseCommand
from shery.utils import info_dump, info


class Command(BaseCommand):
    help = "My shiny new management command."

    def handle(self, *args, **options):
        info_dump(a=1, b=2)
        info('fucking jap')
