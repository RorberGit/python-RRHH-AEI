from rest_framework import generics, permissions, filters
from django_filters.rest_framework import DjangoFilterBackend
from .models import Empleados
from .serializers import EmpleadosSerializers


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
