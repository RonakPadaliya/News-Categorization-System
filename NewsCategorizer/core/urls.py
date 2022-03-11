from django.urls import path, include
from .import views
from django.conf.urls import url

from rest_framework import routers
from core import views

# router = routers.DefaultRouter()
# router.register(r'categories', views.CategoryView, 'category')

urlpatterns = [
    path('', views.PredictCategory, name='PredictCategory'),
    # path('api/', include(router.urls)),
    path('category/', views.CategoryView.as_view(), name='prediction')
]
