from django.urls import path

from . import views

urlpatterns = [
    path('create/', views.CreateUser.as_view(), name='Create'),
    path('update/<pk>/', views.UpdateUser.as_view(), name='Update'),
    path('login/', views.LoginUser.as_view(), name='Login'),
    path('logout/', views.LogoutUser.as_view(), name='Logout'),
    path('list/', views.ListUser.as_view(), name='List'),
    path('retrieve/<pk>/', views.RetrieveUser.as_view(), name='Retrieve'),
]
