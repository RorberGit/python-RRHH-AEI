from rest_framework import serializers
from .models import Empleados


class EmpleadosSerializers(serializers.ModelSerializer):
    class Meta:
        model = Empleados
        fields = "__all__"
        # read_only_fields = ('create_at', )
