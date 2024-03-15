import { Outlet } from "react-router-dom";
import Head from "./Head";
import DrawerMenu from "./DrawerMenu";
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const defaultTheme = createTheme();

export default function Layout() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <Head />
        <DrawerMenu />
        <Outlet />
      </Box>
    </ThemeProvider>
  );
}
