from rest_framework import viewsets
from rest_framework.request import Request
from rest_framework.response import Response
from rakuten.models import Item
from rakuten.serializers import ItemSerializer


class ItemViewSet(viewsets.ModelViewSet):

    allowed_params = {
        'code',
        'name', 'name__contains',
        'price', 'price__lt', 'price__gt',
        'review_count', 'review_count__lt', 'review_count__gt',
        'review_average', 'review_average__lt', 'review_average__gt',
        'shop_code',
        'genres__name',
        'genres__level',
        'genres__id',
        'genres__path',
    }

    queryset = Item.objects.all()
    serializer_class = ItemSerializer

    def list(self, request: Request, *args, **kwargs) -> Response:
        query_param = {
            k: v for k, v in request.query_params.dict().items()
            if k in self.allowed_params
        }
        queryset = Item.prefetch_mgr.filter(**query_param).order_by('-review_count')
        queryset = self.paginate_queryset(queryset) or queryset
        serializer = ItemSerializer(queryset, many=True)
        return Response(serializer.data)
