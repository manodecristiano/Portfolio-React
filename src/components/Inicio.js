import React, {useRef} from "react";
import "./css/Inicio.css";
import Carousel from "./Carousel";
import TimeLine from "./TimeLine";
import imagenPortada from "./assets/Cristian.jpeg";


export const Inicio = () => {
  const inicioRef = useRef(null);
  return (
    <>
     <div id="subcontenedor-general">
      <div ref={inicioRef} id="inicio" className="seccionInicio"></div>
      <h1 id="titulo">Bienvenido a mi web  !  Soy Cristian </h1>
      <h1 id="titulo2">Bienvenido a mi web </h1>
      <div id="linea-separadora1"></div>
      <div className="contenedor-flex">
     
      <div id="subcontenedor0">
        <div id="subcontenedor1">
          <p>
          Me presento, soy Cristian, un desarrollador multiplataforma, licenciado en ello y además con amplia formación y conocimientos en diseño e ilustración que he ido consiguiendo durante estos más de 5 años de experiencia y constante aprendizaje. Me gusta ser autodidacta, así cualquier reto para mí lo veo como una oportunidad y crecimiento.
          </p>
          </div>
          <div id="subcontenedor2">
          <p>
          Entre mis cualidades a destacar diría que soy muy "focus", me centro en una cosa y hasta que no la consigo, es muy posible que ni pare para comer. Combino creatividad y originalidad en el desarrollo, algo que se está perdiendo con el desarrollo de nuevas I.A. Me suelo decantar por las cosas simples, elegantes pero sobre todo sin perder funcionalidad.
          </p>
        </div>
        
        </div>
        <img id='imagenPortada' src={imagenPortada} alt='foto profesioanl Cristian' />
        
          
      </div>
      <div id="carousel">
            <Carousel></Carousel>
          </div>
       <br/>
       
     <div id="linea-separadora2"></div>
     </div>
      <div className="contenedor-flex">
        <TimeLine></TimeLine>
      </div>
   
      
     
      
    </>
  );
};
export default Inicio;