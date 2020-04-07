from rest_framework.generics import ListAPIView, RetrieveAPIView

from data.models import article, secret
from .serializers import ArticalSerialziers, secretSerialziers


class AricalsListView(ListAPIView):
    queryset = article.objects.all()
    serializer_class = ArticalSerialziers


class AricalsDetailView(RetrieveAPIView):
    queryset = article.objects.all()
    serializer_class = ArticalSerialziers


class secretlView(ListAPIView):
    queryset = secret.objects.all()
    serializer_class = secretSerialziers