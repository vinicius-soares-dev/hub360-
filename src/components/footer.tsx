import { AppBar, Box, Toolbar, Typography, Grid, Link } from "@mui/material";
import LogoContrast from "../assets/img/LogoContrast.png";
import ImgBling from "../assets/img/bling.png";
import ImgKommo from "../assets/img/kommo.png";
function Footer() {
  return (
    <AppBar
      component="footer"
      sx={{
        backgroundColor: "var(--color-button)",
        padding: "20px 0",
        position: "relative",
        color: "#fff",
      }}
      elevation={1}
    >
      <Toolbar>
        <Grid container spacing={4} justifyContent="center">
          {/* Coluna 1 - Logo e Nome */}
          <Grid item xs={12} sm={4} textAlign={{ xs: "center", sm: "left" }}>
            <Box display="flex" alignItems="center" justifyContent={{ xs: "center", sm: "flex-start" }} mb={{ xs: 2, sm: 0 }}>
              <Box component="img" src={LogoContrast} alt="HUB360+" sx={{ height: 40, mr: 2 }} />
              <Typography variant="h6">HUB360+</Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent={{ xs: "center", sm: "flex-start" }} mb={{ xs: 2, sm: 0 }}>

              <img src={ImgBling} alt="partner bling" style={{ height: 40, marginLeft: "7px", marginTop: "20px"}} />

              <img src={ImgKommo} alt="partner bling" style={{ height: 40, marginLeft: "7px", marginTop: "20px"}} />
            </Box>
          </Grid>

          {/* Coluna 2 - Navegação Rápida */}
          <Grid item xs={12} sm={4} textAlign={{ xs: "center", sm: "left" }}>
            <Typography variant="subtitle1" gutterBottom sx={{ letterSpacing: "1pt", textDecoration: "underline"}}>
              Navegação
            </Typography>
            <Box display="flex" flexDirection="column" alignItems={{ xs: "center", sm: "flex-start" }}>
              <Link href="#section-01" color="inherit" underline="hover" sx={{ mb: 1 }}>
                Sobre Nós
              </Link>
              <Link href="#section-02" color="inherit" underline="hover" sx={{ mb: 1 }}>
                Soluções
              </Link>
              <Link href="#section-03" color="inherit" underline="hover" sx={{ mb: 1 }}>
                Blog
              </Link>
              <Link href="https://Wa.me/5511971704640" target="_blank" rel="noopener" color="inherit" underline="hover" sx={{ cursor: "pointer"}}>
                Contato
              </Link>
            </Box>
          </Grid>

          {/* Coluna 3 - Contato e Direitos Autorais */}
          <Grid item xs={12} sm={4} textAlign={{ xs: "center", sm: "left" }}>
            <Typography variant="subtitle1" gutterBottom>
              Contato
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Email: <Link href="mailto:contato@hub360.com" color="inherit">hub360plus@gmail.com</Link>
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              WhatsApp:{" "}
              <Link href="https://Wa.me/5511971704640" target="_blank" rel="noopener" color="inherit">
                +55 11 97170-4640
              </Link>
            </Typography>
            <Typography variant="body2" sx={{ mb: 1, cursor: "pointer" }} onClick={() => window.location.href="https://ajuda.effecti.com.br/ajuda-2/portais-disponiveis/"}>
              Portais Disponíveis
            </Typography>
            <Typography variant="body2">
              © {new Date().getFullYear()} HUB360+. Todos os direitos reservados.
            </Typography>
            <Typography variant="body2" sx={{ marginTop: "5px", textDecoration: "none"}} onClick={() => window.location.href="https://www.vgtechsolutions.com.br"}>
              Desenvolvido por <strong style={{ textDecoration: "underline"}}>{" VG Tech Solutions "}</strong>
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
