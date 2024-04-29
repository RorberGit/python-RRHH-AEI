from rest_framework.routers import DefaultRouter

from .views import ProyectosView

router = DefaultRouter()
router.register(r"", ProyectosView, basename="Proyectos")

urlpatterns = router.urls
