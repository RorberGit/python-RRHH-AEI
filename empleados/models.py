from django.db import models
from common.models import CommonFields

# Create your models here.


class Empleados(CommonFields):
    nombre = models.CharField("Nombre", max_length=60)
    papellido = models.CharField("Primer Apellido", max_length=30)
    sapellido = models.CharField("Segundo Apellido", max_length=30)
    edad = models.CharField("Edad", max_length=2)
    sexo = models.CharField("Sexo", max_length=1)
    ci = models.CharField("Número de Identidad", max_length=11)
    note = models.TextField("Nota")

    class meta:
        ordering = ['created_at']

    def __str__(self):
        return "%s %s %s" % (self.nombre, self.papellido, self.sapellido)
