from rest_framework import generics, permissions, filters
from django_filters.rest_framework import DjangoFilterBackend
from .models import Empleados
from .serializers import EmpleadosSerializers


class ListEmpleados(generics.ListAPIView):
    queryset = Empleados.objects.all()
    serializer_class = EmpleadosSerializers
    permission_classes = [permissions.AllowAny]
    filter_backends = [filters.OrderingFilter]
    ordering = ['created_at']


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
    filterset_fields = ['id', 'nombre', 'ci']
    # ordering_fields = ['edad']
    ordering = ['created_at']
