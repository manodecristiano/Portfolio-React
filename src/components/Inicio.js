import React, { useRef } from "react";
import "./css/Inicio.css";
import Carousel from "./Carousel";
import TimeLine from "./TimeLine";
import imagenPortada from "./assets/Cristian.jpeg";

export const Inicio = () => {
  const inicioRef = useRef(null);
  return (
    <>

      <div id="container-general">
        <div ref={inicioRef} id="initiation" className="sectionInitiation"></div>
        <div id="container-title">
          <h1 id="title1">Bienvenido a mi web ! Soy Cristian </h1>
          <h1 id="title2">Portfolio web</h1>
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
          <div className='box-class-general' id="box-first-paragraf">  <p>
            Me presento, soy Cristian, un desarrollador multiplataforma,
            licenciado en ello y además con amplia formación y
            conocimientos en diseño e ilustración que he ido consiguiendo
            durante estos más de 5 años de experiencia y constante
            aprendizaje. Me gusta ser autodidacta, así cualquier reto para
            mí lo veo como una oportunidad y crecimiento.
          </p></div>
          <div className='box-class-general' id="box-second-paragraf"> <p>
            Entre mis cualidades a destacar diría que soy muy "focus", me
            centro en una cosa y hasta que no la consigo, es muy posible
            que ni pare para comer. Combino creatividad y originalidad en
            el desarrollo, algo que se está perdiendo con el desarrollo de
            nuevas I.A. Me suelo decantar por las cosas simples, elegantes
            pero sobre todo sin perder funcionalidad.
          </p></div>
          <div className='box-class-general' id="box-image"> <img
            id="imageProfile2"
            src={imagenPortada}
            alt="foto profesional de Cristian"
          /></div>
          <div className='box-class-general' id="box-carousel">
            <div id="carousel2">
              <Carousel></Carousel>
            </div>
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
