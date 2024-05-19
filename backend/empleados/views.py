from django.db.models import Max
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters, generics, permissions

from .models import Empleados
from .serializers import EmpleadosSerializers

from rest_framework.views import APIView
from rest_framework.response import Response


class ListEmpleados(generics.ListAPIView):
    queryset = Empleados.objects.all().order_by("created_at")
    serializer_class = EmpleadosSerializers
    permission_classes = [permissions.AllowAny]
    filter_backends = [filters.OrderingFilter]


class RetrieveEmpleados(generics.RetrieveAPIView):
    queryset = Empleados.objects.all().order_by("created_at")
    serializer_class = EmpleadosSerializers
    permission_classes = [permissions.AllowAny]
    filter_backends = [filters.OrderingFilter]


class CreateEmpleados(generics.CreateAPIView):
    queryset = Empleados.objects.all()
    serializer_class = EmpleadosSerializers
    permission_classes = [permissions.AllowAny]


class UpdateEmpleados(generics.RetrieveUpdateAPIView):
    queryset = Empleados.objects.all()
    serializer_class = EmpleadosSerializers
    permission_classes = [permissions.AllowAny]


class DeleteEmpleados(generics.RetrieveDestroyAPIView):
    queryset = Empleados.objects.all()
    serializer_class = EmpleadosSerializers
    permission_classes = [permissions.AllowAny]


class FilterEmpleados(generics.ListAPIView):
    queryset = Empleados.objects.all()
    serializer_class = EmpleadosSerializers
    permission_classes = [permissions.AllowAny]
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_fields = ["id", "nombre", "ci"]
    ## para poner en el filtrado todos los campos del serializaers
    """ filterset_fields = serializer_class.Meta.fields """
    # ordering_fields = ['edad']
    ordering = ["created_at"]


class MaxNIP(APIView):
    """obtener maximo numero"""

    def get(self, _):
        max_nip = Empleados.objects.all().aggregate(max_number=Max("nip"))["max_number"]
        return Response({"max_nip": max_nip})
