import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";

import {
  ExpandLess,
  ExpandMore,
  Logout,
  People,
  Person,
  PersonAdd,
} from "@mui/icons-material";
import { Collapse, List } from "@mui/material";
import { Link } from "react-router-dom";

export function ListDefault() {
  const [openEmployee, setOpenEmployee] = React.useState(false);
  return (
    <>
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton onClick={() => setOpenEmployee((prev) => !prev)}>
        <ListItemIcon>
          <Person />
        </ListItemIcon>
        <ListItemText primary="Empleados" />
        {openEmployee ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openEmployee} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <People />
            </ListItemIcon>
            <ListItemText primary="Listar" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <PersonAdd />
            </ListItemIcon>
            <ListItemText primary="Crear" />
          </ListItemButton>
        </List>
      </Collapse>
    </>
  );
}

export function ListConfig() {
  const [openUser, setOpenUser] = React.useState(false);
  return (
    <>
      <ListItemButton onClick={() => setOpenUser((prev) => !prev)}>
        <ListItemIcon>
          <Person />
        </ListItemIcon>
        <ListItemText primary="Usuarios" />
        {openUser ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openUser} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <People />
            </ListItemIcon>
            <ListItemText primary="Listar" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <PersonAdd />
            </ListItemIcon>
            <ListItemText primary="Crear" />
          </ListItemButton>
        </List>
      </Collapse>
    </>
  );
}

export function ListLogout() {
  return (
    <>
      <ListItemButton component={Link} to="login">
        <ListItemIcon>
          <Logout />
        </ListItemIcon>
        <ListItemText primary="Cerrar Sesión" />
      </ListItemButton>
    </>
  );
}
