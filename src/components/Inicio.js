import React from "react";
import "./css/Inicio.css";
import TimeLine from './TimeLine';



<link href="https://fonts.googleapis.com/css2?family=Abel&display=swap" rel="stylesheet"></link>
export const Inicio = () => {
  return (
    <>
      <h2 id="titulo">Bienvenido a mi web profesional</h2>
      <div className="contenedor-flex">
        {/* Subcontenedor 1: Texto y Foto */}
        <div className="subcontenedor">
          
          <p>
            Licenciado en Desarrollo App Multiplataforma e Ilustración Diseño.
            
            Buen comunicador y creador de buen ambiente laboral. Con afán de
            saber cada día más. Una persona extrovertida y divertida.
            Auto-exigente y responsable.
          </p>
        
        </div>

        {/* Subcontenedor 2: Solo Texto */}
        <div className="subcontenedor">
      
          <p>
          Combino creatividad y originalidad con el desarrollo.
          Valoro muy positivamente el trabajo  Full remote. 
       
          También me gusta el formato híbrido.
          </p>
        </div>
     
      </div>
      <div className="contenedor-flex">
       
    <img
            src="ruta-de-tu-imagen.jpg" // Agrega la ruta de tu imagen
            alt="Descripción de la imagen"
          />
<TimeLine></TimeLine>
</div>
    </>
  );
};
