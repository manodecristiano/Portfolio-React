import React,  {  useEffect, useState} from "react";
import { Parallax } from "react-parallax";
import "../css/Parallax.css";

import image5 from "../assets/parallax/fotoParallax05.png";
import image2 from "../assets/parallax/fotoParallax02.png";
import image3 from "../assets/parallax/fotoParallax03.png";
import image6 from "../assets/parallax/fotoParallax06.png";
import image4 from "../assets/parallax/fotoParallax04.png";

export function ModuleParallax({alturaMaxima}) {


 
  const parallaxItems = [
    { bgImage: image5, strength: 300},
    { bgImage: image2, strength: 200},
    { bgImage: image3, strength: 200},
   // { bgImage: image6, strength: 200, height: "100vh" },
    { bgImage: image6, strength: 200,  },
  ];
  const alturaImagen = alturaMaxima / parallaxItems.length;




 
 
  return (
    
      <div className="parallax">
        {parallaxItems.map((item, index) => (
          <Parallax key={index} bgImage={item.bgImage} strength={item.strength}>
            <div style={{ height: `${alturaImagen}px` }}></div>
          </Parallax>
        ))}
      </div>
    
  );
}

