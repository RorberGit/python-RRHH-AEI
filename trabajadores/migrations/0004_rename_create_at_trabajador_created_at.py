# Generated by Django 5.0.2 on 2024-02-11 03:24

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('trabajadores', '0003_alter_trabajador_id'),
    ]

    operations = [
        migrations.RenameField(
            model_name='trabajador',
            old_name='create_at',
            new_name='created_at',
        ),
    ]