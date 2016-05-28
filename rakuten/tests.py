from django.test import TestCase
import json
from shery.utils import basedir_open
from rakuten.collect_item import Item


class TestCollectItem(TestCase):

    def test_image_url(self):
        file = basedir_open('/rakuten/resources/tests/single_image_url.json', 'r')
        data = json.load(file)
        item = Item(data)
        image_url = item.image_url()
        assert '8000002499.jpg?_ex=128x128' in image_url
