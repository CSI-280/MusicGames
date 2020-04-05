from rest_framework.generics import ListAPIView, RetrieveAPIView

from secret.models import secret
from .serializers import secretSerialziers


class secretlView(ListAPIView):
    queryset = secret.objects.all()
    serializer_class = secretSerialziers