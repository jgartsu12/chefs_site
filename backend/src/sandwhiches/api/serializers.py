from rest_framework import serializers

from sandwhiches.models import Sandwhiches

class SandwhichesSerializers(serializers.ModelSerializer):
    class Meta:
        model = Sandwhiches
        fields = ('id','title', 'content', 'description')