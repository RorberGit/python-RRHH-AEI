from rest_framework import viewsets
from .models import Antdd
from .serialiers import AntddSerializer


class AntddView(viewsets.ModelViewSet):

    serializer_class = AntddSerializer
    queryset = Antdd.objects.all()
