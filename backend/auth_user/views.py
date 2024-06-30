from django.contrib.auth import authenticate, login, logout
from django.db.models import Q
from rest_framework import filters, generics, permissions, status
from rest_framework.exceptions import AuthenticationFailed, NotAcceptable
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken

from .models import Usuario as User
from .serializers import RegisterUserSerializers, ViewUserSerializers
from .token import get_tokens_for_user


class CreateUser(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (permissions.AllowAny,)
    serializer_class = RegisterUserSerializers


class UpdateUser(generics.RetrieveUpdateAPIView):
    queryset = User.objects.all()
    permission_classes = (permissions.AllowAny,)
    serializer_class = RegisterUserSerializers


class LoginUser(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        """
        Funcion que permite guardar los registros del usuario
        """
        # data = request.data
        username = request.data.get("username")
        password = request.data.get("password")

        if not username:
            raise NotAcceptable("Nombre de usuario necesario")

        if not password:
            raise NotAcceptable("La contraseña es necesaria")

        try:
            check_user = User.objects.get(username=username)
        except User.DoesNotExist:
            raise AuthenticationFailed("Cuenta de usuario inexistente.")

        if check_user is None:
            raise AuthenticationFailed("Usuario no existe.")

        if not check_user.check_password(password):
            raise AuthenticationFailed("Contraseña incorrecta.")

        user = authenticate(username=username, password=password)

        if user is not None:
            token = get_tokens_for_user(user)
            serializer_user = ViewUserSerializers(user)
            login(request, user)
            return Response(
                {**serializer_user.data, **token}, status=status.HTTP_200_OK
            )

        return Response(
            {"detail": "Credenciales incorrectas."},
            status=status.HTTP_401_UNAUTHORIZED,
        )


class LogoutUser(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request):
        try:
            refresh_token = request.data.get("refresh_token")
            token = RefreshToken(refresh_token)
            token.blacklist()
            logout(request)

        # return Response({'refresh_token': refresh_token}, status=status.HTTP_205_RESET_CONTENT)
        except Exception:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        return Response(
            {"message": "Cierre de Sesion Existoso"}, status=status.HTTP_200_OK
        )


class ListUser(generics.ListAPIView):
    # queryset = User.objects.all()
    queryset = User.objects.filter(~Q(username="admin"))  # all()
    serializer_class = ViewUserSerializers
    permission_classes = [permissions.AllowAny]
    filter_backends = [filters.OrderingFilter]


class RetrieveUser(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = ViewUserSerializers
    permission_classes = [permissions.AllowAny]
    filter_backends = [filters.OrderingFilter]
