# Generated by Django 3.1.5 on 2021-01-15 21:24

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('staticpages', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='staticpage',
            options={'ordering': ['url'], 'verbose_name': 'static page'},
        ),
    ]
