# Generated by Django 3.0.3 on 2020-02-07 14:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('soups', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='soup',
            name='description',
            field=models.CharField(default='', editable=False, max_length=120),
        ),
    ]
