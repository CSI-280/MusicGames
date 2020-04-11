from rest_framework.generics import ListAPIView, RetrieveAPIView, GenericAPIView
from django.views.generic import TemplateView, FormView

from data.models import secret, user
from .serializers import secretSerialziers, userSerialziers

from django.http import HttpResponseRedirect, HttpResponse, request
from django.views.decorators.csrf import csrf_exempt
from django.views import View


class secretlView(ListAPIView):
    queryset = secret.objects.all()
    serializer_class = secretSerialziers


class userView(RetrieveAPIView):
    queryset = user.objects.all()
    serializer_class = userSerialziers

class userListView(ListAPIView):
    queryset = user.objects.all()
    serializer_class = userSerialziers



class createUserView(FormView):

    def post(self, request):
        return HttpResponse("hello")