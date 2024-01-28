import React from "react";
import { Parallax } from "react-parallax";
import "../css/Parallax.css";

import image5 from "../assets/parallax/fotoParallax05.png";
import image2 from "../assets/parallax/fotoParallax02.png";
import image3 from "../assets/parallax/fotoParallax03.png";
import image6 from "../assets/parallax/fotoParallax06.png";
import image7 from "../assets/parallax/fotoParallax07.png";

export function ModuleParallax() {
  const parallaxItems = [
    { bgImage: image5, strength: 200, height: "100vh" },
    { bgImage: image2, strength: 200, height: "100vh" },
    { bgImage: image3, strength: 200, height: "100vh" },
    { bgImage: image6, strength: 200, height: "100vh" },
    { bgImage: image7, strength: 200, height: "auto" },
  ];

  return (
    <>
      <div className="parallax">
        {parallaxItems.map((item, index) => (
          <Parallax key={index} bgImage={item.bgImage} strength={item.strength}>
            <div style={{ height: item.height }}></div>
          </Parallax>
        ))}
      </div>
    </>
  );
}

