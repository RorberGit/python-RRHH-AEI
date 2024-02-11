from rest_framework import serializers
from .models import Trabajador


class TrabajadorSerializers(serializers.ModelSerializer):
    class Meta:
        model = Trabajador
        fields = "__all__"
        # read_only_fields = ('create_at', )
