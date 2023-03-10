# Generated by Django 4.1.4 on 2022-12-18 16:04

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Venue',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('street', models.CharField(max_length=100)),
                ('city', models.CharField(max_length=100)),
                ('state', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('image_url', models.CharField(max_length=500)),
            ],
        ),
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('act', models.CharField(max_length=100)),
                ('date', models.DateTimeField()),
                ('description', models.TextField()),
                ('image_url', models.CharField(max_length=500)),
                ('soldOut', models.BooleanField(default=False)),
                ('venueName', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='venues', to='venue.venue')),
            ],
        ),
    ]
