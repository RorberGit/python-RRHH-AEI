import { Avatar, Container, Paper, Box, Stack } from "@mui/material";
import { useBase64 } from "../../hooks/useBase64";
import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { RUTAS_API } from "../../constants";
import { usePost } from "../../hooks/usePost";

export default function Listado() {
  const [image, setImage] = useState();
  const create = usePost();
  const getBase64 = useBase64();

  const { data, loading } = useFetch(
    RUTAS_API.EMPLOYEE.RETRIEVE + "91f44137-7ffd-4527-8194-a87df6f9101c/"
  );

  useEffect(() => {
    if (!loading) {
      console.info("data :>", data);
      setImage(() => {
        return data?.foto;
      });
    }
  }, [data, loading]);

  const newRow = (base64) => {
    create(RUTAS_API.EMPLOYEE.CREATE, {
      nombre: "nombre1",
      apellido_paterno: "apellido1",
      apellido_materno: "apellido1",
      edad: "45",
      sexo: "M",
      ci: "88995641230",
      foto: base64,
    });
  };

  const handleFile = async (event) => {
    event.preventDefault();

    getBase64(event.target.files[0])
      .then((response) => {
        console.info(response);

        setImage(() => {
          return response;
        });

        newRow(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Stack spacing={2} direction="row">
          <Paper sx={{ p: 2, maxWidth:200}}>
            <Stack spacing={2}>
              <Box component="img" src={image}></Box>
              <input type="file" onChange={handleFile} />
            </Stack>
          </Paper>
          <Paper>444444444</Paper>
        </Stack>
        <Paper sx={{ p: 2, display: "block", flexDirection: "column" }}>
          <Avatar src={image} variant="square" />
        </Paper>
      </Container>
    </>
  );
}
