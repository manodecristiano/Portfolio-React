import React, { useState } from "react";
import "./css/Galeria.css";
import imagen1 from "./assets/galeria/blackJack.png";
//import gif1 from "./assets/galeria/blackJack.gif";
import imagen2 from "./assets/galeria/bolaMagica.png";
//import gif2 from "./assets/galeria/bolaMagica.gif";
import imagen3 from "./assets/galeria/weatherApp.png";
//import gif3 from "./assets/galeria/weatherApp.gif";
import imagen4 from "./assets/galeria/netflix.png";
//import gif4 from "./assets/galeria/netflix.gif";
import imagen5 from "./assets/galeria/landingPage.png";
//import gif5 from "./assets/galeria/landingPage.gif";
import imagen6 from "./assets/galeria/catBombers.png";
//import gif6 from "./assets/galeria/catBombers.gif";
import imagen7 from "./assets/galeria/goodAndGo.png";
//import gif7 from "./assets/galeria/goodAndGo.gif";
import imagen8 from "./assets/galeria/grandvoyage.png";
//import gif8 from "./assets/galeria/grandvoyage.gif";
import imagen9 from "./assets/galeria/deliverymedia.png";
//import gif9 from "./assets/galeria/deliverymedia.gif";

import imagenButton1 from "./assets/galeria/iconoButton1.png";
import imagenButton2 from "./assets/galeria/iconoButton2.png";
import imagenButton3 from "./assets/galeria/iconoButton3.png";

