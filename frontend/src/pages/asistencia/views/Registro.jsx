import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
  tableCellClasses,
} from "@mui/material";
import useReduxCounter from "../../../redux/hooks/use-ReduxCounter";
import useGetData from "../../../hooks/use-GetData";
import moment from "moment";
import { useEffect, useState, useMemo, useCallback } from "react";
import diasSemana from "./diasSemana";
import { RUTAS_API } from "../../../constants";
import calcularDiferenciaTiempo from "./calcularDiferenciaTiempo";
import calcularHorasTrabajadas from "./calcularHorasTrabajadas";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Registro() {
  const { list: cambios } = useReduxCounter();
  const [horaEntrada, setHoraEntrada] = useState(null);
  const [horaSalida, setHoraSalida] = useState(null);

  const diaActual = useMemo(() => diasSemana[moment().day()], []);

  const { data: jornadaData, loading: jornadaLoading } = useGetData(
    `${RUTAS_API.asistencia.JORNADA}/${diaActual}`
  );
  const { data, loading, refresData } = useGetData(
    "asistencia/registroentrada/"
  );

  useEffect(() => {
    refresData();
  }, [cambios, refresData]);

  useEffect(() => {
    if (!jornadaLoading && jornadaData) {
      const { hora_entrada, hora_salida } = jornadaData;
      setHoraEntrada(moment(hora_entrada, "HH:mm:ss").format("h:mm A"));
      setHoraSalida(moment(hora_salida, "HH:mm:ss").format("h:mm A"));
    }
  }, [jornadaData, jornadaLoading]);

  const renderRow = useCallback(
    (row) => {
      const NIP = row.empleado.nip;
      const NombreCompleto = `${row.empleado.nombre} ${row.empleado.apellido_paterno} ${row.empleado.apellido_materno}`;
      const EntradaRegistrada = moment(row.fecha_y_hora_entrada)
        .utc()
        .format("h:mm A");
      const DiferenciaEntrada = calcularDiferenciaTiempo(
        EntradaRegistrada,
        horaEntrada
      );

      const SalidaRegistrada = row.fecha_y_hora_salida
        ? moment(row.fecha_y_hora_salida).utc().format("h:mm A")
        : "No registrada";

      const DiferenciaSalida =
        SalidaRegistrada !== "No registrada"
          ? calcularDiferenciaTiempo(SalidaRegistrada, horaSalida)
          : "No registrada";

      const HorasTrabajadas = calcularHorasTrabajadas(
        EntradaRegistrada,
        SalidaRegistrada
      );

      const entradaTarde = moment(EntradaRegistrada, "h:mm A")
        .subtract(10, "minutes")
        .isAfter(moment(horaEntrada, "h:mm A"));

      const salidaTemprana = moment(SalidaRegistrada, "h:mm A").isBefore(
        moment(horaSalida, "h:mm A")
      );

      return (
        <StyledTableRow key={crypto.randomUUID()}>
          <StyledTableCell>{NIP}</StyledTableCell>
          <StyledTableCell style={{ minWidth: "200px" }}>
            {NombreCompleto}
          </StyledTableCell>
          <StyledTableCell style={{ minWidth: "110px" }}>
            {EntradaRegistrada}
          </StyledTableCell>
          <StyledTableCell>
            <span style={{ color: entradaTarde ? "red" : "inherit" }}>
              {DiferenciaEntrada}
            </span>
          </StyledTableCell>
          <StyledTableCell style={{ minWidth: "110px" }}>
            {SalidaRegistrada}
          </StyledTableCell>
          <StyledTableCell>
            <span style={{ color: salidaTemprana ? "red" : "inherit" }}>
              {DiferenciaSalida}
            </span>
          </StyledTableCell>
          <StyledTableCell>{HorasTrabajadas}</StyledTableCell>
        </StyledTableRow>
      );
    },
    [horaEntrada, horaSalida]
  );

  if (horaEntrada === null || horaSalida === null) {
    return (
      <div>
        <b>Jornada no definida</b>
      </div>
    );
  }

  if (loading) {
    return (
      <div>
        <b>Cargando...</b>
      </div>
    );
  }

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>NIP</StyledTableCell>
              <StyledTableCell>Nombre y Apellidos</StyledTableCell>
              <StyledTableCell>Hora de Entrada</StyledTableCell>
              <StyledTableCell>Diferencia</StyledTableCell>
              <StyledTableCell>Hora de Salida</StyledTableCell>
              <StyledTableCell>Diferencia</StyledTableCell>
              <StyledTableCell>Horas Trabajadas</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>{data && data.map(renderRow)}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
