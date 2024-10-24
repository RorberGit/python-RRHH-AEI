import { Grid, Paper } from "@mui/material";
import EntradaSalida from "./views/EntradaSalida";
import Reloj from "./views/Reloj";
import PonerEntradaSalida from "./views/PonerEntradaSalida";
import Empleado from "./views/Empleado";
import Registro from "./views/Registro";

export default function Asistencia() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} lg={3} gap="10px">
          <Paper sx={{ p: 2 }}>
            <EntradaSalida />
          </Paper>
          <Paper sx={{ mt: 2, p: 2, overflow: "hidden" }}>
            <Reloj />
          </Paper>
          <Paper sx={{ mt: 2, p: 2 }}>
            <PonerEntradaSalida />
          </Paper>
        </Grid>
        <Grid item xs={12} md={8} lg={9}>
          <Paper sx={{ p: 2, height: "100%" }}>
            <Empleado />
          </Paper>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Paper>
            <Registro />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
