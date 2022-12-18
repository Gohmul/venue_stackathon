from rest_framework import generics
from .serializers import VenueSerializer, EventSerializer
from .models import Venue, Event

from django.shortcuts import render

# Create your views here.


class VenueList(generics.ListCreateAPIView):
    queryset = Venue.objects.all()
    serializer_class = VenueSerializer

# class VenueDetail(generics.RetrieveUpdateDestroyAPIView):


class VenueDetail(generics.ListCreateAPIView):
    queryset = Venue.objects.all()
    serializer_class = VenueSerializer


class EventList(generics.ListCreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class EventDetail(generics.ListCreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
