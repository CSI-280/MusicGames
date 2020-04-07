from rest_framework import serializers

from data.models import article, secret


class ArticalSerialziers(serializers.ModelSerializer):
    class Meta:
        model = article
        fields = ('title', 'content')


class secretSerialziers(serializers.ModelSerializer):
    class Meta:
        model = secret
        fields = ('value')
