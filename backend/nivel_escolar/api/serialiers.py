from rest_framework import serializers

from nivel_escolar.api.models import Ne


class NeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ne
        fields = "__all__"
