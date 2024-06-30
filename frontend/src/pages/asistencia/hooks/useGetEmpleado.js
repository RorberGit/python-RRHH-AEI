import { useCallback } from "react";
import { useRef } from "react";
import { useState } from "react";
import useAxiosToken from "../../../hooks/useAxiosToken";
import { useMemo } from "react";

export default function useGetEmpleado({ search }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const axiosToken = useAxiosToken();

  const previusSearch = useRef(search);

  const getEmpleado = useCallback(
    async ({ search }) => {
      //si la busqueda es vacia, no se hace la peticion
      if (!search) return;

      //si la busqueda es la misma que la anterior, no se hace la peticion
      if (search === previusSearch.current) return;

      setLoading(true);

      try {
        const response = await axiosToken.get(`/employee/bynip/${search}/`);
        setData(response.data);
        setError(null);
      } catch (e) {
        setData(null);
        setError(e.message);
      } finally {
        setLoading(false);
      }

      //Asignar valor a previusSearch
      previusSearch.current = search;
    },
    [axiosToken]
  );

  //Mapeo de datos
  const mapperData = useMemo(() => {
    if (!data) return;

    return {
      nip: data.nip,
      foto: data.foto,
      nombre: data.nombre,
      apellido_paterno: data.apellido_paterno,
      apellido_materno: data.apellido_materno,
      ci: data.ci,
      cargo: data.cargo,
      proyecto: data.proyecto,
      estado: data.estado,
      is_active: data.is_active,
    };
  }, [data]);

  return { data: mapperData, error, loading, getEmpleado };
}
