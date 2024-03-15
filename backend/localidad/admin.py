from django.contrib import admin
from .models import Poblado, Municipio, Provincia

# Register your models here.
admin.site.register([Poblado, Municipio, Provincia])
