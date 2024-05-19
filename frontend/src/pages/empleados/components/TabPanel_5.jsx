import { TabPanel } from "@mui/lab";
import { Box } from "@mui/material";
import PropTypes from "prop-types";
import { useFetch } from "../../../hooks/useFetch";
import { RUTAS_API } from "../../../constants/rutas.api";
import Autocompletar from "../../../components/mui/AutoCompletar";

export default function TabPanel_5({ comun }) {
  const pantalon = useFetch(RUTAS_API.vestimenta.PANTALON);
  const camisa = useFetch(RUTAS_API.vestimenta.CAMISA);
  const calzado = useFetch(RUTAS_API.vestimenta.CALZADO);

  return (
    <TabPanel value="5">
      <Box
        display="grid"
        gap="15px 10px"
        m={2}
        gridTemplateColumns="repeat(6, 1fr)"
      >
        {/*//! Calzado */}
        {!calzado.loading && (
          <Autocompletar
            name="calzado"
            label="Talla Calzado"
            options={calzado.data}
            span="2"
            {...comun}
          />
        )}

        {/*//! Camisa */}
        {!camisa.loading && (
          <Autocompletar
            name="camisa"
            label="Talla Camisa / Blusa"
            options={camisa.data}
            span="2"
            {...comun}
          />
        )}

        {/*//! Pantalon */}
        {!pantalon.loading && (
          <Autocompletar
            name="pantalon"
            label="Talla pantalón"
            options={pantalon.data}
            span="2"
            {...comun}
          />
        )}
      </Box>
    </TabPanel>
  );
}

TabPanel_5.propTypes = {
  comun: PropTypes.object,
};
