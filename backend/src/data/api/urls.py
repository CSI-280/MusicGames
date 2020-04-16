from django.urls import path

from .views import secretlView, userView, userListView, login, setUserData

from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path('secret/', secretlView.as_view()),
    path('user/', userListView.as_view()),
    path('user/<pk>', userView.as_view()),
    path('login/', csrf_exempt(login.as_view())),
    path('setUserData/', csrf_exempt(setUserData.as_view()))
]
