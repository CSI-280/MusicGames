from rest_framework import serializers

from data.models import secret, user


class secretSerialziers(serializers.ModelSerializer):
    class Meta:
        model = secret
        fields = ('value')



class userSerialziers(serializers.ModelSerializer):
    class Meta:
        model = user
        fields = ('db_id', 'public_access_key', 'username', 'points')