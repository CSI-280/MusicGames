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


class Username(View):
    def get(self, request):
        print(str(request.get_full_path))
        
        #data = json.loads((request.body).decode('utf-8'))
        
        if 'google_id' in request.headers:
            print("data")
        else:
            print("no data")

        
        '''#data = json.loads((request.body).decode('utf-8'))
        #if 'google_id' in data:
            # if id is found
            filter = user.objects.filter(g_id = data.get('google_id'))
        
            
            print(filter)
            return HttpResponse('log in user')
        
                                
        else:
            # no google_id was added
            return  HttpResponse("need 'google_id' in payload")'''
        
        
        return HttpResponse('something went wrong')
    

class login(View):
    # note this can be faked easily by just sending a custom ID to the post request endpoint
    def post(self, request):
        data = json.loads((request.body).decode('utf-8'))
        if 'google_id' in data:
            # if id is found
            
            if user.objects.filter(g_id = data.get('google_id')).exists():
                # if the user already exist
                print('log in user')
                return HttpResponse('user logged in')
            else:
                # need way to get user username
                # if the user dosnt exist
                print('adding user to db')
                new_user = user(user.objects.all().count()+1, data.get('google_id'), 1 , 'null', 0)
                new_user.save()
                return HttpResponse('user added to db')
                                
        else:
            # no google_id was added
            return  HttpResponse("need 'google_id' in payload")
        return HttpResponse('something went wrong')
    