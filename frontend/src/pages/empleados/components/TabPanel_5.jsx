import { TabPanel } from "@mui/lab";
import { CampoTexto } from "../../../components/mui";
import { Box } from "@mui/material";
import PropTypes from "prop-types";

export default function TabPanel_5({ comun }) {
  return (
    <TabPanel value="5">
      <Box
        display="grid"
        gap="15px 10px"
        m={2}
        gridTemplateColumns="repeat(12, 1fr)"
      >
        <CampoTexto
          name="talla_calzado"
          label="Talla Calzado"
          span="6"
          {...comun}
        />
        <CampoTexto
          name="talla_camisa"
          label="Talla Camisa / Blusa"
          span="6"
          {...comun}
        />
        <CampoTexto
          name="talla_pantalon"
          label="Talla pantalón"
          span="6"
          {...comun}
        />
      </Box>
    </TabPanel>
  );
}

TabPanel_5.propTypes = {
  comun: PropTypes.object,
};
