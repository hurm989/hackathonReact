import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { Route, Routes, useNavigate } from "react-router-dom";
import Form from "./dashboardScreens/details";
import Users from "./dashboardScreens/users";
import AllHotels from "./dashboardScreens/allhotels";
import Packages from "./dashboardScreens/pakgs";
import { useEffect } from "react";
import { useSelector } from "react-redux/es/exports";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MyScreen() {

  // const userFromRedux = useSelector((a) => a.user);
  // console.log(userFromRedux)
  // localStorage.setItem('users', JSON.stringify(userFromRedux));
  // useEffect(() => {
  // if (userFromRedux || localStorage.getItem("users")) {
  //   // console.log(t)
  //   let newObject = window.localStorage.getItem("users");
  //   console.log(JSON.parse(newObject));
  // console.log(localStorage.getItem(("users")))
  // console.log(userFromRedux)

  ///localstrogae b null horhe h reload py how to handle this
  //   if (userFromRedux) {
  //   }
  //   else {
  //     alert("Session Expired")
  //     navigate("/login");
  //     return
  //     // console.log("no data")
  //   }
  // }, []);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [routeList, setRouteList] = React.useState([
    {
      routeName: "Add Hotel",
      route: "forms",
    },
    {
      routeName: "Packages",
      route: "packages",
    },
    {
      routeName: "Users",
      route: "users",
    },
    {
      routeName: "Show Hotels",
      route: "allhotels",
    },
   
    
  ]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();
  const moveToRoute = (route) => {
    navigate(route);
    setOpen(false)
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>


          <Box width={"100%"} display={"flex"}  justifyContent={"space-between"} >
            <Box sx={{ marginRight: 3 }} display={"flex"} alignItems={"center"}>
              <Typography variant="p" style={{fontWeight:"bold",fontSize:22,marginRight:9}}  noWrap component="div">
                WELCOME
              </Typography>
              <Typography variant="h6" noWrap component="div">
                  HURMAT
                </Typography>
            </Box>
            
            <Box display={"flex"} justifyContent={"space-between"}>
             
              <Box>
                <button style={{ backgroundColor: "transparent", borderRadius: 2, border: "none", marginTop: 5 ,fontWeight:"bold"}}>
                  SIGN OUT
                </button>
              </Box>
            </Box>
          </Box>
        </Toolbar>

      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {routeList.map((text, index) => (
            <ListItem
              onClick={() => moveToRoute(text.route)}
              key={index}
              disablePadding
              sx={{ display: "block" }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText
                  primary={text.routeName}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>


      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Routes>
          <Route path="users" element={<Users />} />
          <Route path="forms" element={<Form />} />
          <Route path="allhotels" element={<AllHotels />} />
          <Route path="packages" element={<Packages />} />
        </Routes>
      </Box>
    </Box>
  );
}