from rest_framework.routers import DefaultRouter

from .views import OrmView, AfpView, DefensaView

router = DefaultRouter()
router.register(r"", OrmView, basename="Organizaciones de masa")
router.register(r"", AfpView, basename="Afiliaciones políticas")
router.register(r"", DefensaView, basename="Ubicación en defensa")

urlpatterns = router.urls
