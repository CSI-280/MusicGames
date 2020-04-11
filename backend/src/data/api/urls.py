from django.urls import path

from .views import secretlView, userView, userListView, createUser

from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path('secret/', secretlView.as_view()),
    path('user/', userListView.as_view()),
    path('user/<pk>', userView.as_view()),
    path('createUser/', csrf_exempt(createUser.as_view())),
]
