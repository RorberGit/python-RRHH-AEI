import { RUTAS_API } from "../constants";
import axios from "../api/axios";
import { useDispatch } from "react-redux";
import { resetUser } from "../store/user/userSlice";
import { Token } from "../services";
//import axios from "../api/axios";
//import { RUTAS_API } from "../constants";

export const useLogout = () => {
  const dispatch = useDispatch();

  const logout = async () => {
    const token = Token.getToken();

    if (!token?.access_token) throw "Usuarios sin inicio de sesión";

    await axios
      .post(
        RUTAS_API.USERS.LOGOUT,
        {
          refresh_token: token.refresh_token,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((response) => {
        Token.removeToken();

        dispatch(resetUser());
        console.info("response", response);
      })
      .catch((error) => {
        console.error("error:>", error);
      });
  };

  return logout;
};
