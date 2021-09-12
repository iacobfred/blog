# Generated by Django 3.2.7 on 2021-09-12 04:35

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('topics', '0011_auto_20210912_0411'),
    ]

    operations = [
        migrations.AlterField(
            model_name='topicedge',
            name='child',
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name='parent_edges',
                to='topics.topic',
                verbose_name='child Topic',
            ),
        ),
        migrations.AlterField(
            model_name='topicedge',
            name='parent',
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name='child_edges',
                to='topics.topic',
                verbose_name='parent Topic',
            ),
        ),
    ]
