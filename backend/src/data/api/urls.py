from django.urls import path

from .views import AricalsDetailView, AricalsListView, secretlView

urlpatterns = [
    path('ari/', AricalsListView.as_view()),
    path('ari/<pk>', AricalsDetailView.as_view()),
    path('secret/', secretlView.as_view())
]
