from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter
from django.contrib import admin
from venue.views import front


urlpatterns = [
<<<<<<< HEAD
    path('', front, name='front'),
    path('venues-data/', views.VenueList.as_view(), name='venue_list'),
    path('venue-data/<int:pk>', views.VenueDetail.as_view(), name='venue-detail'),
    path('events-data/', views.EventList.as_view(), name='event_list'),
    path('event-data/<int:pk>', views.EventDetail.as_view(), name='event-detail'),
=======

    path('venues/', views.VenueList.as_view({'get': 'list'}), name='venue_list'),
    path('venue/<int:pk>', views.VenueDetail.as_view(), name='venue-detail'),
    path('events/', views.EventList.as_view(), name='event_list'),
    path('event/<int:pk>', views.EventDetail.as_view(), name='event-detail'),
>>>>>>> 4268836ea349ec10cf4aa39fb3bfdbbba52b2f8d
]
