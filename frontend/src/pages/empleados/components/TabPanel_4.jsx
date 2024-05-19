import { TabPanel } from "@mui/lab";
import { Box } from "@mui/material";
import PropTypes from "prop-types";
import { useFetch } from "../../../hooks/useFetch";
import { RUTAS_API } from "../../../constants";
import Autocompletar from "../../../components/mui/AutoCompletar";

export default function TabPanel_4({ comun }) {
  const afiliacion = useFetch(RUTAS_API.integracion.AFILIACION);
  const organizacion = useFetch(RUTAS_API.integracion.ORGANIZACIONES);
  const defensa = useFetch(RUTAS_API.integracion.DEFENSA);

  return (
    <TabPanel value="4">
      <Box
        display="grid"
        gap="15px 10px"
        m={2}
        gridTemplateColumns="repeat(6, 1fr)"
      >
        {/* //! Afiliacion*/}
        {!afiliacion.loading && (
          <Autocompletar
            name="afp"
            label="Afiliación política"
            options={afiliacion.data}
            span="2"
            multiple
            {...comun}
          />
        )}

        {/* //! Organizacion*/}
        {!organizacion.loading && (
          <Autocompletar
            name="orm"
            label="Organizaciones de masa"
            options={organizacion.data}
            span="2"
            multiple
            {...comun}
          />
        )}

        {/* //! Defensa*/}
        {!defensa.loading && (
          <Autocompletar
            name="defensa"
            label="Ubicación defensa"
            options={defensa.data}
            span="2"
            multiple
            {...comun}
          />
        )}
      </Box>
    </TabPanel>
  );
}

TabPanel_4.propTypes = {
  comun: PropTypes.object,
};
