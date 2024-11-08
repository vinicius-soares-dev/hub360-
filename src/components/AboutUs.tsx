import { Web, ShoppingCart, AccountBalance } from "@mui/icons-material";
import "../assets/styles/aboutUs.css";

function AboutUs() {
  return (
    <>
      <section className="aboutus-section">
        <h1 className="aboutus-title">Transformando desafios em oportunidades</h1>
        <p className="aboutus-description">
          Oferecemos soluções personalizadas para otimizar seus processos, do marketing ao pós-venda.
        </p>
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
          <ol>
            <li>
              <Web fontSize="medium" /> Marketing Digital e Social Media
            </li>
            <li>
             Automação de Venda
            </li>
            <li>
              <ShoppingCart fontSize="medium" /> Gestão 360 E-commerce
            </li>
            <li>
              <AccountBalance fontSize="medium" /> Gestão 360 Licitações
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

          <h2 className="aboutus-subtitle">Valores</h2>
          <p>
            Nossos valores são: integridade, compromisso e excelência. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
