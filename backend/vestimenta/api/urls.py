from rest_framework.routers import DefaultRouter

from .views import PantalonView, CamisaView, CalzadoView

router = DefaultRouter()
router.register(r"", PantalonView, basename="Talla pantalon")
router.register(r"", CamisaView, basename="Talla camisa")
router.register(r"", CalzadoView, basename="Talla calzado")

urlpatterns = router.urls
