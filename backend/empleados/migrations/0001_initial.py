# Generated by Django 5.0.2 on 2024-05-01 21:07

import datetime
import django.db.models.deletion
import simple_history.models
import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('integracion', '0001_initial'),
        ('otros', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='HistoricalEmpleados',
            fields=[
                ('id', models.UUIDField(db_index=True, default=uuid.uuid4, editable=False)),
                ('created_at', models.DateTimeField(blank=True, editable=False, verbose_name='created_at')),
                ('updated_at', models.DateTimeField(blank=True, editable=False, verbose_name='updated at')),
                ('nip', models.IntegerField(blank=True, db_index=True, null=True, verbose_name='Número de Identificación Personal')),
                ('nombre', models.CharField(max_length=150, verbose_name='Nombre')),
                ('apellido_paterno', models.CharField(max_length=100, verbose_name='Apellido Paterno')),
                ('apellido_materno', models.CharField(max_length=100, verbose_name='Apellido Materno')),
                ('sexo', models.CharField(choices=[('M', 'Masculino'), ('F', 'Femenino')], default='M', max_length=1, null=True, verbose_name='Sexo')),
                ('color_piel', models.CharField(choices=[('B', 'Blanca'), ('N', 'Negra'), ('M', 'Mestiza')], default='B', max_length=1, null=True, verbose_name='Color de la piel')),
                ('ci', models.CharField(blank=True, db_index=True, default=None, max_length=11, null=True, verbose_name='Número de Identidad')),
                ('ag', models.CharField(blank=True, default=None, max_length=4, null=True, verbose_name='Año de graduado')),
                ('no', models.CharField(blank=True, default=None, max_length=20, null=True, verbose_name='No')),
                ('calle', models.CharField(blank=True, default=None, max_length=250, null=True, verbose_name='Calle')),
                ('entre', models.CharField(blank=True, default=None, max_length=250, null=True, verbose_name='Entre')),
                ('y', models.CharField(blank=True, default=None, max_length=250, null=True, verbose_name='Y')),
                ('edif', models.CharField(blank=True, default=None, max_length=20, null=True, verbose_name='Edificio')),
                ('apto', models.CharField(blank=True, default=None, max_length=20, null=True, verbose_name='Apartamento')),
                ('poblado_barrio', models.CharField(blank=True, default=None, max_length=250, null=True, verbose_name='Barrio/Poblado')),
                ('telefono', models.CharField(blank=True, default=None, max_length=30, null=True, verbose_name='Teléfono')),
                ('cpt', models.BooleanField(default=False, null=True, verbose_name='Cobra por tarjeta')),
                ('ruta', models.CharField(blank=True, default=None, max_length=150, null=True, verbose_name='Ruta')),
                ('pg', models.CharField(blank=True, default=None, max_length=150, null=True, verbose_name='Parada omnibus')),
                ('estado_vivienda', models.CharField(blank=True, choices=[('B', 'Buena'), ('R', 'Regular'), ('M', 'Mala')], default='B', max_length=1, null=True, verbose_name='Estado de la vivienda')),
                ('propietario', models.BooleanField(blank=True, default=False, null=True, verbose_name='Propietario')),
                ('vivienda_vinculada', models.BooleanField(default=False, null=True, verbose_name='Vivienda vinculada')),
                ('fecha_captado', models.DateField(blank=True, default=datetime.date.today, null=True, verbose_name='Fecha de captado')),
                ('fecha_cc', models.DateField(blank=True, default=datetime.date.today, null=True, verbose_name='Fecha de contrato en el cargo')),
                ('nuevo_ingreso', models.BooleanField(blank=True, default=True, null=True, verbose_name='Nuevo ingreso')),
                ('bloque', models.CharField(blank=True, default=None, max_length=150, null=True, verbose_name='Bloque')),
                ('aptoabg', models.CharField(blank=True, default=None, max_length=150, null=True, verbose_name='Apartamento de albergado')),
                ('cuarto', models.CharField(blank=True, default=None, max_length=150, null=True, verbose_name='Cuarto')),
                ('pantry', models.CharField(blank=True, default=None, max_length=150, null=True, verbose_name='Pantry')),
                ('turno', models.CharField(blank=True, default=None, max_length=150, null=True, verbose_name='Turno')),
                ('pase', models.CharField(blank=True, default=None, max_length=150, null=True, verbose_name='Pase (RTD)')),
                ('foto', models.TextField(blank=True, null=True, verbose_name='Foto')),
                ('history_id', models.AutoField(primary_key=True, serialize=False)),
                ('history_date', models.DateTimeField(db_index=True)),
                ('history_change_reason', models.CharField(max_length=100, null=True)),
                ('history_type', models.CharField(choices=[('+', 'Created'), ('~', 'Changed'), ('-', 'Deleted')], max_length=1)),
            ],
            options={
                'verbose_name': 'historical empleados',
                'verbose_name_plural': 'historical empleadoss',
                'ordering': ('-history_date', '-history_id'),
                'get_latest_by': ('history_date', 'history_id'),
            },
            bases=(simple_history.models.HistoricalChanges, models.Model),
        ),
        migrations.CreateModel(
            name='Empleados',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='created_at')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='updated at')),
                ('nip', models.IntegerField(blank=True, null=True, unique=True, verbose_name='Número de Identificación Personal')),
                ('nombre', models.CharField(max_length=150, verbose_name='Nombre')),
                ('apellido_paterno', models.CharField(max_length=100, verbose_name='Apellido Paterno')),
                ('apellido_materno', models.CharField(max_length=100, verbose_name='Apellido Materno')),
                ('sexo', models.CharField(choices=[('M', 'Masculino'), ('F', 'Femenino')], default='M', max_length=1, null=True, verbose_name='Sexo')),
                ('color_piel', models.CharField(choices=[('B', 'Blanca'), ('N', 'Negra'), ('M', 'Mestiza')], default='B', max_length=1, null=True, verbose_name='Color de la piel')),
                ('ci', models.CharField(blank=True, default=None, max_length=11, null=True, unique=True, verbose_name='Número de Identidad')),
                ('ag', models.CharField(blank=True, default=None, max_length=4, null=True, verbose_name='Año de graduado')),
                ('no', models.CharField(blank=True, default=None, max_length=20, null=True, verbose_name='No')),
                ('calle', models.CharField(blank=True, default=None, max_length=250, null=True, verbose_name='Calle')),
                ('entre', models.CharField(blank=True, default=None, max_length=250, null=True, verbose_name='Entre')),
                ('y', models.CharField(blank=True, default=None, max_length=250, null=True, verbose_name='Y')),
                ('edif', models.CharField(blank=True, default=None, max_length=20, null=True, verbose_name='Edificio')),
                ('apto', models.CharField(blank=True, default=None, max_length=20, null=True, verbose_name='Apartamento')),
                ('poblado_barrio', models.CharField(blank=True, default=None, max_length=250, null=True, verbose_name='Barrio/Poblado')),
                ('telefono', models.CharField(blank=True, default=None, max_length=30, null=True, verbose_name='Teléfono')),
                ('cpt', models.BooleanField(default=False, null=True, verbose_name='Cobra por tarjeta')),
                ('ruta', models.CharField(blank=True, default=None, max_length=150, null=True, verbose_name='Ruta')),
                ('pg', models.CharField(blank=True, default=None, max_length=150, null=True, verbose_name='Parada omnibus')),
                ('estado_vivienda', models.CharField(blank=True, choices=[('B', 'Buena'), ('R', 'Regular'), ('M', 'Mala')], default='B', max_length=1, null=True, verbose_name='Estado de la vivienda')),
                ('propietario', models.BooleanField(blank=True, default=False, null=True, verbose_name='Propietario')),
                ('vivienda_vinculada', models.BooleanField(default=False, null=True, verbose_name='Vivienda vinculada')),
                ('fecha_captado', models.DateField(blank=True, default=datetime.date.today, null=True, verbose_name='Fecha de captado')),
                ('fecha_cc', models.DateField(blank=True, default=datetime.date.today, null=True, verbose_name='Fecha de contrato en el cargo')),
                ('nuevo_ingreso', models.BooleanField(blank=True, default=True, null=True, verbose_name='Nuevo ingreso')),
                ('bloque', models.CharField(blank=True, default=None, max_length=150, null=True, verbose_name='Bloque')),
                ('aptoabg', models.CharField(blank=True, default=None, max_length=150, null=True, verbose_name='Apartamento de albergado')),
                ('cuarto', models.CharField(blank=True, default=None, max_length=150, null=True, verbose_name='Cuarto')),
                ('pantry', models.CharField(blank=True, default=None, max_length=150, null=True, verbose_name='Pantry')),
                ('turno', models.CharField(blank=True, default=None, max_length=150, null=True, verbose_name='Turno')),
                ('pase', models.CharField(blank=True, default=None, max_length=150, null=True, verbose_name='Pase (RTD)')),
                ('foto', models.TextField(blank=True, null=True, verbose_name='Foto')),
                ('afp', models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, to='integracion.afp', verbose_name='Afiliación política')),
                ('ajtvjt', models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, to='otros.ajtvjt', verbose_name='Base de alojamiento / Viajante')),
                ('antdd', models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, to='otros.antdd', verbose_name='Antigüedad')),
            ],
            options={
                'ordering': ['created_at'],
            },
        ),
    ]
