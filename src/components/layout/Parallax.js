import React from "react";
import "../css/Parallax.css";
import { Parallax } from "react-parallax";

import image1 from "../assets/parallax/fotoParallax01.png";
import image2 from "../assets/parallax/fotoParallax02.png";
import image3 from "../assets/parallax/fotoParallax03.png";
import image4 from "../assets/parallax/fotoParallax04.png";
import image5 from "../assets/parallax/fotoParallax05.png";


export function ModuleParallax() {
return (
<div className="parallax">
  
<Parallax bgImage={image5} strength={200}>
<div style={{ height: "35vh" }}>
</div>
</Parallax>

<Parallax bgImage={image1} strength={100}>
<div style={{ height: "65vh" }}>
</div>
</Parallax>

<Parallax bgImage={image2} strength={200}>
<div style={{ height: "100vh" }}>
{/*<div style={insideStyles}> CV</div>*/}
</div>
</Parallax>

<Parallax bgImage={image3} strength={200}>
<div style={{ height: "100vh" }}>
</div>
</Parallax>

<Parallax bgImage={image4} strength={200}>
<div style={{ height: "100vh" }}>
</div>
</Parallax>



</div>

);
}
