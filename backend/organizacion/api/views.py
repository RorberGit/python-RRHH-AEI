from rest_framework import viewsets
from .models import Proyectos
from .serialiers import ProyectosSerializer


class ProyectosView(viewsets.ModelViewSet):
    serializer_class = ProyectosSerializer
    queryset = Proyectos.objects.all()
