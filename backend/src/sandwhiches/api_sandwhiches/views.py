from rest_framework import viewsets

from sandwhiches.models import Sandwhiches
from .serializers import SandwhichesSerializer


class SandwhichViewSet(viewsets.ModelViewSet):
    serializer_class = SandwhichesSerializer
    queryset = Sandwhiches.objects.all()