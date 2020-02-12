from rest_framework import permissions
from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    DestroyAPIView,
    UpdateAPIView
)
from sandwhiches.models import Sandwhiches
from .serializers import SandwhichesSerializer


class SandwhichListView(ListAPIView):
    queryset = Sandwhiches.objects.all()
    serializer_class = SandwhichesSerializer
    permission_classes = (permissions.AllowAny, )

class SandwhichDetailView(RetrieveAPIView):
    queryset = Sandwhiches.objects.all()
    serializer_class = SandwhichesSerializer
    permission_classes = (permissions.AllowAny, )

class SandwhichCreateView(CreateAPIView):
    queryset = Sandwhiches.objects.all()
    serializer_class = SandwhichesSerializer
    permission_classes = (permissions.IsAuthenticated, )

class SandwhichUpdateView(UpdateAPIView):
    queryset = Sandwhiches.objects.all()
    serializer_class = SandwhichesSerializer
    permission_classes = (permissions.IsAuthenticated, )

class SandwhichDeleteView(DestroyAPIView):
    queryset = Sandwhiches.objects.all()
    serializer_class = SandwhichesSerializer
    permission_classes = (permissions.IsAuthenticated, )




'''
from rest_framework import viewsets

class SandwhichViewSet(viewsets.ModelViewSet):
    serializer_class = SandwhichesSerializer
    queryset = Sandwhiches.objects.all()
'''