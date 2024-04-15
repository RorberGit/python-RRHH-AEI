import {
  Alert,
  Backdrop,
  CircularProgress,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { RUTAS_API } from "../../constants";
import { useFetch } from "../../hooks/useFetch";
import { Tabla } from "../../components/mui";
import { useCallback, useMemo } from "react";
import { GridActionsCellItem } from "@mui/x-data-grid";
import { Delete, Edit } from "@mui/icons-material";

export default function Lista() {
  const { data, error, loading } = useFetch(RUTAS_API.USERS.LISTING);

  const deleteUser = useCallback(
    (value) => () => {
      console.info("Delete :>", value);
    },
    []
  );

  const editUser = useCallback(
    (value) => () => {
      console.info("Edit :>", value);
    },
    []
  );

  const columns = useMemo(
    () => [
      {
        field: "id",
        headerName: "id",
        width: 100,
        align: "center",
        headerAlign: "center",
      },
      {
        field: "username",
        headerName: "Usuario",
        width: 100,
        align: "center",
        headerAlign: "center",
      },
      {
        field: "nombre",
        headerName: "Nombre y Apellidos",
        width: 200,
        align: "left",
        headerAlign: "left",
        valueGetter: (value) => {
          return `${value.row.empleados.nombre} ${value.row.empleados.apellido_paterno} ${value.row.empleados.apellido_materno}`;
        },
      },
      {
        field: "actions",
        type: "actions",
        width: 80,
        getActions: (params) => [
          <GridActionsCellItem
            key={1}
            icon={<Delete color="error" />}
            label="Delete"
            onClick={deleteUser(params.id)}
          />,
          <GridActionsCellItem
            key={2}
            icon={<Edit color="success" />}
            label="Delete"
            onClick={editUser(params.id)}
          />,
        ],
      },
    ],
    [deleteUser, editUser]
  );

  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Paper sx={{ p: 2, display: "block", flexDirection: "column" }}>
          {loading ? (
            <>
              <Stack spacing={2}>
                <Typography variant="h5">Lista de usuarios</Typography>
                {error && <Alert severity="error">{error}</Alert>}
                <Tabla rows={data} columns={columns} />
              </Stack>
            </>
          ) : (
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={!loading}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
          )}
        </Paper>
      </Container>
    </>
  );
}
