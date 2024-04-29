from django.db import models
from common.models import CommonFields


class Ne(CommonFields):
    nombre = models.CharField(verbose_name="Nombre", max_length=150, unique=True)

    def __str__(self):
        return f"{self.nombre}"

    class Meta:
        verbose_name = "Nivel escolar"
        verbose_name_plural = "Niveles escolares"
        ordering = ["nombre"]
