from rest_framework.routers import DefaultRouter

from .views import AntddView

router = DefaultRouter()
router.register(r"", AntddView, basename="Antiguedad")

urlpatterns = router.urls
