import CssBaseline from "@mui/material/CssBaseline";
import {
  Box,
  Typography,
  Container,
  TextField,
  Button,
  Avatar,
  Stack,
  Alert,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { auth } from "../../services/auth";

import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLogout } from "../../hooks/useLogout";
import { useDispatch } from "react-redux";
import { createUser } from "../../store/user/userSlice";
import { Token } from "../../services";

const defaultTheme = createTheme();

export default function Login() {
  const logout = useLogout();
  const dispatch = useDispatch();

  useEffect(() => {
    logout();
  }, [logout]);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [errMsg, setErrMsg] = useState("");

  /*  
  ! funcion manipulacion de los datos de login 
  */
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    try {
      const response = await auth.Login({
        username: data.get("username"),
        password: data.get("password"),
      });

      Token.setToken({
        session: response.id,
        access_token: response.access_token,
        refresh_token: response.refresh_token,
      });

      dispatch(
        createUser({
          id: response.id,
          username: response.username,
          email: response.email,
          first_name: response.first_name,
          last_name: response.last_name,
        })
      );

      navigate(from, { replace: true });
    } catch (error) {
      setErrMsg(error);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
            <Avatar
              src="assets/img/ucm.jpg"
              variant="square"
              sx={{ width: 60, height: 50 }}
            />
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Avatar
              src="assets/img/bbi.jpg"
              variant="square"
              sx={{ width: 80, height: 50 }}
            />
          </Stack>

          <Typography component="h1" variant="h5">
            Formulario de Autenticación
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Usuario"
              name="username"
              onChange={() => setErrMsg("")}
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={() => setErrMsg("")}
            />

            {errMsg ? <Alert severity="error">{errMsg}</Alert> : null}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Iniciar Sesión
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
