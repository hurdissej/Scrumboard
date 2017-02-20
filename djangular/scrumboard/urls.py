from rest_framework.routers import DefaultRouter
from .api import ListViewSet, CardViewSet, BoardViewSet

router = DefaultRouter()
router.register(r'lists', ListViewSet)
router.register(r'cards', CardViewSet)
router.register(r'boards', BoardViewSet)
urlpatterns = router.urls