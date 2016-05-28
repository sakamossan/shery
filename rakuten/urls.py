from rest_framework import routers
from rakuten.views import GenreViewSet


router = routers.DefaultRouter()
router.register(r'genre', GenreViewSet)  # admin画面のURL表記に合わせて単数形
