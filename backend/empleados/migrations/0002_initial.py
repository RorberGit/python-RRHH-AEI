# Generated by Django 5.0.2 on 2024-05-02 16:09

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('empleados', '0001_initial'),
        ('integracion', '0001_initial'),
        ('localidad', '0001_initial'),
        ('organizacion', '0001_initial'),
        ('otros', '0001_initial'),
        ('vestimenta', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AddField(
            model_name='empleados',
            name='areadpt',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, to='organizacion.areadpto', verbose_name='Area o departamento'),
        ),
        migrations.AddField(
            model_name='empleados',
            name='calzado',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, to='vestimenta.calzado', verbose_name='Talla Calzado'),
        ),
        migrations.AddField(
            model_name='empleados',
            name='camisa',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, to='vestimenta.camisa', verbose_name='Talla Camisa / Blusa'),
        ),
        migrations.AddField(
            model_name='empleados',
            name='defensa',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, to='integracion.defensa', verbose_name='Defensa'),
        ),
        migrations.AddField(
            model_name='empleados',
            name='municipio',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='localidad.municipio', verbose_name='Municipio'),
        ),
        migrations.AddField(
            model_name='empleados',
            name='ne',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, to='otros.ne', verbose_name='Nivel Escolar'),
        ),
        migrations.AddField(
            model_name='empleados',
            name='orm',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, to='integracion.orm', verbose_name='Organizaciones de masa'),
        ),
        migrations.AddField(
            model_name='empleados',
            name='pantalon',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, to='vestimenta.pantalon', verbose_name='Talla pantalón'),
        ),
        migrations.AddField(
            model_name='empleados',
            name='pase',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, to='otros.pase', verbose_name='Pase (RTD)'),
        ),
        migrations.AddField(
            model_name='empleados',
            name='procedencia',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, to='otros.procedencias', verbose_name='Procedencia'),
        ),
        migrations.AddField(
            model_name='empleados',
            name='provincia',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='localidad.provincia', verbose_name='Provincia'),
        ),
        migrations.AddField(
            model_name='empleados',
            name='proyectos',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, to='organizacion.proyectos', verbose_name='Proyectos'),
        ),
        migrations.AddField(
            model_name='empleados',
            name='turno',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, to='otros.turno', verbose_name='Turno'),
        ),
        migrations.AddField(
            model_name='historicalempleados',
            name='afp',
            field=models.ForeignKey(blank=True, db_constraint=False, default=None, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='integracion.afp', verbose_name='Afiliación política'),
        ),
        migrations.AddField(
            model_name='historicalempleados',
            name='ajtvjt',
            field=models.ForeignKey(blank=True, db_constraint=False, default=None, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='otros.ajtvjt', verbose_name='Base de alojamiento / Viajante'),
        ),
        migrations.AddField(
            model_name='historicalempleados',
            name='antdd',
            field=models.ForeignKey(blank=True, db_constraint=False, default=None, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='otros.antdd', verbose_name='Antigüedad'),
        ),
        migrations.AddField(
            model_name='historicalempleados',
            name='areadpt',
            field=models.ForeignKey(blank=True, db_constraint=False, default=None, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='organizacion.areadpto', verbose_name='Area o departamento'),
        ),
        migrations.AddField(
            model_name='historicalempleados',
            name='calzado',
            field=models.ForeignKey(blank=True, db_constraint=False, default=None, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='vestimenta.calzado', verbose_name='Talla Calzado'),
        ),
        migrations.AddField(
            model_name='historicalempleados',
            name='camisa',
            field=models.ForeignKey(blank=True, db_constraint=False, default=None, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='vestimenta.camisa', verbose_name='Talla Camisa / Blusa'),
        ),
        migrations.AddField(
            model_name='historicalempleados',
            name='defensa',
            field=models.ForeignKey(blank=True, db_constraint=False, default=None, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='integracion.defensa', verbose_name='Defensa'),
        ),
        migrations.AddField(
            model_name='historicalempleados',
            name='history_user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='historicalempleados',
            name='municipio',
            field=models.ForeignKey(blank=True, db_constraint=False, default=None, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='localidad.municipio', verbose_name='Municipio'),
        ),
        migrations.AddField(
            model_name='historicalempleados',
            name='ne',
            field=models.ForeignKey(blank=True, db_constraint=False, default=None, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='otros.ne', verbose_name='Nivel Escolar'),
        ),
        migrations.AddField(
            model_name='historicalempleados',
            name='orm',
            field=models.ForeignKey(blank=True, db_constraint=False, default=None, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='integracion.orm', verbose_name='Organizaciones de masa'),
        ),
        migrations.AddField(
            model_name='historicalempleados',
            name='pantalon',
            field=models.ForeignKey(blank=True, db_constraint=False, default=None, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='vestimenta.pantalon', verbose_name='Talla pantalón'),
        ),
        migrations.AddField(
            model_name='historicalempleados',
            name='pase',
            field=models.ForeignKey(blank=True, db_constraint=False, default=None, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='otros.pase', verbose_name='Pase (RTD)'),
        ),
        migrations.AddField(
            model_name='historicalempleados',
            name='procedencia',
            field=models.ForeignKey(blank=True, db_constraint=False, default=None, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='otros.procedencias', verbose_name='Procedencia'),
        ),
        migrations.AddField(
            model_name='historicalempleados',
            name='provincia',
            field=models.ForeignKey(blank=True, db_constraint=False, default=None, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='localidad.provincia', verbose_name='Provincia'),
        ),
        migrations.AddField(
            model_name='historicalempleados',
            name='proyectos',
            field=models.ForeignKey(blank=True, db_constraint=False, default=None, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='organizacion.proyectos', verbose_name='Proyectos'),
        ),
        migrations.AddField(
            model_name='historicalempleados',
            name='turno',
            field=models.ForeignKey(blank=True, db_constraint=False, default=None, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='otros.turno', verbose_name='Turno'),
        ),
    ]
