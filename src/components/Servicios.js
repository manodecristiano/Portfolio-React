import React from 'react';
import "./css/Servicios.css";

export const Servicios = () => {
  return (
    <>
    <h2 id="tituloServicio">Servicios</h2>
    
    <div className="contenedor-flex">
    
      
        <div className="subcontenedor1">
        <div id='linea-separadora'></div>
          <h2>Creación de páginas webs</h2>
          <div className='linea-separadora'></div>
          <p>
              Leftmost column is placed for logo and main menu. After that is an
              image column. Right side column is a 100% full-width content.
            </p>
          <img
            src="ruta-de-tu-imagen.jpg" // Agrega la ruta de tu imagen
            alt="Descripción de la imagen"
          />
        </div>

      
        <div className="subcontenedor1">
          <h2>Diseño UI </h2>
          <div className='linea-separadora'></div>
          <p>
              Leftmost column is placed for logo and main menu. After that is an
              image column. Right side column is a 100% full-width content.
            </p>
            <img
            src="ruta-de-tu-imagen.jpg" // Agrega la ruta de tu imagen
            alt="Descripción de la imagen"
          />
        </div>
      </div>
      <h2 id="tituloServicio"> </h2>
      </>
   
  )
}
