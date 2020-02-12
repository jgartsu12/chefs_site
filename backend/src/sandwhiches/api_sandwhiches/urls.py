from django.urls import path

from .views import (
    SandwhichListView,
    SandwhichDetailView,
    SandwhichCreateView,
    SandwhichUpdateView,
    SandwhichDeleteView
)

urlpatterns = [
    path('', SandwhichListView.as_view()),
    path('create/', SandwhichCreateView.as_view()),
    path('<pk>', SandwhichDetailView.as_view()),
    path('<pk>/update/', SandwhichUpdateView.as_view()),
    path('<pk>/delete/', SandwhichDeleteView.as_view())
]



# from sandwhiches.api_sandwhiches.views import SandwhichViewSet
# from rest_framework.routers import DefaultRouter

# router = DefaultRouter()
# router.register(r'', SandwhichViewSet, basename='sandwhiches')
# urlpatterns = router.urls