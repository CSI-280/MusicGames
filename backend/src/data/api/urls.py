from django.urls import path

from .views import secretlView, userView, userListView, createUserView

urlpatterns = [
    path('secret/', secretlView.as_view()),
    path('user/', userListView.as_view()),
    path('user/<pk>', userView.as_view()),
    path('createUser', createUserView.as_view()),
]
