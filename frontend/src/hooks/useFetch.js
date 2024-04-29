import { useEffect, useState } from "react";
import useAxiosToken from "./useAxiosToken";

export const useFetch = (url = "") => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setloading] = useState(true);

  const axiosToken = useAxiosToken();

  useEffect(() => {
    const abortController = new AbortController();
    let ignore = true;

    const fetchData = async () => {
      setloading(true);

      await axiosToken
        .get(url, {
          signal: abortController.signal,
        })
        .then((response) => {
          ignore && setData(response?.data);
        })
        .catch((error) => {
          console.error("error :> ", error);

          if (error.response) setError(error?.response?.data?.detail);

          if (error.code === "ERR_NETWORK") setError("Servidor no encontrado.");
        })
        .finally(() => {
          ignore && setloading(false);
        });
    };

    fetchData();

    return () => {
      abortController.abort();
      ignore = false;
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return { data, error, loading };
};
