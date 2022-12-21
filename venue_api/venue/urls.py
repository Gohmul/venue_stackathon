from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter
from django.contrib import admin
from venue.views import front


urlpatterns = [
    path("", front, name="front"),
    path("venues/", front, name="front"),
    path('venue/<id>/', front, name="venue_detail"),
    path("events/", front, name="front"),
    path('event/<id>/', front, name="event_detail"),
    path(
        'venuesdata/', views.VenueList.as_view({'get': 'list'}), name='venue_list'),
    path('venuedata/<int:pk>', views.VenueDetail.as_view(), name='venue-detail'),
    path('eventsdata/', views.EventList.as_view(), name='event_list'),
    path('eventdata/<int:pk>', views.EventDetail.as_view(), name='event-detail'),


]
