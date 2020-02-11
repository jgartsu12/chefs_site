from rest_framework import serializers

from sandwhiches.models import Sandwhiches

class SandwhichesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sandwhiches
        fields = ('id','title', 'content', 'description')