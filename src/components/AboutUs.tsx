
import { Box, Typography, Container, Grid, Card, CardContent, Button } from "@mui/material";
import { ArrowForward, CalendarToday, ShoppingCart } from "@mui/icons-material";
import Lottie from "lottie-react";
import { useInView } from "react-intersection-observer";
import animationLicitation from "../assets/animation/animationA.json";
import animationEcommerce from "../assets/animation/ecommerce.json";
import animationAutomation from "../assets/animation/phone.json";
import animationMarketing from "../assets/animation/sales.json";
import Criativo5 from "../assets/videos/Criativo 05 .mp4";
import ImgLicitacao from "../assets/img/Licitações.png";
import ImgEcommerce from "../assets/img/E-commerce.jpg";
import ImgAutomacao from "../assets/img/automacao.png";
import ImgMarketing from "../assets/img/marketing.png";
import "../assets/styles/aboutUs.css";

interface AnimatedBoxProps {
  children: React.ReactNode;
  delay?: number;
}
function AnimatedBox({ children, delay = 0 }: AnimatedBoxProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <Box
      ref={ref}
      className={`fade-in ${inView ? "visible" : ""}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </Box>
  );
}

function AboutUs() {
  return (
    <Box>
      {/* Seção: Conheça nossos serviços */}
      <Box sx={{ backgroundColor: "var(--color-background)", py: 8, textAlign: "center" }} id="section-01">
        <Container>
          <AnimatedBox>
            <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: "var(--color-text)" }}>
              Transformando desafios em oportunidades
            </Typography>
          </AnimatedBox>
          <AnimatedBox delay={0.2}>
            <Typography variant="body1" sx={{ maxWidth: "600px", mx: "auto", mb: 4, color: "var(--color-text)", letterSpacing: "1pt" }}>
              Somos mais que uma empresa de serviços: somos representantes comerciais digitais e parceiros estratégicos em cada etapa da sua jornada de crescimento.
            </Typography>
          </AnimatedBox>
          <AnimatedBox delay={0.4}>
            <video width="60%" controls style={{ borderRadius: "8px" }}>
              <source src={Criativo5} type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </AnimatedBox>
          <AnimatedBox delay={0.6}>
            <Button
              variant="contained"
              size="large"
              endIcon={<CalendarToday />}
              sx={{
                backgroundColor: "var(--color-button)",
                color: "#fff",
                "&:hover": { backgroundColor: "var(--color-button-hover)" },
                mt: 3,

              }}
              onClick={() => window.location.href="https://Wa.me/5511971704640"}
            >
              Quero Agendar uma Reunião
            </Button>
          </AnimatedBox>
        </Container>
      </Box>

      {/* Outras Seções */}
      <Box sx={{ backgroundColor: "var(--color-box)", py: 8 }} id="section-02">
        <Container>
          <Grid container spacing={4} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={6}>
              <AnimatedBox>
                <Card sx={{ boxShadow: 3, borderRadius: 2, "&:hover": { boxShadow: 6 } }}>
                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: "var(--color-text)" }}>
                      Gestão 360º Licitações
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, color: "var(--color-text)" }}>
                      Quer vender para o governo de forma eficaz? Simplificamos cada etapa do processo de licitações governamentais.
                      Identificamos oportunidades, preparamos sua empresa e garantimos uma participação eficiente.
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                      <img src={ImgLicitacao} alt="image martelo juiz" style={{ maxWidth: "300px" }} />
                      <Button
                        variant="contained"
                        endIcon={<ArrowForward />}
                        sx={{
                          backgroundColor: "var(--color-button)",
                          color: "#fff",
                          "&:hover": { backgroundColor: "var(--color-button-hover)" },
                        }}
                        onClick={() => window.location.href="/bidding"}
                      >
                        Saiba Mais
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </AnimatedBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <AnimatedBox delay={0.2}>
                <Card sx={{ boxShadow: 3, borderRadius: 2, "&:hover": { boxShadow: 6 } }}>
                  <CardContent sx={{ textAlign: "center" }}>
                    <Lottie animationData={animationLicitation} loop={true} style={{ maxWidth: "300px", margin: "auto" }} />
                  </CardContent>
                </Card>
              </AnimatedBox>
            </Grid>
          </Grid>
        </Container>
      </Box>

       {/* Seção: Gestão 360º E-commerce */}
       <Box sx={{ backgroundColor: "var(--color-background)", py: 8 }}>
        <Container>
          <Grid container spacing={4} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={6}>
              <AnimatedBox>

                <Card sx={{ boxShadow: 3, borderRadius: 2, "&:hover": { boxShadow: 6 } }}>
                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: "var(--color-text)" }}>
                      Gestão 360º E-commerce
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, color: "var(--color-text)" }}>
                      Destaque-se nos maiores marketplaces! Desde a criação da sua loja virtual até a gestão completa, oferecemos uma solução estratégica e integrada.
                    </Typography>
                    {/* Imagem e Botão alinhados verticalmente */}
                    <Box sx={{ textAlign: "center", mb: 2, display: "flex", flexDirection: "column" }}>
                      <img src={ImgEcommerce} alt="image e-commerce" style={{ maxWidth: "300px", marginBottom: "16px", margin: "0 auto", borderTopLeftRadius: "120px", borderBottomRightRadius: "120px"  }} />
                      <Button
                        variant="contained"
                        endIcon={<ShoppingCart />}
                        sx={{
                          backgroundColor: "var(--color-button)",
                          color: "#fff",
                          "&:hover": { backgroundColor: "var(--color-button-hover)" },
                          width: "200px",
                          margin: "0 auto",
                          marginTop: "1em"
                        }}
                        onClick={() => window.location.href="/bidding"}
                      >
                        Saiba Mais
                      </Button>
                    </Box>
                  </CardContent>
                 </Card>
              </AnimatedBox>
              </Grid>
            <Grid item xs={12} md={6}>
            <AnimatedBox>

                <Card sx={{ boxShadow: 3, borderRadius: 2, "&:hover": { boxShadow: 6 } }}>
                  <CardContent sx={{ textAlign: "center" }}>
                    <Lottie animationData={animationEcommerce} loop={true} style={{ maxWidth: "300px", margin: "auto" }} />
                  </CardContent>
                </Card>
                </AnimatedBox>
            </Grid>
          </Grid>
        </Container>
      </Box>

        {/* Seção: Automação */}
        <Box sx={{ backgroundColor: "var(--color-box)", py: 8 }}>
        <Container>
          <Grid container spacing={4} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={6}>
              <Card sx={{ boxShadow: 3, borderRadius: 2, "&:hover": { boxShadow: 6 } }}>
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: "var(--color-text)" }}>
                    Automação
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, color: "var(--color-text)" }}>
                    Automatize suas vendas com o poder do CRM KOMMO. Transforme redes sociais, WhatsApp e Telegram em balcões de vendas automáticos.
                  </Typography>
                 
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                  <img src={ImgAutomacao} alt="image martelo juiz" style={{ maxWidth: "300px" , borderTopLeftRadius: "120px", borderBottomRightRadius: "120px" }} />
                  <Button
                    variant="contained"
                    endIcon={<ArrowForward />}
                    sx={{
                      backgroundColor: "var(--color-button)",
                      color: "#fff",
                      "&:hover": { backgroundColor: "var(--color-button-hover)" },
                    }}
                    onClick={() => window.location.href="/bidding"}
                  >
                    Saiba Mais
                  </Button>
                </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <AnimatedBox delay={0.3}>

                <Card sx={{ boxShadow: 3, borderRadius: 2, "&:hover": { boxShadow: 6 } }}>
                  <CardContent sx={{ textAlign: "center" }}>
                    <Lottie animationData={animationAutomation} loop={true} style={{ maxWidth: "300px", margin: "auto" }} />
                  </CardContent>
                </Card>
              </AnimatedBox>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Seção: Marketing Digital */}
      <Box sx={{ backgroundColor: "var(--color-background)", py: 8 }}>
        <Container>
          <Grid container spacing={4} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={6}>
              <AnimatedBox>

                <Card sx={{ boxShadow: 3, borderRadius: 2, "&:hover": { boxShadow: 6 } }}>
                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: "var(--color-text)" }}>
                      Marketing Digital
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, color: "var(--color-text)" }}>
                      Precisa atrair mais clientes? Criamos estratégias personalizadas de marketing digital para aumentar sua visibilidade e conversões.
                    </Typography>
                    <Box sx={{ textAlign: "center", mb: 2, display: "flex", flexDirection: "column" }}>
                      <img src={ImgMarketing} alt="image e-commerce" style={{ maxWidth: "300px", marginBottom: "16px", margin: "0 auto", borderTopLeftRadius: "120px", borderBottomRightRadius: "120px"  }} />
                      <Button
                        variant="contained"
                        endIcon={<ShoppingCart />}
                        sx={{
                          backgroundColor: "var(--color-button)",
                          color: "#fff",
                          "&:hover": { backgroundColor: "var(--color-button-hover)" },
                          width: "200px",
                          margin: "0 auto",
                          marginTop: "1em",

                        }}
                        onClick={() => window.location.href="/bidding"}
                      >
                        Saiba Mais
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </AnimatedBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <AnimatedBox>
                <Card sx={{ boxShadow: 3, borderRadius: 2, "&:hover": { boxShadow: 6 } }}>
                  <CardContent sx={{ textAlign: "center" }}>
                    <Lottie animationData={animationMarketing} loop={true} style={{ maxWidth: "300px", margin: "auto" }} />
                  </CardContent>
                </Card>
              </AnimatedBox>
            </Grid>
          </Grid>
        </Container>
      </Box>

    </Box>
  );
}

export default AboutUs;