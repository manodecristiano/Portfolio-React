import React from 'react';
import "./css/Contacto.css";
export const  Contacto = () => {

  
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar lógica para enviar el correo electrónico
    console.log('Correo electrónico enviado');
  };

  return (
    <div id='contacto'className="contacto-container">
      {/* Formulario de Correo Electrónico */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Tu Correo Electrónico:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="mensaje">Mensaje:</label>
        <textarea id="mensaje" name="mensaje" rows="4" required />

        <button type="submit">Enviar Correo</button>
      </form>

      {/* Redes Sociales */}
      <div className="redes-sociales">
        <a href="mailto:tuemail@example.com">
    mail
        </a>
        <a href="https://twitter.com/tuusuario" target="_blank" rel="noopener noreferrer">
     twiter 
        </a>
        <a href="https://www.linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer">
         linkedin
        </a>
      </div>
    </div>
  );
};

