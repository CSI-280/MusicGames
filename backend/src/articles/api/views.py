from rest_framework.generics import ListAPIView, RetrieveAPIView

from articles.models import Article
from .serializers import ArticalSerialziers


class AricalsListView(ListAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticalSerialziers


class AricalsDetailView(RetrieveAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticalSerialziers
