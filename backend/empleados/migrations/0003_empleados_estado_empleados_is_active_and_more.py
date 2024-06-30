# Generated by Django 5.0.2 on 2024-05-20 13:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('empleados', '0002_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='empleados',
            name='estado',
            field=models.CharField(choices=[('ENTRADA', 'Entrada'), ('SALIDA', 'Salida')], default='ENTRADA', max_length=10, null=True, verbose_name='Entrada o Salida'),
        ),
        migrations.AddField(
            model_name='empleados',
            name='is_active',
            field=models.BooleanField(blank=True, default=True, null=True, verbose_name='Si esta activo'),
        ),
        migrations.AddField(
            model_name='historicalempleados',
            name='estado',
            field=models.CharField(choices=[('ENTRADA', 'Entrada'), ('SALIDA', 'Salida')], default='ENTRADA', max_length=10, null=True, verbose_name='Entrada o Salida'),
        ),
        migrations.AddField(
            model_name='historicalempleados',
            name='is_active',
            field=models.BooleanField(blank=True, default=True, null=True, verbose_name='Si esta activo'),
        ),
    ]