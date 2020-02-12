from rest_framework import permissions
from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    DestroyAPIView,
    UpdateAPIView
)
from soups.models import Soup
from .serializers import SoupSerializer


class SoupListView(ListAPIView):
    queryset = Soup.objects.all()
    serializer_class = SoupSerializer
    permission_classes = (permissions.AllowAny, )

class SoupDetailView(RetrieveAPIView):
    queryset = Soup.objects.all()
    serializer_class = SoupSerializer
    permission_classes = (permissions.AllowAny, )

class SoupCreateView(CreateAPIView):
    queryset = Soup.objects.all()
    serializer_class = SoupSerializer
    permission_classes = (permissions.IsAuthenticated, )

class SoupUpdateView(UpdateAPIView):
    queryset = Soup.objects.all()
    serializer_class = SoupSerializer
    permission_classes = (permissions.IsAuthenticated, )

class SoupDeleteView(DestroyAPIView):
    queryset = Soup.objects.all()
    serializer_class = SoupSerializer
    permission_classes = (permissions.IsAuthenticated, )


'''
from rest_framework import viewsets

class SoupViewSet(viewsets.ModelViewSet):
    serializer_class = SoupSerializer
    queryset = Soup.objects.all()
'''