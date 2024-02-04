import React from 'react';
import "./css/Contacto.css";
import Typed from "typed.js";


export const  Contacto = () => {


    const handleDownloadCurriculum = () => {
      // URL del archivo PDF
      const pdfUrl = process.env.PUBLIC_URL + '/Cristian_CV_Frontend_2024.pdf';

      // Nombre del archivo para la descarga
      const fileName = 'Cristian_CV_Frontend_2024.pdf';
  
      // Crear un enlace temporal
      const link = document.createElement('a');
  
      // Configurar el enlace con la URL del PDF y el nombre de archivo
      link.href = pdfUrl;
      link.download = fileName;
  
      // Agregar el enlace al DOM y hacer clic en él
      document.body.appendChild(link);
      link.click();
  
      // Eliminar el enlace del DOM después de la descarga
      document.body.removeChild(link);
    };
  
    const escrituraAutomatica = React.useRef(null);

    React.useEffect(() => {
      const typed = new Typed(escrituraAutomatica.current, {
        strings: ["Programador", "Frontend", "Diseñador", "Maquetador", "Web", "Móvil"],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1500,
        showCursor: true,
        loop: true
      });
  
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []);
  
  return (
  
    <div id="contacto-container">

     

      {/* Redes Sociales */}
      <div id="redes-sociales">


        <a className='iconosRRSS' href="mailto:cristian.carre.online@gmail.com">
        email
        </a>
        <button className='iconosRRSS' onClick={handleDownloadCurriculum}>
         CV
        </button>
        <a className='iconosRRSS' href="https://www.linkedin.com/in/cristiancarre/" target="_blank" rel="noopener noreferrer">
         linkedin
        </a>
        <span id='escrituraAutomatica' ref={escrituraAutomatica} />
      </div>

    </div>

  
  );
};

