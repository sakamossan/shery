from rest_framework import serializers
from rakuten.models import Item


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = (
            'code',
            'name',
            'price',
            'review_count',
            'review_average',
            'caption',
            'catchcopy',
            'url',
            'image_url',
            'genres',
        )

