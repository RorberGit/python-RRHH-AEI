# Generated by Django 5.0.2 on 2024-04-29 14:11

import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('organizacion', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='AreaDpto',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='created_at')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='updated at')),
                ('nombre', models.CharField(max_length=150, unique=True, verbose_name='Nombre')),
            ],
            options={
                'verbose_name': 'Area o departamento',
                'verbose_name_plural': 'Areas o departamentos',
                'ordering': ['nombre'],
            },
        ),
    ]