import { TabPanel } from "@mui/lab";
import { CampoTexto } from "../../../components/mui";
import { Box } from "@mui/material";
import PropTypes from "prop-types";

export default function TabPanel_6({ comun }) {
  return (
    <TabPanel value="6">
      <Box
        display="grid"
        gap="15px 10px"
        m={2}
        gridTemplateColumns="repeat(12, 1fr)"
      >
        <CampoTexto
          name="estado_vivienda"
          label="Estado de la vivienda"
          span="6"
          {...comun}
        />
        <CampoTexto
          name="propietario"
          label="Propietario"
          span="6"
          {...comun}
        />
        <CampoTexto
          name="vivienda_vinculada"
          label="Vivienda vinculada"
          span="6"
          {...comun}
        />
      </Box>
    </TabPanel>
  );
}

TabPanel_6.propTypes = {
  comun: PropTypes.object,
};
