from django.contrib import admin

# Register your models here.
from .models import Venue, Event
admin.site.register(Venue)
admin.site.register(Event)
