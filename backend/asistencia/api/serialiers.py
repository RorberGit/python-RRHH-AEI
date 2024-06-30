from rest_framework import serializers
from .models import HoraEntradaSalida, RegistroEntradaSalida


class RegistroEntradaSalidaSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegistroEntradaSalida
        fields = "__all__"


class HoraEntradaSalidaSerializer(serializers.ModelSerializer):
    class Meta:
        model = HoraEntradaSalida
        fields = "__all__"
