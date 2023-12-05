import React from "react";
import "./css/Inicio.css";
import TimeLine from "./TimeLine";
import imagenPortada from "./assets/Cristian.jpeg";

<link
  href="https://fonts.googleapis.com/css2?family=Abel&display=swap"
  rel="stylesheet"
></link>;
export const Inicio = () => {
  return (
    <>
      <h2 id="titulo">Bienvenido a mi web profesional</h2>
      <div className="contenedor-flex">
        {/* Subcontenedor 1: Texto y Foto */}
        <div className="subcontenedor">
          <p>
            Hola que tal? Te cuento un poco sobre mi: <br/>
           Soy Cristian un  <strong>Licenciado 
            en Desarrollo de Aplicaciones Multiplataforma e Ilustración de
            Diseño.</strong>  <br/>Destacado comunicador y generador de un entorno laboral
            positivo. Apasionado por el aprendizaje continuo, me caracterizo por
            mi exigencia conmigo mismo, extroversión y sentido del humor.
            Autodidacta, y comprometido con la responsabilidad en cada tarea.
          </p>
        </div>
        <img id='imagenPortada' src={imagenPortada} alt='foto profesioanl Cristian' />
      </div>
 <div className="contenedor-flex"></div>
        {/* Subcontenedor 2: Solo Texto */}
        <div className="subcontenedor">
          <p>
            Combino creatividad y originalidad con el desarrollo. Valoro muy
            positivamente el trabajo Full remote. También me gusta el formato
            híbrido.
          </p>
        </div>
      

      
      <div className="contenedor-flex">
        <TimeLine></TimeLine>
      </div>
    </>
  );
};
