from django.db import models

# Create your models here.


class Trabajador(models.Model):
    nombre = models.CharField(max_length=60)
    papellido = models.CharField(max_length=30)
    sapellido = models.CharField(max_length=30)
    edad = models.CharField(max_length=2)
    sexo = models.CharField(max_length=1)
    ci = models.CharField(max_length=11)
    note = models.TextField()
    create_at = models.DateTimeField(
        auto_now_add=True, verbose_name=("created_at"))
    updated_at = models.DateTimeField(
        auto_now=True, verbose_name=("updated at"))

    def __str__(self):
        return "%s %s %s" % (self.nombre, self.papellido, self.sapellido)
