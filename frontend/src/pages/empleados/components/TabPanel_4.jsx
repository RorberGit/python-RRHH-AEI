import { TabPanel } from "@mui/lab";
import { CampoTexto } from "../../../components/mui";
import { Box } from "@mui/material";
import PropTypes from "prop-types";

export default function TabPanel_4({ comun }) {
  return (
    <TabPanel value="4">
      <Box
        display="grid"
        gap="15px 10px"
        m={2}
        gridTemplateColumns="repeat(12, 1fr)"
      >
        <CampoTexto
          name="afp"
          label="Afiliación política"
          span="6"
          {...comun}
        />
        <CampoTexto
          name="defensa"
          label="Ubicación defensa"
          span="6"
          {...comun}
        />
        <CampoTexto
          name="orm"
          label="Organizaciones de masa"
          span="6"
          {...comun}
        />
      </Box>
    </TabPanel>
  );
}

TabPanel_4.propTypes = {
  comun: PropTypes.object,
};
