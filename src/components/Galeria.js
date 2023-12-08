import React, { useState } from "react";
import "./css/Galeria.css";
import imagen1 from "./assets/galeria/galeria01.png";
import imagen2 from "./assets/galeria/galeria02.png";
import imagen3 from "./assets/galeria/galeria03.png";
import imagen4 from "./assets/galeria/galeria04.png";

export const Galeria = () => {
  const images = [
    { id: 1, category: "display", src: imagen1 },
    { id: 2, category: "frontend", src: imagen2 },
    { id: 3, category: "display", src: imagen3 },
    { id: 4, category: "frontend", src: imagen4 },
  ];

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
  };

  const filteredImages =
  categoryImages.category === "all"
      ? images
      : images.filter((img) => img.category === categoryImages.category);

  return (
    <div id='trabajos'>
      <button
        onClick={() => handleStatesButtonClick("all")}
        disabled={buttonStates.all}
      >
        Mostrar Todo
      </button>
      <button
        onClick={() => handleStatesButtonClick("display")}
        disabled={buttonStates.display}
      >
        Mostrar Display
      </button>
      <button
        onClick={() => handleStatesButtonClick("frontend")}
        disabled={buttonStates.frontend}
      >
        Mostrar Frontend
      </button>

      <div
        className={`image-container`}
      >
        {filteredImages.map((image) => (
          <img className='imagenAnimation'key={image.id} src={image.src} alt={`Imagen ${image.id}`} />
        ))}
      </div>
    </div>
  );
};
export default Galeria;
