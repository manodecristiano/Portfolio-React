import React, { useRef } from "react";
import "./css/Inicio.css";
import Carousel from "./Carousel";
import TimeLine from "./TimeLine";
import Weather from './layout/Weather';
import imageLinkedin from "./assets/Linkedin-image.png";
import imageLinkedinProfile from "./assets/Linkedin-image-profile.png";
import iconoGithub from "./assets/icono-Github.png";
import circle from "./assets/circle.png";



export const Inicio = () => {


  const inicioRef = useRef(null);

 


  return (
    <>


<div className="bento-grid-general" id="bento-grid-container">


<div className="bento-grid-general" id="bento-grid-Linkedin">
   <a className='iconosRRSS' href="https://www.linkedin.com/in/cristiancarre/" target="_blank" rel="noopener noreferrer">
       <img id="imageLinkedin-Profile" className="linkedin" src={imageLinkedinProfile} alt="imagen de Linkedin" />
       <img id="imageLinkedin" className="linkedin" src={imageLinkedin} alt="imagen de Linkedin" />
    </a>
</div>

<div className="bento-grid-general" id="bento-grid-Presentation">
  <h2>Hola, Bienvenido a mi Portfolio</h2>
                <p>
                Soy un apasionado desarrollador multiplataforma con una licenciatura en la materia.
                A lo largo de mis más de <span>3 años de experiencia</span>, he forjado sólidos conocimientos
                de programación, diseño e ilustración. Sientete libre de ver mis proyectos y mi trayectoria.
                </p>
</div>
<div className="bento-grid-general" id="bento-grid-Maps">
  
<div id="ping"> 
<img id="circle" src={circle} alt="pulse" />
</div>

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
                Además de los estudios reglados, mi enfoque autodidacta me impulsa a abordar 
                cada desafío como una oportunidad para aprender y evolucionar.
                Me distingo por una comunicación efectiva, habilidades 
                organizativas, una actitud proactiva con pensamiento crítico y gestión eficiente del tiempo.
                Con determinación y un enfoque altamente centrado, me sumerjo por completo en proyectos, 
                perseverando hasta alcanzar resultados satisfactorios. 
             
    </p>  
</div>




<div className="bento-grid-general" id="bento-grid-Git">
    
             <a href="https://github.com/manodecristiano" target="_blank" rel="noopener noreferrer">
               <img id="iconoGithub" src={iconoGithub} alt="icono de Github" />
             </a>
     
    
</div>


<div className="bento-grid-general" id="bento-grid-English">

<span>ENGLISH LEVEL:</span>
<h1>B2</h1>

</div>

  <div className="bento-grid-general" id="bento-grid-Time">
<div id="bento-grid-Time-Weather"><Weather></Weather>
  </div>

  
  </div>

<div className="bento-grid-general" id="bento-grid-Picture">
<div></div>
</div>

</div>







      <div id="container-general">
        <div ref={inicioRef} id="initiation" className="sectionInitiation"></div>
     
        <div id="separator-line1"></div>




       
          <div id="container-logo-Initiation">
            <h2 className="rope">|</h2>
            <div className="letter-logo">
              <span>C</span>
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
