import React from 'react'

export const Servicios = () => {
  return (
    <>
    <h2 className="titulo">Servicios</h2>
    <div className="contenedor-flex">
    
        {/* Subcontenedor 1: Texto y Foto */}
        <div className="subcontenedor">
          <h2>Subcontenedor con Texto y Foto</h2>
          <p>
              Leftmost column is placed for logo and main menu. After that is an
              image column. Right side column is a 100% full-width content.
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
              Leftmost column is placed for logo and main menu. After that is an
              image column. Right side column is a 100% full-width content.
            </p>
        </div>
      </div>

      </>
   
  )
}
