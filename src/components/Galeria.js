import React, { useState } from "react";
import "./css/Galeria.css";
import imagen1 from "./assets/galeria/galeria01.png";
import imagen2 from "./assets/galeria/galeria02.png";
import imagen3 from "./assets/galeria/galeria03.png";
import imagen4 from "./assets/galeria/galeria04.png";
import imagen5 from "./assets/galeria/galeria05.png";
import imagen9 from "./assets/galeria/galeria01.gif";
import imagen6 from "./assets/galeria/iconoButton1.png";
import imagen7 from "./assets/galeria/iconoButton2.png";
import imagen8 from "./assets/galeria/iconoButton3.png";

export const Galeria = () => {
  const worksArray = [
    { id: 'galeria01', category: "design", src: imagen1, tecnology:'Figma,Flutter', describe:'LoremIpsum' },
    { id: 'galeria02', category: "frontend", src: imagen2 },
    { id: 'galeria03', category: "design", src: imagen3 },
    { id: 'galeria04', category: "frontend", src: imagen4 },
    { id: 'galeria05', category: "frontend", src: imagen5 },
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
 {console.log(filteredWorksforCategory[selectedImageIndex].id+".gif")}
      <div id="trabajos">
        <div id="nav-galeria">


          <button
            onClick={() => handleStatesButtonClick("all")}
            disabled={buttonStates.all}
          >
            <img className="icono" src={imagen6} alt="icono de todo" />
            <p>Todo</p>
          </button>


          <button
            onClick={() => handleStatesButtonClick("design")}
            disabled={buttonStates.design}
          >
            <img className="icono" src={imagen7} alt="icono de diseño" />
            <p>Diseño</p>
          </button>


          <button
            onClick={() => handleStatesButtonClick("frontend")}
            disabled={buttonStates.frontend}
          >
            <img className="icono" src={imagen8} alt="icono de frontend" />
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
