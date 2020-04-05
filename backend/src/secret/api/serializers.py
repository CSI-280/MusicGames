from rest_framework import serializers

from secret.models import  secret


class secretSerialziers(serializers.ModelSerializer):
    class Meta:
        model = secret
        fields = ('value')
