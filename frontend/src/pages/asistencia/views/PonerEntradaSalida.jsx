import { TextField } from "@mui/material";
import debounce from "just-debounce-it";
import useReduxCounter from "../../../redux/hooks/useReduxCounter";
import { useMemo, useState, useEffect, useCallback } from "react";
import axios from "../../../api/axios";
import useGetData from "../../../hooks/use-GetData";
import { useReduxEmpleado } from "../../../redux/hooks/useReduxEmpleado";
import Swal from "sweetalert2";
import { toast, Toaster } from "sonner";

export default function PonerEntradaSalida() {
  const [nip, setNip] = useState("");
  const [search, setSearch] = useState(null);
  const store = useReduxEmpleado();
  const counter = useReduxCounter();
  const { data } = useGetData(search);

  useEffect(() => {
    if (data) {
      store.create(data);
    } else {
      store.reset();
    }
  }, [data, store]);

  const debounceGetEmployee = useMemo(
    () =>
      debounce((searchNIP) => {
        setSearch(searchNIP ? `/employee/bynip/${searchNIP}/` : null);
      }, 300),
    []
  );

  const handleChange = useCallback(
    (event) => {
      const newNip = event.target.value;
      setNip(newNip);
      debounceGetEmployee(newNip);
    },
    [debounceGetEmployee]
  );

  // Función para manejar el registro de entrada o salida
  const handleEntradaSalida = useCallback(async () => {
    // Si no hay datos, salir de la función
    if (!data) return;

    // Determinar el título y la URL según el estado del empleado
    const { title, url } =
      data.estado === "ENTRADA"
        ? {
            title: "¿Desea registrar la hora de entrada?",
            url: "/asistencia/empleados/crear-entrada/",
          }
        : {
            title: "¿Desea registrar la hora de salida?",
            url: `/asistencia/empleados/${data.nip}/actualizar-salida/`,
          };

    // Mostrar un cuadro de diálogo de confirmación
    const result = await Swal.fire({
      title,
      showCancelButton: true,
      confirmButtonText: "Sí",
      cancelButtonText: "No",
    });

    // Si el usuario confirma, proceder con el registro
    if (result.isConfirmed) {
      // Determinar el método HTTP según el estado
      const method = data.estado === "ENTRADA" ? axios.post : axios.put;
      // Realizar la petición al servidor
      await method(
        url,
        data.estado === "ENTRADA" ? { nip: data.nip } : undefined
      )
        .then(() => {
          toast.success("Registro exitoso");
        })
        .catch(() => {
          toast.error("Error al registrar");
        });
      // Incrementar el contador
      counter.increment();
    }
  }, [data, counter]);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      handleEntradaSalida();
      setSearch(null);
      setNip("");
    },
    [handleEntradaSalida]
  );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          name="nip"
          label="NIP del trabajador"
          onChange={handleChange}
          value={nip}
        />
      </form>
      <Toaster position="bottom-left" richColors />
    </div>
  );
}
