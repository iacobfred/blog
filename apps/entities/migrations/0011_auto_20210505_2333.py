# Generated by Django 3.1.9 on 2021-05-05 23:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('entities', '0010_entity_reference_urls'),
    ]

    operations = [
        migrations.AddField(
            model_name='entity',
            name='hidden',
            field=models.BooleanField(
                blank=True,
                default=False,
                help_text='Hide this item from search results.',
            ),
        ),
        migrations.AddField(
            model_name='entity',
            name='verified',
            field=models.BooleanField(default=False, verbose_name='verified'),
        ),
    ]
