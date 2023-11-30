import React, { useState } from 'react';
import "./css/Galeria.css";
import imagen1 from './assets/galeria/galeria01.png';
import imagen2 from './assets/galeria/galeria02.png';
import imagen3 from './assets/galeria/galeria03.png';
import imagen4 from './assets/galeria/galeria04.png';

export const Galeria = () => {
  const [category, setCategory] = useState('all'); // Estado para la categoría seleccionada
  const [isVisible, setIsVisible] = useState(false);

  const handleButtonClick = () => {
    setIsVisible(!isVisible);
  };

  const images = [
    { id: 1, category: 'display', src:  imagen1},
    { id: 2, category: 'frontend', src: imagen2 },
    { id: 3, category: 'display', src:  imagen3 },
    { id: 4, category: 'frontend', src: imagen4 },
  ];

  // Filtrar imágenes basadas en la categoría seleccionada
 const filteredImages = category === 'all' ? images : images.filter(img => img.category === category);

  return (
    <div>
      <button onClick={handleButtonClick}>VeroNo</button>

      <button onClick={() => setCategory('all')}>Mostrar Todo</button>
      <button onClick={() => setCategory('display')}>Mostrar Display</button>
      <button onClick={() => setCategory('frontend')}>Mostrar Frontend</button>
     
      <div className={`image-container ${isVisible ? 'visible' : ''}`}>
     
        {filteredImages.map((image) => (
          <img key={image.id} src={image.src} alt={`Imagen ${image.id}`} />
        ))}
      </div>
    </div>
  );
};

 