# Generated by Django 5.0.2 on 2024-04-29 14:15

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('empleados', '0001_initial'),
        ('organizacion', '0002_areadpto'),
    ]

    operations = [
        migrations.AddField(
            model_name='areadpto',
            name='jefe',
            field=models.OneToOneField(blank=True, default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, to='empleados.empleados', verbose_name='Jefe inmediato'),
        ),
    ]