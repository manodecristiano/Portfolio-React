import React, { useRef } from "react";
import "./css/Inicio.css";
import Carousel from "./Carousel";
import TimeLine from "./TimeLine";
import imagenPortada from "./assets/Cristian.jpeg";
import iconoLinkedin from "./assets/icono-Linkedin.png";
import iconoGithub from "./assets/icono-Github.png";

export const Inicio = () => {
  const inicioRef = useRef(null);
  return (
    <>

      <div id="container-general">
        <div ref={inicioRef} id="initiation" className="sectionInitiation"></div>
        <div id="container-title">
          <h1 id="title1">Bienvenido a mi web ! Soy Cristian </h1>
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

          <div>
          <div className='box-class-general' id="box-first-paragraf">  
          <p>
            Me llamo Cristian, soy un apasionado desarrollador multiplataforma con una licenciatura en la materia. A lo largo de mis más de 5 años de experiencia, he cultivado amplios conocimientos en diseño e ilustración. Mi enfoque autodidacta me impulsa a ver cada desafío como una oportunidad para aprender y crecer. Siempre estoy comprometido con la mejora continua, lo que me permite enfrentar nuevos retos con entusiasmo y determinación.
          </p>
          </div>
          <div className='box-class-general' id="box-carousel">
            <p>Tecnologías que utilizo:</p>
            <div id="carousel2">
              <Carousel></Carousel>
            </div>
          </div>
          </div>
          <div className='box-class-general' id="box-image"> 
          <img id="imageProfile2"src={imagenPortada} alt="foto profesional de Cristian"/>
          </div>

          <div className='box-class-general' id="box-icons">
          <img id="iconoLinkedin" src={iconoLinkedin}alt="icono de Linkedin"/>
          <img id="iconoGithub" src={iconoGithub}alt="icono de Github"/>
          </div>

          <div className='box-class-general' id="box-second-paragraf"> 
          <p>
            Sin duda, destaco por mi enfoque decidido y concentrado, siendo altamente "focus". Cuando me embarco en un proyecto, me sumerjo por completo y persisto hasta alcanzar los resultados deseados, incluso dejando de lado pausas para comer. Fusiono creatividad y originalidad en mi trabajo, algo que considero vital en un contexto donde la proliferación de nuevas I.A. está transformando el desarrollo. Mi preferencia por soluciones simples y elegantes no compromete la funcionalidad; al contrario, busco la eficiencia sin perder la esencia de la innovación.
          </p>
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
