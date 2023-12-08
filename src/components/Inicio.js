import React, {useRef} from "react";
import "./css/Inicio.css";
import TimeLine from "./TimeLine";
import imagenPortada from "./assets/Cristian.jpeg";


export const Inicio = () => {
  const inicioRef = useRef(null);
  return (
    <>
      <div ref={inicioRef} id="inicio" className="seccionInicio"></div>
      <h1 id="titulo">Bienvenido! Soy Cristian</h1>
      <div className="linea-separadora"></div>
      <div className="contenedor-flex">
        {/* Subcontenedor 1: Texto y Foto */}
        <div className="subcontenedor1">
          <p>
           Soy Desarrollador <strong>Web</strong> y Aplicaciones multiplataforma con amplios conocimientos
            en <strong>diseño </strong>  
           e ilustración.<br/>
            Desarrollo simple, intuitivo y responsive.
           
          </p>
        </div>
        <img id='imagenPortada' src={imagenPortada} alt='foto profesioanl Cristian' />
      </div>
 <div className="contenedor-flex"></div>
        {/* Subcontenedor 2: Solo Texto */}
        <div className="subcontenedor2">
          <p>
            Combino creatividad y originalidad con el desarrollo. Valoro muy
            positivamente el trabajo Full remote. También me gusta el formato
            híbrido.
          </p>
          <p>
          Destacado comunicador y generador de un entorno laboral
            positivo. Apasionado por el aprendizaje continuo, me caracterizo por
            mi exigencia conmigo mismo, extroversión y sentido del humor.
            Autodidacta, y comprometido con la responsabilidad en cada tarea.
            </p>
        </div>
      

      
      <div className="contenedor-flex">
        <TimeLine></TimeLine>
      </div>
    </>
  );
};
export default Inicio;