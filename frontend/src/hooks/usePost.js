import { useCallback } from "react";
import useAxiosToken from "./useAxiosToken";

export const usePost = () => {
  const axiosToken = useAxiosToken();

  const create = useCallback(
    async (url = "", body = null) => {
      return await axiosToken
        .post(url, body)
        .then((response) => {
          console.info("POST RESPONSE :>", response);
          return response;
        })
        .catch((error) => {
          console.error("POST ERROR :>", error);
        });
    },
    [axiosToken]
  );

  return create;
};
