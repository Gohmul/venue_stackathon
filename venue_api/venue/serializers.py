from rest_framework import serializers
from .models import Venue, Event


class VenueSerializer(serializers.HyperlinkedModelSerializer):
    events = serializers.HyperlinkedRelatedField(
        view_name='event_detail',
        many=True,
        read_only=True
    )

    class Meta:
        model = Venue
        fields = ('name', 'street', 'city', 'state', 'events',
                  'description', 'image_url')


class EventSerializer(serializers.HyperlinkedModelSerializer):
    venues = serializers.HyperlinkedRelatedField(
        view_name='venue_detail',
        many=False,
        read_only=True
    )

    class Meta:
        model = Event
        fields = ('venues', 'venueName', 'act', 'date',
                  'description', 'image_url', 'soldOut')
