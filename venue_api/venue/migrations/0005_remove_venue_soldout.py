# Generated by Django 4.1.4 on 2022-12-19 13:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('venue', '0004_venue_soldout_alter_event_image_url_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='venue',
            name='soldOut',
        ),
    ]