# Generated by Django 5.0.2 on 2024-04-29 04:23

import django.db.models.deletion
import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Provincia',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='created_at')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='updated at')),
                ('nombre', models.CharField(max_length=200, unique=True, verbose_name='Nombre')),
            ],
            options={
                'ordering': ['nombre'],
            },
        ),
        migrations.CreateModel(
            name='Municipio',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='created_at')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='updated at')),
                ('nombre', models.CharField(max_length=200, verbose_name='Nombre')),
                ('provincia', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='localidad.provincia')),
            ],
            options={
                'ordering': ['nombre'],
            },
        ),
    ]