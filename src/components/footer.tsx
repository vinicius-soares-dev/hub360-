
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import LogoContrast from "../assets/img/LogoContrast.png"; 

function Footer() {
  return (
    <>
      <AppBar
        component="footer"
        sx={{
          backgroundColor: "var(--color-button)",
          padding: "20px 0",
          position: "relative"
        }}
        elevation={1}
      >
        <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
          <Box display="flex" alignItems="center">
            {/* Logo HUB360+ */}
            <Box
              component="img"
              src={LogoContrast}
              alt="HUB360+"
              sx={{ height: 40, mr: 2 }}
            />
            <Typography variant="h6" sx={{ color: "#fff" }}>
              HUB360+
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" gap={2}>
            <Typography variant="body2" sx={{ color: "#fff" }}>
              Criado por{" "}
              <a
                href="https://www.vgtechsolutions.com.br"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "#fff", textDecorationLine: "underline" }}
              >
                VG Tech Solutions
              </a>
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Footer;
