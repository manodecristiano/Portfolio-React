import React from "react";
import "./css/Inicio.css";
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
          <img
            src="ruta-de-tu-imagen.jpg" // Agrega la ruta de tu imagen
            alt="Descripción de la imagen"
          />
        </div>

        {/* Subcontenedor 2: Solo Texto */}
        <div className="subcontenedor">
          <h2>Subcontenedor con Solo Texto</h2>
          <p>
          Combino creatividad y originalidad con el desarrollo.
          Valoro muy positivamente el trabajo  Full remote. Aunque también me gusta el formato híbrido.
          </p>
        </div>
      </div>
    </>
  );
};
