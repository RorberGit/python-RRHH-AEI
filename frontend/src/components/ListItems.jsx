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
      {/**Button */}
      <ListItemButton component={Link} to="/">
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      {/**Button */}
      <ListItemButton onClick={() => setOpenEmployee((prev) => !prev)}>
        <ListItemIcon>
          <Person />
        </ListItemIcon>
        <ListItemText primary="Empleados" />
        {openEmployee ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      {/**CHILDREN */}
      <Collapse in={openEmployee} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {/**Button */}
          <ListItemButton sx={{ pl: 4 }} component={Link} to="employee/listing">
            <ListItemIcon>
              <People />
            </ListItemIcon>
            <ListItemText primary="Listar" />
          </ListItemButton>
          {/**Button */}
          <ListItemButton sx={{ pl: 4 }} component={Link} to="employee/create">
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
      {/**CHILDREN */}
      <Collapse in={openUser} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {/**Button */}
          <ListItemButton sx={{ pl: 4 }} component={Link} to="users/listing">
            <ListItemIcon>
              <People />
            </ListItemIcon>
            <ListItemText primary="Listar" />
          </ListItemButton>
          {/**Button */}
          <ListItemButton sx={{ pl: 4 }} component={Link} to="users/form">
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
