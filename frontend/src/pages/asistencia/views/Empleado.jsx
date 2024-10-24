import { Box, Typography } from "@mui/material";
import { useReduxEmpleado } from "../../../redux/hooks/useReduxEmpleado";

export default function Empleado() {
  const {
    foto,
    nip,
    ci,
    nombre,
    apellido_paterno,
    apellido_materno,
    areadpt,
    cargo,
    proyecto,
    estado,
  } = useReduxEmpleado().list;

  return (
    <Box sx={{ display: "flex" }}>
      <img
        src={foto}
        alt="Foto"
        title="Foto"
        style={{
          width: "250px",
          height: "300px",
          marginRight: 20,
          textAlign: "center",
        }}
      />
      <Box>
        <Typography
          gutterBottom
          component="div"
        >
          <strong>NIP:</strong> <i>{nip}</i>
        </Typography>
        <Typography gutterBottom>
          <strong>Número identidad:</strong> <em>{ci}</em>
        </Typography>
        <Typography gutterBottom>
          <strong>Empleado:</strong> {nombre} {apellido_paterno}{" "}
          {apellido_materno}
        </Typography>
        <Typography gutterBottom>
          <strong>Área / Departameto:</strong> {areadpt?.nombre}
        </Typography>
        <Typography gutterBottom>
          <strong>Cargo:</strong> {cargo?.nombre}
        </Typography>
        <Typography gutterBottom>
          <strong>Proyecto:</strong> {proyecto?.nombre}
        </Typography>
        <Typography gutterBottom>
          <strong>Jefe inmediato:</strong> {areadpt?.jefe?.nombre}{" "}
          {areadpt?.jefe?.apellido_paterno} {areadpt?.jefe?.apellido_materno}
        </Typography>
        <Typography gutterBottom>
          <strong>Estado:</strong> {estado}
        </Typography>
      </Box>
    </Box>
  );
}
