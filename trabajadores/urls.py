from rest_framework import routers
from .api import TrabajadorViewSet


router = routers.DefaultRouter()

router.register(r'trabajador', TrabajadorViewSet, 'trabajador')

urlpatterns = router.urls
