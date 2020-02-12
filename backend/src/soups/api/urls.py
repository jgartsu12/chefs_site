from django.urls import path 

from .views import (
    SoupListView,
    SoupDetailView,
    SoupCreateView,
    SoupUpdateView,
    SoupDeleteView
)

urlpatterns = [
    path('', SoupListView.as_view()),
    path('create/', SoupCreateView.as_view()),
    path('<pk>', SoupDetailView.as_view()),
    path('<pk>/update/', SoupUpdateView.as_view()),
    path('<pk>/delete/', SoupDeleteView.as_view())
]

# from soups.api.views import SoupViewSet
# from rest_framework.routers import DefaultRouter

# router = DefaultRouter()
# router.register(r'', SoupViewSet, basename='soups')
# urlpatterns = router.urls