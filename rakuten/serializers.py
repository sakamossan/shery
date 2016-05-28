from rest_framework import serializers
from rakuten.models import Genre, Item


class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = ('id', 'name')

