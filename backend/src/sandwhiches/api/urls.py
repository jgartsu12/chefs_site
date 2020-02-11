from sandwhiches.api.views import SandwhichViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', SandwhichViewSet, basename='sandwhiches')
urlpatterns = router.urls