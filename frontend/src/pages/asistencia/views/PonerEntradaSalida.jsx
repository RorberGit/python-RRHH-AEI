import { TextField } from "@mui/material";
import { useState } from "react";
import debounce from "just-debounce-it";
import useGetEmpleado from "../hooks/useGetEmpleado";
import { useEffect } from "react";
import { useRef } from "react";
import { useMemo } from "react";
import { useReduxEmpleado } from "../../../redux/hooks/useReduxEmpleado";

const useSearch = () => {
  const [search, updateSearch] = useState("");

  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === "";
      return;
    }
  }, [search]);

  return { search, updateSearch };
};

export default function PonerEntradaSalida() {
  const { search, updateSearch } = useSearch();
  const { data, error, loading, getEmpleado } = useGetEmpleado({ search });

  const action = useReduxEmpleado();

  console.log("data", data);
  //Almacenar la data en el Redux, si existe
  if (data) {
    action.create(data);
  }

  console.log("error", error);

  console.log("loading", loading);

  //Funcion para la busqueda
  const debounceGetEmployee = useMemo(
    () =>
      debounce((search) => {
        getEmpleado({ search });
      }, 500),
    [getEmpleado]
  );

  const handleChange = (event) => {
    const newNip = event.target.value;

    updateSearch(newNip);

    debounceGetEmployee(newNip);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getEmpleado({ search });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          name="nip"
          label="NIP del trabajador"
          onChange={handleChange}
        />
      </form>
    </>
  );
}
