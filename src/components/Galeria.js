import React, { useState } from "react";
import "./css/Galeria.css";
import imagen1 from "./assets/galeria/galeria01.png";
import imagen2 from "./assets/galeria/galeria02.png";
import imagen3 from "./assets/galeria/galeria03.png";
import imagen4 from "./assets/galeria/galeria04.png";
import imagen5 from "./assets/galeria/galeria05.png";
import imagen6 from "./assets/galeria/iconoButton1.png";
import imagen7 from "./assets/galeria/iconoButton2.png";
import imagen8 from "./assets/galeria/iconoButton3.png";


export const Galeria = () => {
  const images = [
    { id: 1, category: "design", src: imagen1 },
    { id: 2, category: "frontend", src: imagen2 },
    { id: 3, category: "design", src: imagen3 },
    { id: 4, category: "frontend", src: imagen4 },
    { id: 5, category: "frontend", src: imagen5 },
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

  const filteredImages =
  categoryImages.category === "all"
      ? images
      : images.filter((img) => img.category === categoryImages.category);

  return (
    <>
    <div id='trabajos'>
      <div id="nav-galeria">
      <button
        onClick={() => handleStatesButtonClick("all")}
        disabled={buttonStates.all}
      >
        <img className='icono' src={imagen6} alt='icono de todo' />
        <p>Todo</p>
      </button>
      <button
        onClick={() => handleStatesButtonClick("design")}
        disabled={buttonStates.design}

      >  <img className='icono' src={imagen7} alt='icono de diseño' />
      <p>Diseño</p>
         
      </button>
      <button
        onClick={() => handleStatesButtonClick("frontend")}
        disabled={buttonStates.frontend}
      >
          <img className='icono' src={imagen8} alt='icono de frontend' />
        <p>Frontend</p>
      </button>
      </div>
      <div
        className={`image-container`}
      >
        {filteredImages.map((image) => (
          <img className={`imageAnimation${animationOrder === "down" ? "2" : "1"}`} style={{ animationDelay: `${image.id * 0.1}s` }} key={image.id} src={image.src} alt={`Imagen ${image.id}`} />
        ))}
      </div>
    </div>
    </>
  );
};
export default Galeria;