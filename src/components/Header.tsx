import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoContrast from "../assets/img/LogoContrast.png";

function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", }}>
      <Typography variant="h6" sx={{ my: 2, }}>
        HUB360+
      </Typography>
      <List>
        {["Sobre Nós", "O que Fazemos", "Soluções", "Blog"].map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center",  }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar component="nav" sx={{ backgroundColor: 'var(--color-button)' }} elevation={1}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box display="flex" alignItems="center">
            <Box
              component="img"
              src={LogoContrast}
              alt="HUB360+"
              sx={{ height: 40, mr: 2, }}
            />
            <Typography
              variant="h6"
              sx={{ display: { xs: "block", sm: "block" } }}
            >
              HUB360+
            </Typography>
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" }, 
              alignItems: "center",
              gap: 2, 
            }}
          >
            {["Sobre Nós", "O que Fazemos", "Soluções", "Blog"].map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))}
            <Button
              variant="contained"
              color="primary"
              sx={{
                ml: 2,
                backgroundColor: "var(--color-text)",
                color: "white",
                "&:hover": { backgroundColor: "var(--color-button-hover)" },
              }}
            >
              Contato
            </Button>
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            sx={{ display: { sm: "none" } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Toolbar />
    </>
  );
}

export default Header;
