from django.db import models
from common.models import CommonFields

# Create your models here.


class Provincia (CommonFields):
    nombre = models.CharField("Nombre", max_length=200, unique=True)

    def __str__(self):
        return self.nombre

    class Meta:
        ordering = ['nombre']


class Municipio (CommonFields):
    nombre = models.CharField("Nombre", max_length=200)
    provincia = models.ForeignKey(
        Provincia, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.nombre} (Provincia: {self.provincia})"

    class Meta:
        ordering = ['nombre']


class Poblado (CommonFields):
    nombre = models.CharField("Nombre", max_length=200)
    codigo = models.IntegerField(
        "Código Postal", null=True, blank=True)
    municipio = models.ForeignKey(
        Municipio, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.nombre} (Municipio: {self.municipio}, Provincia: {self.municipio.provincia})"

    class Meta:
        ordering = ['nombre']
