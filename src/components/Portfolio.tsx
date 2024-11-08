import "../assets/styles/porfolio.css";
import Logo from "../assets/img/logoHub.png";

function Portfolio() {
  return (
    <>
      <section className="main">
        <img src={Logo} alt="Logo Hub" className="logo" />
        <h1 className="title-main">Nosso Portfólio</h1>
        <p className="description-main">
          Veja alguns dos nossos projetos e cases de sucesso.
        </p>
        <div className="projects-list">
          <div className="project-item">
            <h2>Projeto X</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="project-item">
            <h2>Projeto Y</h2>
            <p>Proin vehicula, erat in convallis condimentum.</p>
          </div>
          <div className="project-item">
            <h2>Projeto Z</h2>
            <p>Donec et nisi vel justo fermentum tempor.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
