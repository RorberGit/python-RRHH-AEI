from rest_framework import routers
from django.urls import path

from . import views

urlpatterns = [
    path('list/', views.ListEmpleados.as_view(), name='List'),
    path('retrieve/<pk>/', views.RetrieveEmpleados.as_view(), name='Retrieve'),
    path('create/', views.CreateEmpleados.as_view(), name='Create'),
    path('update/<pk>/', views.UpdateEmpleados.as_view(), name='Update'),
    path('delete/<pk>', views.DeleteEmpleados.as_view(), name='Delete'),
    path('filter/', views.FilterEmpleados.as_view(), name='Filter'),
]
