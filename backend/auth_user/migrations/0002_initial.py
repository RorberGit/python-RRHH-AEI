# Generated by Django 5.0.2 on 2024-04-29 04:38

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth_user', '0001_initial'),
        ('empleados', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='usuario',
            name='empleados',
            field=models.OneToOneField(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to='empleados.empleados'),
        ),
    ]
