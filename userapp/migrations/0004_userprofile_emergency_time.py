# Generated by Django 3.1.1 on 2020-09-24 19:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('userapp', '0003_userprofile_category'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='emergency_time',
            field=models.IntegerField(default=0),
        ),
    ]