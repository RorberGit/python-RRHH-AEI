from rest_framework import serializers

from .models import Antdd

class AntddSerializer(serializers.ModelSerializer):
    class Meta:
        model = Antdd
        fields = "__all__"
