import { Box, Typography } from "@mui/material";
import { useReduxEmpleado } from "../../../redux/hooks/use-ReduxEmpleado";

export default function Empleado() {
  //! Datos del empleado desde el store
  const empleado = useReduxEmpleado().list;

  console.log(" empleado", empleado);

  //! Retornar un Typography formateado  con los datos del empleado
  const renderTypography = (label, value) => (
    <Typography gutterBottom>
      <strong>{label}:</strong> <em>{value}</em>
    </Typography>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <img
        src={empleado.foto}
        alt="Foto"
        title="Foto"
        width={250}
        height={300}
        style={{ marginRight: 20 }}
      />
      <Box>
        {renderTypography("NIP", empleado.nip)}
        {renderTypography("Número identidad", empleado.ci)}
        {renderTypography(
          "Empleado",
          `${empleado.nombre} ${empleado.apellido_paterno} ${empleado.apellido_materno}`
        )}
        {renderTypography("Área / Departamento", empleado.areadpt?.nombre)}
        {renderTypography("Cargo", empleado?.cargo?.nombre)}
        {renderTypography("Proyecto", empleado?.proyecto?.nombre)}
        {renderTypography(
          "Jefe inmediato",
          empleado?.areadpt?.jefe
            ? `${empleado.areadpt.jefe.nombre} ${empleado.areadpt.jefe.apellido_paterno} ${empleado.areadpt.jefe.apellido_materno}`
            : ""
        )}
        {renderTypography("Estado", empleado.estado)}
      </Box>
    </Box>
  );
}
