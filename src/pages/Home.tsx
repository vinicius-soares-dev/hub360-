import { useRef } from 'react';
import { Container, Button, Typography } from '@mui/material';
import { ArrowForward as ArrowForwardIcon } from '@mui/icons-material';  // Importando ícone do Material UI
import Logo from '../assets/img/logoHub.png';
import AboutUs from '../components/AboutUs';
import Header from '../components/Header';
import BlogList from '../components/blogs';
import Footer from '../components/footer';
import { styled } from '@mui/system';
import '../assets/styles/homeStyle.css';

// Logo estilizado com animação e efeito de hover
const LogoImage = styled('img')({
  maxWidth: '150px',
  marginBottom: '20px',
  transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
  opacity: 0.8,
  '&:hover': {
    transform: 'rotate(15deg) scale(1.1)',
    opacity: 1,
  },
});

// Animações de entrada para os elementos
const fadeIn = {
  animation: 'fadeIn 1.5s ease-out forwards',
};

const fadeInUp = {
  animation: 'fadeInUp 1.5s ease-out forwards',
};

function Home() {
  const section01Ref = useRef<HTMLElement | null>(null);

  const scrollToSection = () => {
    if (section01Ref.current) {
      section01Ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="main-container" style={fadeIn}>
        <div className="particle-background"></div>
        <Header />
        <Container maxWidth="lg" sx={{ textAlign: 'center', paddingTop: 4 }}>
          {/* Logo com animação */}
          <LogoImage src={Logo} alt="Logo Hub" />

          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              color: 'var(--color-text)', // Usando a cor primária definida no tema
              fontSize: '3rem',
              letterSpacing: 1.5,
              lineHeight: 1.2,
              ...fadeInUp,
            }}
          >
            HUB360+
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary', // Usando a cor secundária definida no tema
              marginBottom: '20px',
              fontWeight: 'light',
              fontSize: '1.2rem',
              ...fadeInUp,
            }}
          >
            Nosso negócio é fazer você vender mais
          </Typography>
          <Button
            variant="contained"
            color="primary" // Usando o 'primary' definido no tema
            onClick={scrollToSection}
            sx={{
              fontSize: '1.2rem',
              textAlign: 'center',
              margin: '0 auto',
              padding: '12px 24px',
              borderRadius: '30px',
              textTransform: 'none',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              alignItems: 'center', // Alinha ícone e texto
              justifyContent: 'center', // Alinha o ícone e o texto de forma centralizada
              gap: '8px', // Adiciona espaço entre o texto e o ícone
              backgroundColor: 'var(--color-button)', // Usando a variável de cor definida
              '&:hover': {
                backgroundColor: 'var(--color-button-hover)', // Usando a variável de cor de hover
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
                transform: 'translateY(-3px) scale(1.05)',
              },
              ...fadeInUp,
            }}
          >
            Saiba Mais
            <ArrowForwardIcon sx={{ fontSize: '1.4rem' }} />
          </Button>
        </Container>
      </section>

      {/* Seção que o botão irá rolar até */}
      <section id="section-01" ref={section01Ref}>
        <AboutUs />
      </section>

      <BlogList />
      <Footer />
    </>
  );
}

export default Home;
