from rest_framework import serializers

from soups.models import Soup

class SoupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Soup
        fields = ('id','title', 'content', 'description')