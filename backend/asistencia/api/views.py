from datetime import datetime
from django.shortcuts import get_object_or_404
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.views import APIView

from empleados.models import Empleados
from .models import HoraEntradaSalida, RegistroEntradaSalida
from .serialiers import HoraEntradaSalidaSerializer, RegistroEntradaSalidaSerializer


class CrearEntradaEmpleado(APIView):
    def post(self, request):
        """
        A function to create a new entry for an employee based on the provided NIP.
        It saves the employee's ID, current date, and time of entry, and returns a response.
        """
        nip = request.data.get("nip")

        empleado = Empleados.objects.get(nip=nip)

        data = {
            "empleado": empleado.id,
            "fecha_y_hora_entrada": datetime.now(),
        }

        serializer = RegistroEntradaSalidaSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ActualizarSalidaEmpleado(APIView):
    def get(self, _, nip):
        """
        Retrieves the latest entry for an employee based on their NIP.

        Args:
            _: The first positional argument is ignored.
            nip (str): The NIP of the employee.

        Returns:
            Response: The serialized data of the latest entry for the employee.
        """
        empleado = Empleados.objects.get(nip=nip)

        registro_entrada = RegistroEntradaSalida.objects.filter(
            empleado_id=empleado.id, fecha_y_hora_salida=None
        ).latest("fecha_y_hora_entrada")

        serializer = RegistroEntradaSalidaSerializer(registro_entrada)

        return Response(serializer.data)

    def put(self, _, nip):
        """
        Updates the 'fecha_y_hora_salida' field of the latest 'RegistroEntradaSalida' object for a given employee.

        Args:
            _: The first positional argument is ignored.
            nip (str): The NIP of the employee.

        Returns:
            Response: If the update is successful, returns the serialized data of the updated 'RegistroEntradaSalida' object with a status code of 200 (OK). If the update fails, returns the serializer errors with a status code of 400 (Bad Request).
        """
        empleado = Empleados.objects.get(nip=nip)

        registro_entrada = RegistroEntradaSalida.objects.filter(
            empleado_id=empleado.id, fecha_y_hora_salida=None
        ).latest("fecha_y_hora_entrada")

        serializer = RegistroEntradaSalidaSerializer(
            registro_entrada, data={"fecha_y_hora_salida": datetime.now()}, partial=True
        )

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class HoraEntradaSalidaView(viewsets.ModelViewSet):
    serializer_class = HoraEntradaSalidaSerializer
    queryset = HoraEntradaSalida.objects.all()


# Recuperar entrada y salida de empleados según día de la semana proporcionado
class RetrieveHoraEntradaSalidaByDay(APIView):
    def get(self, _, dia_semana):
        """
        Retrieves the latest entry for an the Hora Entrada and Salida based on their dia de semana.
        """
        ##entrada_salida = HoraEntradaSalida.objects.get(dia_semana=dia_semana)
        entrada_salida = get_object_or_404(HoraEntradaSalida, dia_semana=dia_semana)

        serializer = HoraEntradaSalidaSerializer(entrada_salida)

        return Response(serializer.data)
