from rest_framework import viewsets
from nivel_escolar.api.models import Ne
from nivel_escolar.api.serialiers import NeSerializer


class NeView(viewsets.ModelViewSet):
    """
    Vistas
    """

    serializer_class = NeSerializer
    queryset = Ne.objects.all()
