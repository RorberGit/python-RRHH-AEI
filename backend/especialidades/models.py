from django.db import models
from common.models import CommonFields

# Create your models here.


class Especialidades(CommonFields):
    nombre = models.CharField("Especialidad", max_length=150, unique=True)

    def __str__(self):
        return self.nombre

    class Meta:
        ordering = ['nombre']
