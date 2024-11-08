import "../assets/styles/homeStyle.css";
import Logo from "../assets/img/logoHub.png";
import AboutUs from "../components/AboutUs";


function Home() {
  return (
    <>
      <section className="main-container">
        <div className="box-divs">
          <div className="box-purple"></div>
          <div className="box-light-purple"></div>
        </div>
        <img src={Logo} alt="Logo Hub" className="logo" />
        <h1 className="title-main">HUB360+</h1>
        <p className="description-main">Nosso negócio é fazer você vender mais</p>
        <button className="btn">Saiba Mais</button>
        <svg
          className="wave-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
        <path
          fill="var(--color-button)" // Ajuste a cor conforme necessário
          d="M0,64L30,85.3C60,107,120,149,180,170.7C240,192,300,192,360,176C420,160,480,128,540,106.7C600,85,660,75,720,90.7C780,107,840,149,900,160C960,171,1020,149,1080,144C1140,139,1200,149,1260,160C1320,171,1380,181,1410,186.7L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320H0Z"
          style={{ animation: 'waveHeightAnimation 10s ease-in-out infinite' }} // Adiciona animação de altura
        />a
      </svg>

      </section>
      <AboutUs />
    </>
  )
}

export default Home;