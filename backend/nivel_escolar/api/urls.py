from rest_framework.routers import DefaultRouter

from nivel_escolar.api.views import NeView

router = DefaultRouter()
router.register(r"", NeView, basename="Nivel escolar")

urlpatterns = router.urls
