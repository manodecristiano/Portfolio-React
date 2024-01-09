import React from 'react';
import "./css/Contacto.css";


export const  Contacto = () => {


    const handleDownloadCurriculum = () => {
      // URL del archivo PDF
      const pdfUrl = process.env.PUBLIC_URL + '/Cristian_CV_2023.pdf';

      // Nombre del archivo para la descarga
      const fileName = 'Cristian_CV_2023.pdf';
  
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
  

  return (
  
    <div id="contacto-container">

     

      {/* Redes Sociales */}
      <div className="redes-sociales">


        <a className='iconosRRSS' href="mailto:cristian.carre.online@gmail.com">
        email
        </a>
        <button className='iconosRRSS' onClick={handleDownloadCurriculum}>
         CV
        </button>
        <a className='iconosRRSS' href="https://www.linkedin.com/in/cristiancarre/" target="_blank" rel="noopener noreferrer">
         linkedin
        </a>

      </div>

    </div>

  
  );
};

