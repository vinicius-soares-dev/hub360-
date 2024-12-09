
import { Box, Typography, Container, Grid, Card, CardContent, Button, Accordion, AccordionSummary, AccordionDetails, AppBar, Toolbar, IconButton } from "@mui/material";
import { CalendarToday, ArrowBack as ArrowBackIcon} from "@mui/icons-material";
import { useInView } from "react-intersection-observer";
import Criativo1 from "../assets/videos/Criativo 01.mp4";
import "../assets/styles/aboutUs.css";
import { ExpandMore } from "@mui/icons-material";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import ImgEffect from "../assets/img/logo-effect.png";
import ImgLogo from "../assets/img/logoHub.png";

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

// Dados dos portais
const portals = [
  { nome: 'Status da Plataforma', link: 'http://status.effecti.com.br' },
  { nome: 'Acompanhe seu Chamado', link: 'https://effecti.movidesk.com' },
  { nome: 'Site', link: 'http://effecti.com.br' },
  { nome: 'Blog', link: '#' },
  { nome: 'Robô de Lances', link: 'https://www.effecti.com.br/robo-de-lances/' },
  { nome: 'Nova Lei de Licitações', link: 'https://www.effecti.com.br/categoria/nova-lei-de-licitacoes/' },
  { nome: 'Pregão Eletrônico', link: 'https://www.effecti.com.br/categoria/pregao-eletronico/' },
  { nome: 'Notícias', link: 'https://www.effecti.com.br/categoria/noticias/' },
  { nome: 'Login', link: 'http://minha.effecti.com.br' },
];

