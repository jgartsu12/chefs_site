from rest_framework import viewsets

from soups.models import Soup
from .serializers import SoupSerializer


class SoupViewSet(viewsets.ModelViewSet):
    serializer_class = SoupSerializer
    queryset = Soup.objects.all()

# from rest_framework.generics import (
#     ListAPIView, 
#     RetrieveAPIView,
#     CreateAPIView,
#     DestroyAPIView,
#     UpdateAPIView 
# )

# class SoupListView(ListAPIView):
#     queryset = Soup.objects.all()
#     serializer_class = SoupSerializer


# class SoupDetailView(RetrieveAPIView):
#     queryset = Soup.objects.all()
#     serializer_class = SoupSerializer


# class SoupCreateView(CreateAPIView):
#     queryset = Soup.objects.all()
#     serializer_class = SoupSerializer
    

# class SoupUpdateView(UpdateAPIView):
#     queryset = Soup.objects.all()
#     serializer_class = SoupSerializer


# class SoupDeleteView(DestroyAPIView):
#     queryset = Soup.objects.all()
#     serializer_class = SoupSerializer