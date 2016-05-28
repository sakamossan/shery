from rest_framework import viewsets
from rakuten.models import Genre
from rakuten.serializers import GenreSerializer


class GenreViewSet(viewsets.ModelViewSet):

    queryset = Genre.objects.all()
    serializer_class = GenreSerializer
