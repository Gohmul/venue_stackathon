from rest_framework import generics
from rest_framework import viewsets
from .serializers import VenueSerializer, EventSerializer
from .models import Venue, Event


from django.shortcuts import render

# Create your views here.


class VenueList(viewsets.ModelViewSet):
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


def front(request):
    context = {}
    return render(request, "index.html", context)
