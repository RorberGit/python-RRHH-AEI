import axios from "../api/axios";
import { RUTAS_API } from "../constants";

export const Login = async (credenciales) => {
  return await axios
    .post(RUTAS_API.USERS.LOGIN, credenciales, { withCredentials: true })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("error :> ", error);

      if (error.response) throw error?.response?.data?.detail;

      if (error.code === "ERR_NETWORK") throw "Servidor no encontrado.";

      throw error;
    });
};

export const auth = {
  Login,
};
