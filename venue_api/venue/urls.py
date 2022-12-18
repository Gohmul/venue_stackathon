from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter
from django.contrib import admin

urlpatterns = [

    path('venues/', views.VenueList.as_view(), name='venue_list'),
    path('venue/<int:pk>', views.VenueDetail.as_view(), name='venue_detail'),
    path('events/', views.EventList.as_view(), name='event_list'),
    path('event/<int:pk>', views.EventDetail.as_view(), name='event_detail'),
]
