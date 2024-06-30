import { useMemo, useEffect, useState } from "react";
import { RUTAS_API } from "../../../constants";
import { useFetch } from "../../../hooks/useFetch";

const initialState = {
  dia_semana: "",
  hora_entrada: "",
  hora_salida: "",
};

const days = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
];

export default function EntradaSalida() {
  //Almacenar la entrada o la salida
  const [jornada, setJornada] = useState(initialState);

  //Octener día de la semana actual
  const day = new Date().getDay();

  //Convertir número del día en nombre
  const dayName = days[day];

  //Octener Hora de Entrada y Salida desde API Rest según el dia de la semana
  const { data } = useFetch(`${RUTAS_API.asistencia.JORNADA}/${dayName}`);

  //Crear un objeto con la entrada y salida
  const state = useMemo(() => {
    return data.dia_semana
      ? {
          dia_semana: data.dia_semana,
          hora_entrada: data.hora_entrada,
          hora_salida: data.hora_salida,
        }
      : initialState;
  }, [data.dia_semana, data.hora_entrada, data.hora_salida]);

  //Guardar el objeto state en el estado jornada
  useEffect(() => {
    setJornada(state);
  }, [state]);

  return (
    <>
      <strong>{jornada.dia_semana}</strong>
      <br />
      Entrada: {jornada.hora_entrada}
      <br />
      Salida: {jornada.hora_salida}
    </>
  );
}
