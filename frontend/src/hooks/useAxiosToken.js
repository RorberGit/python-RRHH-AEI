import { axiosToken } from "../api/axios";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const useAxiosToken = () => {
  const cookies = new Cookies();
  const token = cookies.get("token");

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const requestIntercept = axiosToken.interceptors.request.use(
      (config) => {
        if (token?.access_token) {
          config.headers["Authorization"] = `Bearer ${token?.access_token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = axiosToken.interceptors.response.use(
      (response) => {
        console.info("Response AXIOS :>", response);
        return response;
      },
      async (error) => {
        console.error("Error AXIOS response :>", error);

        const prevRequest = error?.config;

        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;
          //const newAccessToken = await refresh();
          //prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return axiosToken(prevRequest);
        }

        if (error?.response?.status === 401) {
          navigate("/login", { state: { from: location }, replace: true });
        }

        return Promise.reject(error);
      }
    );

    return () => {
      axiosToken.interceptors.request.eject(requestIntercept);
      axiosToken.interceptors.response.eject(responseIntercept);
    };
  }, [location, navigate, token]);

  return axiosToken;
};

export default useAxiosToken;
