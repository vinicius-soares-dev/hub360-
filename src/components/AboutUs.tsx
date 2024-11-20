import "../assets/styles/aboutUs.css";
import Lottie  from "lottie-react";
import animationData from "../assets/animation/animationA.json";
import animationPhone from "../assets/animation/phone.json";
import animationSales from "../assets/animation/sales.json";
import animationEcommerce from "../assets/animation/ecommerce.json";

import { Container, Typography, Box, Card, CardContent, Avatar, Grid } from "@mui/material";
import { FormatQuote } from "@mui/icons-material";


function AboutUs() {



  return (
    <>
      <section className="aboutus-section">
        <h1 className="aboutus-title">Transformando desafios em oportunidades</h1>
        <p className="aboutus-description">
          Oferecemos soluções personalizadas para otimizar seus processos, do marketing ao pós-venda.
        </p>
        <Lottie animationData={animationData} loop={true} />
        <div className="aboutus-text-content">
          <h2 className="aboutus-subtitle">Quem Somos</h2>
          <p>
            Bem-vindos à HUB360+, onde a excelência se encontra com a inovação, e cada interação é uma oportunidade de criar conexões significativas.
          </p>
          <p>
            Arquitetos do futuro empresarial e navegadores destemidos do oceano comercial.
          </p>
          <p>
            Somos "A" equipe dedicada, com especialistas comprometidos em impulsionar o crescimento e eficiência do seu negócio.
          </p>

          <h2 className="aboutus-subtitle">Como a HUB360+ pode te ajudar?</h2>
          <Lottie animationData={animationPhone} loop={true} />
          <ol>
            <li>
              Marketing Digital e Social Media
            </li>
            <li>
             Automação de Venda
            </li>
            <li>
               Gestão 360 E-commerce
            </li>
            <li>
               Gestão 360 Licitações
            </li>
          </ol>

          <h2 className="aboutus-subtitle">Marketing Digital e Social Media</h2>
          <p>
            Dê o primeiro passo em direção ao sucesso digital com nossos serviços abrangentes de Marketing Digital e Social Media.
          </p>
          <p>
            Nossa abordagem estratégica é projetada para não apenas aumentar sua visibilidade online, mas também para gerar leads de alta qualidade e converter espectadores em clientes fiéis.
          </p>
          <p>
            Não espere mais para iniciar sua jornada rumo ao sucesso digital!
          </p>
          <p>
            Através das diversas técnicas de marketing digital, vamos destacar sua marca no vasto cenário online, abrindo caminho para o sucesso.
          </p>
          <p>Nosso serviço de Marketing Digital e Social Media pode impulsionar seu negócio para novos patamares de crescimento e conquista de clientes.</p>

          <h2 className="aboutus-subtitle">Automação de vendas</h2>
          <p>
           Conecte apps de chat e veja sua história completa com um cliente num único perfil.
          </p>
          <Lottie animationData={animationSales} loop={true} />
          <p>
            Mantenha várias conversas sem esforços no inbox KOMMO: Com nosso serviço pode conectar múltiplos números de WhatsApp, Instagram, páginas do Facebook e outros apps em um só lugar.
          </p>
          <p>
            Somos Parceiro oficial e orgulhosos da Kommo, uma empresa líder em tecnologia de atendimento ao cliente.
          </p>
          <p>
            Essa parceria nos permite oferecer as soluções de CRM mais avançadas do mercado, aproveitando a expertise da Kommo para atender às demandas de nossos clientes.
          </p>
          <p>Através do CRM Kommo, é possível monitorar, analisar e admnistrar as interaçõe nas redes sociais de forma integrada em uma única plataforma.</p>

          <h2 className="aboutus-subtitle">Gestão 360 E-commerce</h2>
          <p>
           Vender nunca foi tão fácil: Transforme o seu e-commerce em uma máquina de vendas!
          </p>
          <Lottie animationData={animationEcommerce} loop={true} />

          <p>Por meio de um sistema ERP que permite que você gerencie suas vendas on-line de forma centralizada.</p>

          <p>Integre seu e-commerce com as principais plataformas!</p>

          <p>Integrado a centenas de plataformas, o Bling é um sistema ERP que permite que você gerencie a sua loja virtual com organização e facilidade do pedido à entrega.</p>

          <p>Com a nossa expertise expertise especializada em gestão de E-commerce junto com nossa parceira a plataforma integrada da Bling, você terá todas as ferramentas necessárias para aumentar sua eficiência, maximizar suas chances de sucesso e conquistar novas oportunidades de negócios.</p>

        </div>

         {/* Seção de Depoimentos */}
         <h2 className="aboutus-subtitle">Depoimentos</h2>
          <Container sx={{ py: 5, maxWidth: "lg" }}>
            <Grid container spacing={4}>
              {/* Depoimento 1 */}
              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ 
                  height: "100%", 
                  display: "flex", 
                  flexDirection: "column", 
                  borderRadius: "16px", 
                  boxShadow: 3,
                  transition: "all 0.3s ease-in-out", 
                  '&:hover': { 
                    transform: 'scale(1.05)', 
                    boxShadow: 8 
                  }
                }}>
                  <CardContent>
                    <Box display="flex" alignItems="center" gap={2} mb={2}>
                      <Avatar alt="Lúcio Medeiros" src="/assets/images/avatar1.jpg" sx={{ width: 56, height: 56 }} />
                      <Typography variant="h6" fontWeight="bold">Lúcio Medeiros</Typography>
                    </Box>
                    <Box display="flex" alignItems="center" mb={2}>
                      <FormatQuote sx={{ color: "var(--color-text)", fontSize: "32px", mr: 1 }} />
                      <Typography variant="body2" color="textSecondary">
                        O principal diferencial é a integração de ferramentas que facilita o controle de processos e a busca por licitações e identificação de oportunidades.
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              {/* Depoimento 2 */}
              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ 
                  height: "100%", 
                  display: "flex", 
                  flexDirection: "column", 
                  borderRadius: "16px", 
                  boxShadow: 3,
                  transition: "all 0.3s ease-in-out", 
                  '&:hover': { 
                    transform: 'scale(1.05)', 
                    boxShadow: 8 
                  }
                }}>
                  <CardContent>
                    <Box display="flex" alignItems="center" gap={2} mb={2}>
                      <Avatar alt="Leandro Ramos" src="/assets/images/avatar2.jpg" sx={{ width: 56, height: 56 }} />
                      <Typography variant="h6" fontWeight="bold">Leandro Ramos</Typography>
                    </Box>
                    <Box display="flex" alignItems="center" mb={2}>
                      <FormatQuote sx={{ color: "var(--color-text)", fontSize: "32px", mr: 1 }} />
                      <Typography variant="body2" color="textSecondary">
                        Com a automação, conseguimos executar o processo que precisaria de pelo menos cinco pessoas, economizando tempo, reduzindo erros e perdas.
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              {/* Depoimento 3 */}
              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ 
                  height: "100%", 
                  display: "flex", 
                  flexDirection: "column", 
                  borderRadius: "16px", 
                  boxShadow: 3,
                  transition: "all 0.3s ease-in-out", 
                  '&:hover': { 
                    transform: 'scale(1.05)', 
                    boxShadow: 8 
                  }
                }}>
                  <CardContent>
                    <Box display="flex" alignItems="center" gap={2} mb={2}>
                      <Avatar alt="Ana Costa" src="#" sx={{ width: 56, height: 56 }} />
                      <Typography variant="h6" fontWeight="bold">Eduarda Sampaio</Typography>
                    </Box>
                    <Box display="flex" alignItems="center" mb={2}>
                      <FormatQuote sx={{ color: "var(--color-text)", fontSize: "32px", mr: 1 }} />
                      <Typography variant="body2" color="textSecondary">
                        Dobramos nosso volume de vendas. Não pensávamos que éramos grandes o suficiente para entrar no mundo do CRM. Eu não poderia estar mais feliz.
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
      </section>
    </>
  );
}

export default AboutUs;
