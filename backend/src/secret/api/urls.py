from django.urls import path

from .views import secretlView

urlpatterns = [
    path('', secretlView.as_view())
]
