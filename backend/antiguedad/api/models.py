from django.db import models
from common.models import CommonFields


class Antdd(CommonFields):
    nombre = models.CharField(verbose_name="Nombre", max_length=150, unique=True)

    def __str__(self):
        return f"{self.nombre}"

    class Meta:
        verbose_name = "Antigüedad"
        verbose_name_plural = "Antigüedad"
        ordering = ["nombre"]