function Bidding() {
  return (
    <>
    <AppBar
        position="static"
        sx={{ backgroundColor: "var(--color-button)", mb: 3 }}
        elevation={1}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="back"
            onClick={() => window.location.href="/"} 
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "var(--font-main)",
              fontWeight: "bold",
              color: "white",
            }}
          >
            HUB360+ Licitações
          </Typography>
          <Box /> {/* Placeholder para alinhar o botão ao centro */}
        </Toolbar>
      </AppBar>
    <Box>
      {/* Seção: Conheça nossos serviços */}
      <Box sx={{ backgroundColor: "var(--color-background)", py: 8, textAlign: "center" }} id="section-01">
        
        <Container>
          <AnimatedBox delay={0.2}>
            <img src={ImgLogo} alt="logo hub360" style={{ width: "200px"}} />
            <Typography variant="body1" sx={{ maxWidth: "600px", mx: "auto", mb: 4, color: "var(--color-text)", letterSpacing: "1pt" }}>
             Imagine sua empresa diante de uma oportunidade incrível: vender seus produtos ou serviços para o governo. Porém, a complexidade do processo licitatório e os custos envolvidos fazem parecer que esse mercado está fora do seu alcance.
            </Typography>
          </AnimatedBox>
          <AnimatedBox delay={0.2}>
            <Typography variant="body1" sx={{ maxWidth: "600px", mx: "auto", mb: 4, color: "var(--color-text)", letterSpacing: "1pt" }}>
              Horas gastas buscando oportunidads, treinando equipes, gerenciando documentos e enfrentando burocracias. isso sem falar nos custos com advogados e o peso dos encargos trabalhistas ao manter um setor interno de licitações.
            </Typography>
          </AnimatedBox>
          <AnimatedBox delay={0.2}>
            <Typography variant="body1" sx={{ maxWidth: "600px", mx: "auto", mb: 4, color: "var(--color-text)", letterSpacing: "1pt" }}>
              Agora, imagine um cenário diferente. Com o <strong>HUB360+</strong> ao seu lado, você elimina esses obstáculos e transforma o processo licitatório em uma experiência eficiente e lucrativa. Nossa equipe de especialistas, com experiência no setor público e privado, cuida de tudo: desde o cadastro nos principais órgãos até a participação e representação nos pregões.
            </Typography>
          </AnimatedBox>
          <AnimatedBox delay={0.4}>
            <video width="100%" controls style={{ borderRadius: "8px" }}>
              <source src={Criativo1} type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </AnimatedBox>
          <AnimatedBox delay={0.2}>
            <Typography variant="body1" sx={{ maxWidth: "600px", mx: "auto", mb: 4, color: "var(--color-text)", letterSpacing: "1pt" }}>
              Enquanto nós lidamos com a burocracia, você foca no que realmente importa: executar contrtos, expandir sua empresa e aumentar seus lucros. Com a <strong>HUB360+</strong>, cada licitação deixa de ser um desafio para se tornar uma oportunidade real de crescimento.
            </Typography>
          </AnimatedBox>
          <AnimatedBox delay={0.2}>
            <Typography variant="body1" sx={{ maxWidth: "600px", mx: "auto", mb: 4, color: "var(--color-text)", letterSpacing: "1pt" }}>
              Está na hora de levar seu negócio para o próximo nível. Fale consco e descubra como a <strong>HUB360+</strong> pode potencializar seus resultados no setor público.
            </Typography>
          </AnimatedBox>
          <AnimatedBox delay={0.2}>
            <Typography variant="body1" sx={{ maxWidth: "600px", mx: "auto", mb: 4, color: "var(--color-text)", letterSpacing: "1pt", fontWeight: "bolder" }}>
              Juntos, vamos transformar o futuro de sua empresa.
            </Typography>
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
          <AnimatedBox>
            <Typography variant="h4" fontWeight="bold" align="center" gutterBottom sx={{ color: "var(--color-text)" }}>
              Veja o que nós fazemos
            </Typography>
          </AnimatedBox>
          <AnimatedBox delay={0.2}>

            <Typography variant="body1" align="center" sx={{ mb: 6, color: "var(--color-text)" }}>
              O HUB360+ ajuda as empresas a aproveitar a oportunidade única de vender seus produtos ou serviços.
            </Typography>
          </AnimatedBox>
          <Grid container spacing={4}>
            {/* Card 1 */}
            <Grid item xs={12} sm={6} md={3}>
              <AnimatedBox delay={0.3}>

                <Card sx={{ boxShadow: 3, borderRadius: 2, "&:hover": { boxShadow: 6 } }}>
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold" sx={{ color: "var(--color-text)" }} gutterBottom>
                      Cadastramento e Atualizações
                    </Typography>
                    <Typography variant="body2" sx={{ color: "var(--color-text)" }}>
                      Realizamos o registro e a renovação da sua empresa nos principais órgãos públicos, como Caixa Econômica, SICAF (Governo Federal) e outros.
                    </Typography>
                  </CardContent>
                </Card>
              </AnimatedBox>
            </Grid>
            {/* Card 2 */}
            <Grid item xs={12} sm={6} md={3}>
              <AnimatedBox delay={0.4}>

                <Card sx={{ boxShadow: 3, borderRadius: 2, "&:hover": { boxShadow: 6 } }}>
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold" sx={{ color: "var(--color-text)" }} gutterBottom>
                      Elaboração de Recursos Administrativos
                    </Typography>
                    <Typography variant="body2" sx={{ color: "var(--color-text)" }}>
                      Preparamos impugnações, recursos e contrarrazões, buscando defesa dos interesses de sua empresa no processo licitatório.
                    </Typography>
                  </CardContent>
                </Card>
              </AnimatedBox>
            </Grid>
            {/* Repeat for each card */}
            <Grid item xs={12} sm={6} md={3}>
              <AnimatedBox delay={0.5}>

                <Card sx={{ boxShadow: 3, borderRadius: 2, "&:hover": { boxShadow: 6 } }}>
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold" sx={{ color: "var(--color-text)" }} gutterBottom>
                      Participação, Representação em Pregões
                    </Typography>
                    <Typography variant="body2" sx={{ color: "var(--color-text)" }}>
                      Após o cadastro completo, representamos sua empresa em pregões eletrônicos e presenciais junto aos órgãos públicos.
                    </Typography>
                  </CardContent>
                </Card>
              </AnimatedBox>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <AnimatedBox delay={0.6}>

                <Card sx={{ boxShadow: 3, borderRadius: 2, "&:hover": { boxShadow: 6 } }}>
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold" sx={{ color: "var(--color-text)" }} gutterBottom>
                      Consultoria Online
                    </Typography>
                    <Typography variant="body2" sx={{ color: "var(--color-text)" }}>
                      Oferecemos suporte remoto via telefone, e-mail, Meet, Zoom e outras ferramentas, garantindo atendimento rápido e eficiente.
                    </Typography>
                  </CardContent>
                </Card>
              </AnimatedBox>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <AnimatedBox delay={0.7}>

                <Card sx={{ boxShadow: 3, borderRadius: 2, "&:hover": { boxShadow: 6 } }}>
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold" sx={{ color: "var(--color-text)" }} gutterBottom>
                      Acompanhamento Diário de Licitações
                    </Typography>
                    <Typography variant="body2" sx={{ color: "var(--color-text)" }}>
                      
                      Preparamos impugnações, recursos e contraraz~, buscando defesa dos interesses de sua empresa no processo licitatório.
                    </Typography>
                  </CardContent>
                </Card>
              </AnimatedBox>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <AnimatedBox delay={0.8}>

                <Card sx={{ boxShadow: 3, borderRadius: 2, "&:hover": { boxShadow: 6 } }}>
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold" sx={{ color: "var(--color-text)" }} gutterBottom>
                     Propostas Comerciais e Técnicas
                    </Typography>
                    <Typography variant="body2" sx={{ color: "var(--color-text)" }}>
                      Elaboramos propostas comerciais completas, propostas técnicas e documentos exigidos para participação em licitações.
                    </Typography>
                  </CardContent>
                </Card>
              </AnimatedBox>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <AnimatedBox delay={0.9}>

                <Card sx={{ boxShadow: 3, borderRadius: 2, "&:hover": { boxShadow: 6 } }}>
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold" sx={{ color: "var(--color-text)" }} gutterBottom>
                      Terceirização do Departamento de Licitações
                    </Typography>
                    <Typography variant="body2" sx={{ color: "var(--color-text)" }}>
                      Se sua empresa não possui um setor de licitações, mas busca aumentar as vendas, oferecemos soluções completas para terceirizar essa área.
                    </Typography>
                  </CardContent>
                </Card>
              </AnimatedBox>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <AnimatedBox delay={1}>

                <Card sx={{ boxShadow: 3, borderRadius: 2, "&:hover": { boxShadow: 6 } }}>
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold" sx={{ color: "var(--color-text)" }} gutterBottom>
                      Representação nos tribunais de Contas
                    </Typography>
                    <Typography variant="body2" sx={{ color: "var(--color-text)" }}>
                      Representamos sua empresa perante os Tribunais de contas, apresentando denúncias e representações para resolver problemas e garantir os melhores resultados. Nossa atuação é ágil e estratégica, com histórico de sucesso em medidas cautelares contra atos ilegais.
                    </Typography>
                  </CardContent>
                </Card>
              </AnimatedBox>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Seção: FAQ */}
    <Box sx={{ backgroundColor: "var(--color-background)", py: 8 }} id="section-03">
      <Container>
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ textAlign: "center", mb: 4, color: "var(--color-text)" }}
        >
          FAQ
        </Typography>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={8}>
            {/* Lista de FAQs */}
            {[
              {
                question: "Elaboração de Editais de Contratações Públicas",
                answer:
                  "O edital é a base legal de qualquer licitação, conhecida como sua “lei”. Após a publicação, as regras definidas tornam-se vinculativas para a administração pública e os licitantes, não podendo ser alteradas. Garantimos a criação de editais claros e bem estruturados para garantir a transparência e o sucesso do processo licitatório.",
              },
              {
                question: "Elaboração de Termos de Referência",
                answer:
                  "Termos de Referência ou Projetos Básicos são essenciais para caracterizar detalhadamente o objeto da licitação. Esses documentos são elaborados com base em estudos técnicos, garantindo que contenham todas as informações necessárias para uma licitação eficiente e objetiva.",
              },
              {
                question: "Elaboração de Estudos Técnicos Preliminares",
                answer:
                  "Esta etapa inicial do planejamento garante a técnica ou forma da contratação, prevendo possíveis riscos e assegurando um embasamento sólido para a elaboração do Termo de Referência ou Projeto Básico. Trabalhamos para que cada detalhe seja cuidadosamente analisado antes da execução do processo licitatório.",
              },
              {
                question: "Elaboração de Justificativas Técnicas para Contratações",
                answer:
                  "Desenvolvemos justificativas claras e detalhadas, que demonstram a necessidade de contratação de bens ou serviços. Esse documento é essencial para fundamentar as decisões administrativas e garantir que as aquisições sejam atendidas às necessidades do órgão público.",
              },
              {
                question: "Elaboração de Planos de Custos de Produção (Anexo Edital)",
                answer:
                  "Criamos planilhas elaboradas que especificam os componentes de custo na formação de preços para serviços. Nossas análises analisam os especialistas de serviços continuados, garantindo precisão e conformidade com os critérios administrativos.",
              },
              {
                question: "Consultoria em Contratos Administrativos",
                answer:
                  "Somos especializados em gestão de contratos públicos, integrando as áreas Jurídica, Técnica e Financeira. Nosso objetivo é prevenir riscos, quantificar e conduzir pleitos administrativos de forma estratégica, garantindo segurança e eficiência na execução de contratos públicos.",
              },
            ].map((faq, index) => (
              <Accordion
                key={index}
                sx={{
                  backgroundColor: "var(--color-box)",
                  color: "var(--color-text)",
                  mb: 2,
                  "&:before": { display: "none" }, // Remove linha de destaque padrão do Accordion
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  sx={{ fontWeight: "bold" }}
                >
                  {faq.question}
                </AccordionSummary>
                <AccordionDetails>{faq.answer}</AccordionDetails>
              </Accordion>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>

      {/* Seção: Transforme Sua Empresa */}
<Box sx={{ backgroundColor: "var(--color-box)", py: 8 }} id="section-04">
  <Container>
    <AnimatedBox delay={0.2}>

      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ textAlign: "center", mb: 4, color: "var(--color-text)" }}
      >
        Transforme Sua Empresa em uma Potência Lucrativa no Mercado Público
      </Typography>
    </AnimatedBox>
    <Grid container spacing={4} alignItems="center">
      {/* Primeira Coluna */}
      <Grid item xs={12} md={6}>
        <AnimatedBox delay={0.3}>

          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ mb: 2, color: "var(--color-text)" }}
          >
            Maximize Seus Lucros com Licitações Públicas
          </Typography>
        </AnimatedBox>
        <AnimatedBox delay={0.4}>

          <Typography
            variant="body1"
            sx={{ mb: 4, color: "var(--color-text-secondary)" }}
          >
            Conte com um departamento exclusivo de licitações, projetado para 
            intervenções à lucratividade e ampliar as oportunidades de negócios de 
            sua empresa no setor público.
          </Typography>
        </AnimatedBox>
        <AnimatedBox delay={0.5}>

          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ mb: 2, color: "var(--color-text)" }}
          >
            Especialistas em Licitações
          </Typography>
        </AnimatedBox>
        <AnimatedBox delay={0.6}>

          <Typography
            variant="body1"
            sx={{ mb: 4, color: "var(--color-text-secondary)" }}
          >
            Nossa equipe está sempre atualizada com as mais recentes mudanças nas 
            regulamentações governamentais, garantindo estratégias eficazes para sua 
            empresa lucrar no mercado público.
          </Typography>
        </AnimatedBox>
        <AnimatedBox delay={0.7}>

          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ mb: 2, color: "var(--color-text)" }}
          >
            Conveniência para o Seu Negócio
          </Typography>
        </AnimatedBox>
        <AnimatedBox delay={0.8}>

          <Typography
            variant="body1"
            sx={{ mb: 4, color: "var(--color-text-secondary)" }}
          >
            Criamos novas receitas, negócios e oportunidades para sua empresa, sem 
            adicionar custos desnecessários. Aumente seus resultados sem comprometer 
            sua estrutura financeira.
          </Typography>
        </AnimatedBox>
      </Grid>

      {/* Segunda Coluna */}
      <Grid item xs={12} md={6}>
        <AnimatedBox delay={0.9}>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
            }}
          >
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
          </Box>
        </AnimatedBox>
      </Grid>
    </Grid>
    {/* Chamada para ação adicional */}
    <Box
      sx={{
        textAlign: "center",
        mt: 6,
        p: 3,
        backgroundColor: "var(--color-highlight)",
        borderRadius: 2,
      }}
    >
      <AnimatedBox delay={1.0}>

        <Typography
          variant="body1"
          sx={{ color: "var(--color-text-contrast)", fontWeight: "bolder" }}

        >
          Conquiste resultados sólidos com nossa expertise em licitações públicas!
        </Typography>
      </AnimatedBox>
    </Box>
  </Container>
</Box>

<Box sx={{ backgroundColor: "var(--color-background)", py: 8, display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center" }}>
      <Container>
        <AnimatedBox delay={0.2}>
          <Typography variant="h4" fontWeight="bold" align="center" gutterBottom sx={{ color: "var(--color-text)" }}>
            Portais Disponíveis
          </Typography>
        </AnimatedBox>
        <AnimatedBox delay={0.3}>
          <img src={ImgEffect} style={{ width: "100%"}} alt="imagem logo effect" />
        </AnimatedBox>

        <Grid container spacing={4}>
          {portals.map((portal, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <AnimatedBox delay={0.4 + index * 0.2}>
                <Card sx={{ boxShadow: 3, borderRadius: 2, "&:hover": { boxShadow: 6 } }}>
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold" sx={{ color: "var(--color-text)" }} gutterBottom>
                      {portal.nome}
                    </Typography>
                    <Link to={portal.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                      <Button variant="outlined" sx={{ color: "var(--color-button)", borderColor: "var(--color-button)", "&:hover": { backgroundColor: "var(--color-button-hover)", color: "#fff" } }}>
                        Acessar
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </AnimatedBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>


      

    </Box>
    <Footer />
    </>
  );
}

export default Bidding;