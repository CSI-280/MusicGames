from django.urls import path

from .views import AricalsDetailView, AricalsListView

urlpatterns = [
    path('', AricalsListView.as_view()),
    path('<pk>', AricalsDetailView.as_view()),
]
