from rest_framework.generics import ListAPIView, RetrieveAPIView, GenericAPIView
from django.views.generic import TemplateView, FormView

from data.models import secret, user
from .serializers import secretSerialziers, userSerialziers

from django.http import HttpResponse, request
from django.views import View

import json

class secretlView(ListAPIView):
    queryset = secret.objects.all()
    serializer_class = secretSerialziers


class userView(RetrieveAPIView):
    queryset = user.objects.all()
    serializer_class = userSerialziers

class userListView(ListAPIView):
    queryset = user.objects.all()
    serializer_class = userSerialziers


class setUserData(View):
    def post(self, request):
        data = json.loads((request.body).decode('utf-8'))
       
        if 'google_id' in data:

            cur_user = user.objects.get(pk=data.get('google_id'))

            # if id is found
            if 'username' in data:
                cur_user.username = data.get('username')
            
            if 'pak' in data:
                cur_user.pak = data.get('pak')

            if 'points' in data:
                cur_user.points = data.get('points')

            if 'new_g_id' in data:
                cur_user.g_id = data.get('new_g_id')

            if 'spotify_sec' in data:
                cur_user.spotify_sec = data.get('spotify_sec')

            if 'spotify_ref' in data:
                cur_user.spotify_ref = data.get('spotify_sec')
            
            cur_user.save()

            return HttpResponse('updated user')
                
           
                                
        else:
            # no google_id was added
            return  HttpResponse("need 'google_id' in payload")
        return HttpResponse('something went wrong')



class login(View):
    # note this can be faked easily by just sending a custom ID to the post request endpoint
    def post(self, request):
        data = json.loads((request.body).decode('utf-8'))
        if 'google_id' in data:
            # if id is found
            
            if user.objects.filter(g_id = data.get('google_id')).exists():
                # if the user already exist
                # there should be more here but idk what that is yet
                return HttpResponse('user logged in')
            else:
                # need way to get user username
                # if the user dosnt exist
                new_user = user(user.objects.all().count()+1, data.get('google_id'), 1 , 'null', 0)
                new_user.save()
                return HttpResponse('user added to db')
                                
        else:
            # no google_id was added
            return  HttpResponse("need 'google_id' in payload")
        return HttpResponse('something went wrong')
    