from django.db import models

# Create your models here.


class Venue(models.Model):
    name = models.CharField(max_length=100)
    street = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    description = models.TextField()
    image_url = models.CharField(max_length=500)

    def __str__(self):
        return self.name


class Event(models.Model):
    venueName = models.ForeignKey(
        Venue, on_delete=models.CASCADE, related_name='venues'
    )
    act = models.CharField(max_length=100)
    date = models.DateTimeField(auto_now=False, auto_now_add=False)
    description = models.TextField()
    image_url = models.ImageField(
        upload_to=None, height_field=None, width_field=None, max_length=100)
    soldOut = models.BooleanField(default=False)

    def __str__(self):
        return self.act
