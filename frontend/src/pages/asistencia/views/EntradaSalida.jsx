import { RUTAS_API } from "../../../constants";
import useGetData from "../../../hooks/use-GetData";
import { useState, useMemo, useEffect } from "react";
import moment from "moment/min/moment-with-locales";
import diasSemana from "./diasSemana";

export default function EntradaSalida() {
  const [jornada, setJornada] = useState(null);

  const diaActual = useMemo(() => diasSemana[moment().day()], []);
  const diaActualES = useMemo(() => moment().locale("es").format("dddd"), []);

  const { data, loading } = useGetData(
    `${RUTAS_API.asistencia.JORNADA}/${diaActual}`
  );

  useEffect(() => {
    const { hora_entrada, hora_salida } = data || {};

    if (hora_entrada && hora_salida) {
      const formatHora = (hora) => moment(hora, "HH:mm").format("h:mm a");

      setJornada({
        HoraEntrada: formatHora(hora_entrada),
        HoraSalida: formatHora(hora_salida),
      });
    }
  }, [data]);

  if (loading) return <div>Cargando...</div>;
  if (!jornada) return <div>Jornada no definida</div>;

  return (
    <>
      <strong>{diaActualES}</strong>
      <br />
      Entrada: {jornada.HoraEntrada}
      <br />
      Salida: {jornada.HoraSalida}
    </>
  );
}
