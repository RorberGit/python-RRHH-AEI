from django.db import models
from common.models import CommonFields
from simple_history.models import HistoricalRecords
from datetime import date

from localidad.models import Municipio, Provincia

# Create your models here.


class Empleados(CommonFields):
    nip: models.IntegerField(
        "Número de Identificación Personal", blank=True, null=True, unique=True
    )
    nombre = models.CharField("Nombre", max_length=150)
    apellido_paterno = models.CharField("Apellido Paterno", max_length=100)
    apellido_materno = models.CharField("Apellido Materno", max_length=100)
    sexo = models.CharField("Sexo", max_length=1, blank=True, null=True, default=None)
    color_piel = models.CharField(
        "Color de la piel", max_length=1, blank=True, null=True, default=None
    )
    ci = models.CharField(
        "Número de Identidad",
        max_length=11,
        blank=True,
        null=True,
        default=None,
        unique=True,
    )
    antdd = models.CharField(
        "Antigüedad", max_length=2, null=True, blank=True, default=None
    )
    ne = models.CharField(
        "Nivel Escolar", max_length=30, null=True, blank=True, default=None
    )
    ag = models.CharField(
        "Año de graduado", max_length=4, null=True, blank=True, default=None
    )
    especialidad = models.CharField(
        "Especialidad", max_length=100, null=True, blank=True, default=None
    )
    no = models.CharField("No", max_length=20, null=True, blank=True, default=None)
    calle = models.CharField(
        "Calle", max_length=250, null=True, blank=True, default=None
    )
    entre = models.CharField(
        "Entre", max_length=250, null=True, blank=True, default=None
    )
    y = models.CharField("Y", max_length=250, null=True, blank=True, default=None)
    edif = models.CharField(
        "Edificio", max_length=20, null=True, blank=True, default=None
    )
    apto = models.CharField(
        "Apartamento", max_length=20, null=True, blank=True, default=None
    )
    poblado_barrio = models.CharField(
        "Barrio/Poblado", max_length=250, null=True, blank=True, default=None
    )
    municipio = models.ForeignKey(
        Municipio,
        on_delete=models.SET_NULL,
        verbose_name="Municipio",
        null=True,
        blank=True,
        default=None,
    )
    provincia = models.ForeignKey(
        Provincia,
        on_delete=models.SET_NULL,
        verbose_name="Provincia",
        null=True,
        blank=True,
        default=None,
    )
    telefono = models.CharField(
        "Teléfono", max_length=30, null=True, blank=True, default=None
    )
    afp = models.CharField(
        "Afiliación política", max_length=250, blank=True, null=True, default=None
    )
    orm = models.CharField(
        "Organizaciones de masa", max_length=250, blank=True, null=True, default=None
    )
    cpt = models.BooleanField(
        "Cobra por tarjeta", default=False, null=True, blank=False
    )
    defensa = models.CharField(
        "Defensa", max_length=250, blank=True, null=True, default=None
    )
    talla_pantalon = models.IntegerField(
        "Talla pantalón", blank=True, null=True, default=None
    )
    talla_camisa = models.IntegerField(
        "Talla Camisa / Blusa", blank=True, null=True, default=None
    )
    talla_calzado = models.IntegerField(
        "Talla Calzado", blank=True, null=True, default=None
    )
    ruta = models.CharField("Ruta", max_length=150, blank=True, null=True, default=None)
    pg = models.CharField(
        "Parada omnibus", max_length=150, blank=True, null=True, default=None
    )
    estado_vivienda = models.CharField(
        "Estado de la vivienda", max_length=150, blank=True, null=True, default=None
    )
    propietario = models.BooleanField(
        "Propietario", default=False, null=True, blank=True
    )
    vivienda_vinculada = models.BooleanField(
        "Vivienda vinculada", default=False, null=True, blank=False
    )
    procedencia = models.CharField(
        "Procedencia", max_length=150, blank=True, null=True, default=None
    )
    fecha_captado = models.DateField(
        "Fecha de captado", null=True, blank=True, default=date.today
    )
    proyecto = models.CharField(
        "Proyecto", max_length=150, blank=True, null=True, default=None
    )
    area_dpto = models.CharField(
        "Área / Departamento", max_length=150, blank=True, null=True, default=None
    )
    cargo = models.CharField(
        "Cargo", max_length=150, blank=True, null=True, default=None
    )
    fecha_cc = models.DateField(
        "Fecha de contrato en el cargo", null=True, blank=True, default=date.today
    )
    nuevo_ingreso = models.BooleanField(
        "Nuevo ingreso", blank=True, null=True, default=True
    )
    alojamiento_viajante = models.CharField(
        "Base de alojamiento / Viajante",
        max_length=150,
        blank=True,
        null=True,
        default=None,
    )
    bloque = models.CharField(
        "Bloque", max_length=150, blank=True, null=True, default=None
    )
    apartamento = models.CharField(
        "Apartamento", max_length=150, blank=True, null=True, default=None
    )
    cuarto = models.CharField(
        "Cuarto", max_length=150, blank=True, null=True, default=None
    )
    pantry = models.CharField(
        "Pantry", max_length=150, blank=True, null=True, default=None
    )
    turno = models.CharField(
        "Turno", max_length=150, blank=True, null=True, default=None
    )
    pase = models.CharField(
        "Pase (RTD)", max_length=150, blank=True, null=True, default=None
    )

    ##image = models.ImageField("Image Field", null=True, blank=True)

    ##image_file = models.FileField("File Field", null=True, blank=True)
    ##image_data = models.BinaryField("Binary Field", null=True, blank=True)
    foto = models.TextField("Foto", null=True, blank=True)

    history = HistoricalRecords()

    @property
    def _history_user(self):
        return self.changed_by

    @_history_user.setter
    def _history_user(self, value):
        self.changed_by = value

    class meta:
        ordering = ["created_at"]

    def __str__(self):
        return "%s %s %s" % (self.nombre, self.apellido_paterno, self.apellido_materno)
