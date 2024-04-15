import MuiDrawer from "@mui/material/Drawer";
import {
  Divider,
  IconButton,
  List,
  ListSubheader,
  Toolbar,
  styled,
} from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { ListConfig, ListDefault, ListLogout } from "./ListItems";
import { useState } from "react";

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    marginTop: 65,
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

export default function DrawerMenu() {
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <Drawer variant="permanent" open={open}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
        }}
      >
        <IconButton onClick={toggleDrawer}>
          {open ? <ChevronLeft /> : <ChevronRight />}
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">
        {<ListDefault />}
        <Divider sx={{ my: 1 }} />
        {open && (
          <ListSubheader component="div" inset>
            Configuración
          </ListSubheader>
        )}
        {<ListConfig />}
        <Divider sx={{ my: 1 }} />
        {<ListLogout />}
      </List>
    </Drawer>
  );
}
