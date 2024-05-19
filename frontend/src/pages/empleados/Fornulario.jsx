import {
  Container,
  Paper,
  Box,
  Stack,
  Button,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { useEffect, useState } from "react";
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
import TabContenedor from "./components/TabContenedor";
import { crearRegistro } from "./utilities/crearRegistro";
import { MuiFileInput } from "mui-file-input";
import { AttachFile } from "@mui/icons-material";
import { useFetch } from "../../hooks/useFetch";
import { RUTAS_API } from "../../constants";
import { useBase64 } from "../../hooks/useBase64";

const Img = styled("img")({
  width: 200,
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
});

export default function Formulario() {
  const [loading, setLoading] = useState(true);

  const [file, setFile] = useState(null);

  const { register, handleSubmit, control, formState, setValue } = useForm({
    defaultValues: initialValues,
    resolver: validar(),
  });

  const comun = { control: control, formState: formState };

  const nipData = useFetch(RUTAS_API.EMPLOYEE.MAX);

  const base64 = useBase64();

  console.log("first ", nipData);

  /* //!funsion submit del formulario */
  const onSubmit = (data) => {
    console.log("first :>", data);

    const row = crearRegistro(data);
    console.info(row);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, []);

  useEffect(() => {
    setValue("nip", nipData?.data?.max_nip + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nipData.data]);

  /* //!Funcion para manupular archivos */
  const handleChangeFile = (newFile) => {
    console.log(newFile);

    base64(newFile).then((response) => setFile(response));
  };

  if (loading)
    return (
      <>
        <h1>Cargando...</h1>
      </>
    );

  return (
    <Container fixed>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack
          spacing={2}
          direction="row"
          sx={{ mt: 4 }}>
          <Paper
            variant="outlined"
            style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <Img src={file}></Img>
            <MuiFileInput
              value={file}
              onChange={handleChangeFile}
              size="medium"
              variant="outlined"
              InputProps={{
                inputProps: {
                  accept: "image/*",
                },
                startAdornment: <AttachFile />,
              }}
            />
          </Paper>
          <Paper sx={{ p: 2 }}>
            {/* //!Campo para el numero de identificacion personal */}
            <Stack
              spacing={2}
              direction="row"
              sx={{ ml: 5 }}>
              <Typography variant="subtitle1">
                Número de Identificación Personal
              </Typography>
              <TextField
                {...register("nip")}
                variant="standard"
                type="text"
                InputProps={{
                  readOnly: true,
                }}
                sx={{ maxWidth: "60px", textAlign: "center", fontSize: 40 }}
              />
            </Stack>

            {/* //!Contenedor global de los Tab*/}
            <TabContenedor>
              {/* //! Datos personales */}
              <TabPanel_1 comun={comun} />

              {/* //! Dirección particular */}
              <TabPanel_2
                comun={comun}
                setValue={setValue}
              />

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
            </TabContenedor>
            <Box sx={{ textAlign: "right", pr: 4 }}>
              <Button
                type="submit"
                variant="contained">
                Aceptar
              </Button>
            </Box>
          </Paper>
        </Stack>
      </form>
    </Container>
  );
}
