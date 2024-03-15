from django.db import models
from common.models import CommonFields

# Create your models here.


class AreaDpto(CommonFields):
    nombre = models.CharField("Área o Departamento",
                              max_length=150, unique=True)
    jefe = models.CharField("Jefe Inmediato", max_length=100)

    def __str__(self):
        return self.nombre

    class Meta:
        ordering = ['nombre']
