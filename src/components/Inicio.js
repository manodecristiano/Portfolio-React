import React, { useRef } from "react";
import "./css/Inicio.css";
import Carousel from "./Carousel";
import TimeLine from "./TimeLine";
import imagenPortada from "./assets/Cristian.jpeg";
import iconoLinkedin from "./assets/icono-Linkedin.png";
import imagenLinkedin from "./assets/Linkdin-image.png";
import imagenLinkedinProfile from "./assets/Linkdin-image-profile.png";
import iconoGithub from "./assets/icono-Github.png";
import Typed from "typed.js";

export const Inicio = () => {


  const inicioRef = useRef(null);

  const escrituraAutomatica = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(escrituraAutomatica.current, {
      strings: ["Programador", "Frontend", "Diseñador", "Maquetador", "Web", "Móvil"],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      showCursor: true,
      loop: true
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);



  return (
    <>


<div className="bento-grid-general" id="bento-grid-container">


<div className="bento-grid-general" id="bento-grid-Linkedin">
<a className='iconosRRSS' href="https://www.linkedin.com/in/cristiancarre/" target="_blank" rel="noopener noreferrer">

<img id="imageLinkedin" className="linkedin" src={imagenLinkedin} alt="imagen de Linkedin" />
<img id="imageLinkedin-profile" className="linkedin" src={imagenLinkedinProfile} alt="imagen del perfil de Linkedin" />
</a>
</div>

<div className="bento-grid-general" id="bento-grid-Presentation">
                <p>
                Apasionado desarrollador multiplataforma con una licenciatura en la materia.
                A lo largo de mis más de <span>3 años de experiencia</span>, he forjado sólidos conocimientos
                en diseño e ilustración. Mi enfoque autodidacta me motiva a considerar cada desafío
                como una oportunidad para aprender y crecer.
                </p>
</div>
<div className="bento-grid-general" id="bento-grid-Maps">
  
<img id="imageProfile2" src={imagenPortada} alt="foto profesional de Cristian" />

</div>
<div className="bento-grid-general" id="bento-grid-Carrousel">

<div className='box-class-general' id="box-carousel">
            <p id='titleCarousel'>Tecnologías que utilizo:</p>
            <div id="carousel2">
              <Carousel></Carousel>
            </div> 
              <div id="separator-line3"></div>
         </div>
</div>


<div className="bento-grid-general" id="bento-grid-AboutMe">
     <p>
                Con un enfoque decidido y altamente centrado, me sumerjo por
                completo en proyectos, persistiendo hasta lograr resultados.
                Fusiono creatividad y originalidad, elementos vitales en un
                mundo transformado por la proliferación de I.A. Además, destaco
                por una comunicación efectiva, cultura de servicio, organización,
                manejo del tiempo, pensamiento crítico y una actitud proactiva.
    </p>  
</div>




<div className="bento-grid-general" id="bento-grid-Git">
    
             <a href="https://github.com/manodecristiano" target="_blank" rel="noopener noreferrer">
               <img id="iconoGithub" src={iconoGithub} alt="icono de Github" />
             </a>
     
    
</div>


<div className="bento-grid-general" id="bento-grid-English">
  <h5>Con un enfoque decidido y altamente centrado</h5>
            <p>
                Con un enfoque decidido y altamente centrado, me sumerjo por
                completo en proyectos, persistiendo hasta lograr resultados.
                Fusiono creatividad y originalidad, elementos vitales en un
              
            </p>  
  <span id='escrituraAutomatica' ref={escrituraAutomatica} />
  </div>

  <div className="bento-grid-general" id="bento-grid-Time">
    TIME
  </div>

<div className="bento-grid-general" id="bento-grid-gray">

<img id="imageProfile2" src={imagenPortada} alt="foto profesional de Cristian" />
</div>

</div>







      <div id="container-general">
        <div ref={inicioRef} id="initiation" className="sectionInitiation"></div>
        <div id="container-title">
          <h1 id="title1">Portfolio    Cristian Carreño </h1>
          <h1 id="title2">Portfolio</h1>
          <h5 id="title3">Cristian Carreño</h5>
        </div>
        <div id="separator-line1"></div>




        <div id="box-id-general">

          <div id="container-logo-Initiation">
            <h2 className="rope">|</h2>
            <div className="letter-logo">
              <span>C</span>
            </div>
          </div>

         
            <div className='box-class-general' id="box-first-paragraf">
              <p>
                Apasionado desarrollador multiplataforma con una licenciatura en la materia.
                A lo largo de mis más de <span>3 años de experiencia</span>, he forjado sólidos conocimientos
                en diseño e ilustración. Mi enfoque autodidacta me motiva a considerar cada desafío
                como una oportunidad para aprender y crecer.
              </p>
            </div>

         
          <div className='box-class-general' id="box-image">

            <img id="imageProfile2" src={imagenPortada} alt="foto profesional de Cristian" />

          </div>

          <div className='box-class-general' id="box-icons">
           
            <div className="icons-inicio">
              <a href="https://www.linkedin.com/in/cristiancarre/" target="_blank" rel="noopener noreferrer">
                <img id="iconoLinkedin" src={iconoLinkedin} alt="icono de Linkedin" href="https://www.linkedin.com/in/cristiancarre/" target="_blank" rel="noopener noreferrer" />
              </a>
              </div>

            <div className="icons-inicio">
              <a href="https://github.com/manodecristiano" target="_blank" rel="noopener noreferrer">
                <img id="iconoGithub" src={iconoGithub} alt="icono de Github" />
              </a>
            </div>

          </div>
       
            <div className='box-class-general' id="box-second-paragraf" >
              <div id="second-paragraf">
            <p>
                Con un enfoque decidido y altamente centrado, me sumerjo por
                completo en proyectos, persistiendo hasta lograr resultados.
                Fusiono creatividad y originalidad, elementos vitales en un
                mundo transformado por la proliferación de I.A. Además, destaco
                por una comunicación efectiva, cultura de servicio, organización,
                manejo del tiempo, pensamiento crítico y una actitud proactiva.
              </p>
            </div>

            <div>
              <span id='escrituraAutomatica' ref={escrituraAutomatica} />
            </div>
            </div>



          <div className='box-class-general' id="box-carousel">
            <p id='titleCarousel'>Tecnologías que utilizo:</p>
            <div id="carousel2">
              <Carousel></Carousel>
            </div> 
              <div id="separator-line3"></div>
         </div>
        


        </div>



        <div id="separator-line2"></div>
      </div>
      <div className="container-flex">
        <TimeLine></TimeLine>
      </div>
    </>
  );
};
export default Inicio;
