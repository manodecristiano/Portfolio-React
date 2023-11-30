import React, { useState } from 'react';
import './css/Galeria.css';
import imagen1 from './assets/galeria/galeria01.png';
import imagen2 from './assets/galeria/galeria02.png';
import imagen3 from './assets/galeria/galeria03.png';
import imagen4 from './assets/galeria/galeria04.png';

export const Galeria = () => {
  const [state, setState] = useState({
    category: 'all',
    isVisible: false,
  });

  const handleButtonClick = (newCategory) => {
    setState({
      ...state,
      isVisible: !state.isVisible,
      category: newCategory || state.category,
    });
  };

  const images = [
    { id: 1, category: 'display', src: imagen1 },
    { id: 2, category: 'frontend', src: imagen2 },
    { id: 3, category: 'display', src: imagen3 },
    { id: 4, category: 'frontend', src: imagen4 },
  ];

  const filteredImages =
    state.category === 'all' ? images : images.filter(
      (img) => img.category === state.category);

  return (
    <div>
   
      <button onClick={() => handleButtonClick('all')}>Mostrar Todo</button>
      <button onClick={() => handleButtonClick('display')}>Mostrar Display</button>
      <button onClick={() => handleButtonClick('frontend')}>Mostrar Frontend</button>

      <div className={`image-container ${state.isVisible ? 'visible' : ''}`}>
        {filteredImages.map((image) => (
          <img key={image.id} src={image.src} alt={`Imagen ${image.id}`} />
        ))}
      </div>
    </div>
  );
};
