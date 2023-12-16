import React, { useState } from "react";
import "./css/Galeria.css";
import imagen1 from "./assets/galeria/blackJack.png";
import gif1 from "./assets/galeria/blackJack.gif";
import imagen2 from "./assets/galeria/bolaMagica.png";
import gif2 from "./assets/galeria/bolaMagica.gif";
import imagen3 from "./assets/galeria/weatherApp.png";
import gif3 from "./assets/galeria/weatherApp.gif";


import imagen4 from "./assets/galeria/netflix.png";
//import gif4 from "./assets/galeria/netflix.gif";
import imagen5 from "./assets/galeria/landingPage.png";
//import gif5 from "./assets/galeria/landingPage.gif";
import imagen6 from "./assets/galeria/catBombers.png";
//import gif6 from "./assets/galeria/catBombers.gif";
import imagen7 from "./assets/galeria/goodAndGo.png";
//import gif7 from "./assets/galeria/goodAndGo.gif";

import imagenButton1 from "./assets/galeria/iconoButton1.png";
import imagenButton2 from "./assets/galeria/iconoButton2.png";
import imagenButton3 from "./assets/galeria/iconoButton3.png";

export const Galeria = () => {
  const worksArray = [
    { id: 'blackJack', category: "frontend", src: imagen1, tecnology:'Figma,Flutter', describe:'LoremIpsum' },
    { id: 'bolaMagica', category: "frontend", src: imagen2 },
    { id: 'weatherApp', category: "frontend", src: imagen3 },
    { id: 'netflix', category: "frontend", src: imagen4 },
    { id: 'landingPage', category: "frontend", src: imagen5 },
    { id: 'catBombers', category: "design", src: imagen6 },
    { id: 'goodAndGo', category: "design", src: imagen7 },
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
            Cerrar
          </button>
          <img
            style={{ width: "150%", height: "150%" }}
            src={require("./assets/galeria/"+filteredWorksforCategory[selectedImageIndex].id+".gif")}
            alt={`Imagen ${filteredWorksforCategory[selectedImageIndex].id}`}
          />
          
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
