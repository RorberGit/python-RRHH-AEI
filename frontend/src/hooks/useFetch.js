import { useEffect, useState } from "react";
import useAxiosToken from "./useAxiosToken";
import { useRef } from "react";

export const useFetch = (url = "") => {
  const [link, setLink] = useState(url);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setloading] = useState(true);

  const axiosToken = useAxiosToken();

  const previousLink = useRef(url);

  console.log('pre', previousLink.current)

  useEffect(() => {
    if (url === previousLink.current) return;
    if (link === "") return;

    const abortController = new AbortController();
    let ignore = true;

    const fetchData = async () => {
      setloading(true);

      await axiosToken
        .get(link, {
          signal: abortController.signal,
        })
        .then((response) => {
          ignore && setData(response?.data);
        })
        .catch((error) => {
          if (error.response) setError(error?.response?.data?.detail);

          if (error.code === "ERR_NETWORK") setError("Servidor no encontrado.");
        })
        .finally(() => {
          ignore && setloading(false);
        });
    };

    fetchData();

    return () => {
      console.log("url", link);
      abortController.abort();
      ignore = false;
    };
  }, [axiosToken, link]);

  return { data, error, loading, setLink };
};
