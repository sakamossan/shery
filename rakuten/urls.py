from rest_framework import routers
from rakuten.views import ItemViewSet


router = routers.DefaultRouter()

# django-admin画面のURL表記に従う
router.register(r'item', ItemViewSet)

