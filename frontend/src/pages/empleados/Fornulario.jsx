import { Container, Paper, Box, Stack, Tab, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { TabContext, TabList } from "@mui/lab";
import { useForm } from "react-hook-form";
import { validar } from "./models/validar";
import { initialValues } from "./models/initialValues";
import {
  TabPanel_1,
  TabPanel_2,
  TabPanel_3,
  TabPanel_4,
  TabPanel_5,
  TabPanel_6,
  TabPanel_7,
} from "./components";

export default function Formulario() {
  //
  const { handleSubmit, control, formState, setValue } = useForm({
    defaultValues: initialValues,
    resolver: validar(),
  });

  const comun = { control: control, formState: formState };

  const onSubmit = (data) => console.info(data);

  const [loading, setLoading] = useState(true);

  const [valuee, setValuee] = useState("1");
  //const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, []);

  const handleChangeTabList = (event, newValue) => {
    setValuee(newValue);
  };

  const handleFile = async (event) => {
    event.preventDefault();

    console.info("click en componente file");
  };

  if (loading)
    return (
      <>
        <h1>Cargando...</h1>
      </>
    );

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Stack spacing={2} direction="row">
        <Paper sx={{ padding: 2, maxWidth: 200 }}>
          <Stack spacing={2}>
            <Box component="img"></Box>
            <input type="file" onChange={handleFile} />
          </Stack>
        </Paper>
        <Paper sx={{ p: 2 }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TabContext value={valuee}>
              <TabList
                onChange={handleChangeTabList}
                aria-label="lab API tabs example"
                variant="scrollable"
                scrollButtons="auto"
              >
                <Tab label="Datos personales" value="1"></Tab>
                <Tab label="Dirección particular" value="2"></Tab>
                <Tab label="Datos laborales" value="3"></Tab>
                <Tab label="Afiliaciones" value="4"></Tab>
                <Tab label="Vestimenta de trabajo" value="5"></Tab>
                <Tab label="Vivienda" value="6"></Tab>
                <Tab label="Alojamiento" value="7"></Tab>
              </TabList>
              {/* //! Datos personales */}
              <TabPanel_1 comun={comun} />

              {/* //! Dirección particular */}
              <TabPanel_2 comun={comun} setValue={setValue} />

              {/* //! Datos laborales */}
              <TabPanel_3 comun={comun} />

              {/*//! Afiliaciones */}
              <TabPanel_4 comun={comun} />

              {/* //! Vestimenta de trabajo */}
              <TabPanel_5 comun={comun} />

              {/* //! Vivienda */}
              <TabPanel_6 comun={comun} />

              {/* //! Alojamiento */}
              <TabPanel_7 comun={comun} />
            </TabContext>
            <Button type="submit" variant="contained">
              Aceptar
            </Button>
          </form>
        </Paper>
      </Stack>
    </Container>
  );
}
