import { Outlet } from "react-router-dom";
import Head from "./Head";
import DrawerMenu from "./DrawerMenu";
import {
  Box,
  CssBaseline,
  ThemeProvider,
  Toolbar,
  createTheme,
} from "@mui/material";

const defaultTheme = createTheme();

export default function Layout() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <Head />
        <DrawerMenu />

        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[50]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />

          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