export const Galeria = () => {
  const worksArray = [
    { id: 'blackJack', category: "frontend", src: imagen1, tecnology:'Figma, Javascript, HTML, CSS3', describe:'Proyecto de una aplicación web del juego 21 Blackjack. Ofrece una emocionante experiencia del juego. Con un diseño simple pero con toda la lógica del juego real, los usuarios pueden disfrutar de partidas auténticas y de ese modo practicar estrategias con la mecánica de reglas realistas.' },
    { id: 'bolaMagica', category: "frontend", src: imagen2,tecnology:'Javascript, HTML, CSS3', describe:'Desarrollo de una apliación web única que ofrece respuestas divertidas y misteriosas a través de una bola mágica virtual. Los usuarios pueden realizar preguntas sobre cualquier tema y recibir respuestas enigmáticas, proporcionando entretenimiento y un toque de magia a consultas diarias.' },
    { id: 'weatherApp', category: "frontend", src: imagen3, tecnology:'React, HTML, CSS3', describe:'Desarrollo de una apliación web meteorológica que brinda información precisa y fácil de entender sobre el clima gracias a consultas a una API RESTful. Los usuarios pueden consultar el tiempo y demás condiciones metereológicas de una ciudad, simplemente poniendo el nombre de la misma.' },
    { id: 'netflix', category: "frontend", src: imagen4, tecnology:'React, HTML, Taildwind', describe:'Proyecto de una aplicación web de una réplica de Netflix. Ofrece una extensa biblioteca de contenido multimedia mediante consultas a una API RESTful, con una interfaz intuitiva y recomendaciones personalizadas. Centrandome en dar a los usuarios una experiencia cinematográfica excepcional, recreando el encanto de Netflix con un toque único y atractivo.' },
    { id: 'landingPage', category: "frontend", src: imagen5,tecnology:'HTML, Javascript, Bootstrap', describe:'Desarrollo de una landing page completamente responsive, garantizando una experiencia fluida en cualquier dispositivo. La prioridad fue crear un diseño atractivo y funcional que se adapte perfectamente a pantallas de diferentes tamaños, maximizando la interacción del usuario y optimizando la efectividad de la página en todos los contextos.' },
    { id: 'catBombers', category: "design", src: imagen6,tecnology:'Figma, Flutter, Dart', describe:'Aplicación móvil integral para la preparación de oposiciones de bomberos. Ofrece contenido didáctico, simulacros de exámenes, seguimiento de progreso y asesoramiento personalizado. La plataforma optimiza el estudio, maximizando las posibilidades de éxito en el exigente proceso de selección para convertirse en bombero profesional.' },
    { id: 'goodAndGo', category: "design", src: imagen7,tecnology:'Figma, Photoshop, Ilustrator', describe:'Diseño de Aplicación móvil de pedido de comida a domicilo. Buscando simplificar la experiencia de usuario. Con un diseño intuitivo, amplio menú, seguimiento en tiempo real y opciones de pago fácil' },
    { id: 'grandvoyage', category: "frontend", src: imagen8,tecnology:'Javascript, HTML, CSS3, Photoshop', describe:'Proyecto de actualización y mejora de la web de GrandVoyage, con un enfoque centrado en la experiencia de usuario, con mejoras significativas en la interfaz, la navegación y la velocidad del sitio. Además de dar un toque más actualizado ' },
    { id: 'deliverymedia', category: "design", src: imagen9,tecnology:'Wordpress, Photoshop, Ilustrator', describe:'Proyecto de la web de DeliveryMedia desarrollada en WordPress. Se enfoca en una renovación completa para brindar una experiencia optimizada. Con diseño responsivo y mejoras en la usabilidad, esta empresa busca destacar con contenido fresco y funcionalidades mejoradas, consolidando su presencia en línea de manera vibrante y efectiva.' },

  ];

  const [animationOrder, setAnimationOrder] = useState("down");

  const [categoryImages, setCategoryImages] = useState({
    category: "all",
  });

  const [buttonStates, setButtonStates] = useState({
    all: false,
    display: false,
    frontend: false,
  });

  const handleStatesButtonClick = (Category) => {
    setButtonStates({
      all: false,
      display: false,
      frontend: false,
      [Category]: true,
    });
    setCategoryImages({
      ...categoryImages,
      category: Category || categoryImages.category,
    });
    setAnimationOrder((prevOrder) => (prevOrder === "down" ? "up" : "down"));
  };

  const filteredWorksforCategory =
    categoryImages.category === "all"
      ? worksArray
      : worksArray.filter((img) => img.category === categoryImages.category);

  const [showPopup, setShowPopup] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleImageClick = (index) => {
    setShowPopup(true);
    setSelectedImageIndex(index);
  };

  return (
    <>
      {showPopup && (
        
        <div className="popup">
          <button id="buttonCerrar" onClick={() => setShowPopup(false)}>
            X
          </button>
          <img
            style={{ width: "150%", height: "150%" }}
            src={require("./assets/galeria/"+filteredWorksforCategory[selectedImageIndex].id+".gif")}
            alt={`Imagen ${filteredWorksforCategory[selectedImageIndex].id}`}
          />
          <div className="textoImagen">
           
          <p>{filteredWorksforCategory[selectedImageIndex].describe}</p>
          <h4>{filteredWorksforCategory[selectedImageIndex].tecnology}</h4>
         {filteredWorksforCategory[selectedImageIndex].id === 'grandvoyage'?(
          <a href=" https://manodecristiano.github.io/Landing_Page_Home_GrandVoyage/" target="_blank" rel="noreferrer">Web en GitHubPage</a>
         ):(
          <a href="https://github.com/manodecristiano" target="_blank"rel="noreferrer">github.com/cristian</a>
          )}
         
        </div>
        </div>
      )}

      <div id="trabajos">
        <div id="nav-galeria">


          <button
            onClick={() => handleStatesButtonClick("all")}
            disabled={buttonStates.all}
          >
            <img className="icono" src={imagenButton1} alt="icono de todo" />
            <p>Todo</p>
          </button>


          <button
            onClick={() => handleStatesButtonClick("design")}
            disabled={buttonStates.design}
          >
            <img className="icono" src={imagenButton2} alt="icono de diseño" />
            <p>Diseño</p>
          </button>


          <button
            onClick={() => handleStatesButtonClick("frontend")}
            disabled={buttonStates.frontend}
          >
            <img className="icono" src={imagenButton3} alt="icono de frontend" />
            <p>Frontend</p>
          </button>
        </div>


        <div className={`image-container`}>
          {filteredWorksforCategory.map((image, index) => (
            <img
              className={`imageAnimation${
                animationOrder === "down" ? "2" : "1"
              }`}
              key={image.id}
              src={image.src}
              style={{ width: "200px", height: "200px" }}
              alt={`Imagen ${image.id}`}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Galeria;
