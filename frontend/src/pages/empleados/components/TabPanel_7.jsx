import { TabPanel } from "@mui/lab";
import { CampoTexto } from "../../../components/mui";
import { Box } from "@mui/material";
import PropTypes from "prop-types";

export default function TabPanel_7({ comun }) {
  return (
    <TabPanel value="7">
      <Box
        display="grid"
        gap="15px 10px"
        m={2}
        gridTemplateColumns="repeat(12, 1fr)"
      >
        <CampoTexto
          name="alojamiento_viajante"
          label="Base de alojamiento / Viajante"
          span="6"
          {...comun}
        />
        <CampoTexto
          name="apartamento"
          label="Apartamento"
          span="6"
          {...comun}
        />
        <CampoTexto name="bloque" label="Bloque" span="6" {...comun} />
        <CampoTexto name="cuarto" label="Cuarto" span="6" {...comun} />
        <CampoTexto name="pg" label="Parada omnibus" span="6" {...comun} />
        <CampoTexto name="ruta" label="Ruta" span="6" {...comun} />
        <CampoTexto name="pantry" label="Pantry" span="6" {...comun} />
      </Box>
    </TabPanel>
  );
}

TabPanel_7.propTypes = {
  comun: PropTypes.object,
};
