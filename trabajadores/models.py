from django.db import models
import uuid

# Create your models here.


class Common(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    created_at = models.DateTimeField(
        auto_now_add=True, verbose_name=("created_at"))
    updated_at = models.DateTimeField(
        auto_now=True, verbose_name=("updated at"))

    class Meta:
        abstract = True


class Trabajador(Common):
    nombre = models.CharField("Nombre", max_length=60)
    papellido = models.CharField("Primer Apellido", max_length=30)
    sapellido = models.CharField("Segundo Apellido", max_length=30)
    edad = models.CharField("Edad", max_length=2)
    sexo = models.CharField("Sexo", max_length=1)
    ci = models.CharField("Número de Identidad", max_length=11)
    note = models.TextField("Nota")

    def __str__(self):
        return "%s %s %s" % (self.nombre, self.papellido, self.sapellido)
