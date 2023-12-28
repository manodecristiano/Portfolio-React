import React, {useRef} from "react";
import "./css/Inicio.css";
import Carousel from "./Carousel";
import TimeLine from "./TimeLine";
import imagenPortada from "./assets/Cristian.jpeg";


export const Inicio = () => {
  const inicioRef = useRef(null);
  return (
    <>
      <div ref={inicioRef} id="inicio" className="seccionInicio"></div>
      <h1 id="titulo">Bienvenido a mi web  !  Soy Cristian </h1>
      <h1 id="titulo2">Bienvenido a mi web  !  </h1>
      <div className="linea-separadora"></div>
      <div className="contenedor-flex">
     
        <div id="subcontenedor0">
        <div className="subcontenedor1">
          <p>
           Soy un desarrollador <strong>Web</strong> licenciado en desarrollo de Aplicaciones multiplataforma, además complemento mi formación con amplios conocimientos
            en<strong> diseño</strong> e ilustración.
        
          </p>
          </div>
          <div className="subcontenedor2">
          <p>
            Combino creatividad y originalidad con el desarrollo. Valoro muy
            positivamente el desarrollo simple, intuitivo y responsive. Me decanto por las cosas simples, elegantes sin perder funcionalidad.
          </p>
        </div>
        
        </div>
        <img id='imagenPortada' src={imagenPortada} alt='foto profesioanl Cristian' />
        
      </div>
      <div id="carousel">
      <Carousel></Carousel>
      </div>
      
       <br/>
     <div className="linea-separadora2"></div>
      
      <div className="contenedor-flex">
        <TimeLine></TimeLine>
      </div>
      <div className="subcontenedor-separador">
         
        </div>
      
        <div className="linea-separadora"></div>
      
    </>
  );
};
export default Inicio;