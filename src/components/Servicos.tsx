import "../assets/styles/services.css";
import Logo from "../assets/img/logoHub.png";

function Servicos() {
  return (
    <>
      <section className="main">
        <img src={Logo} alt="Logo Hub" className="logo" />
        <h1 className="title-main">Nossos Serviços</h1>
        <p className="description-main">
          Oferecemos uma ampla gama de serviços para impulsionar seu negócio.
        </p>
        <div className="services-list">
          <div className="service-item">
            <h2>Consultoria Estratégica</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="service-item">
            <h2>Desenvolvimento Web</h2>
            <p>Proin vehicula, erat in convallis condimentum, purus turpis feugiat sapien.</p>
          </div>
          <div className="service-item">
            <h2>Marketing Digital</h2>
            <p>Donec et nisi vel justo fermentum tempor et eu massa.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Servicos;
