import React from "react";
import "../css/Parallax.css";
import { Parallax } from "react-parallax";
import image0 from "../assets/foto000.png";
import image1 from "../assets/fotoCristian01.png";
import image2 from "../assets/fotoCristian00.jpg";
import image3 from "../assets/fotoCristian03.jpeg";
import image4 from "../assets/fotoCristian04.jpeg";
import image5 from "../assets/fotoCristian02.jpeg";


const insideStyles = { 
  background: "#fff", 
  padding: 20,
position: "absolute", top: "50%",
left: "50%",
transform: "traslate (-50%, -50%)",
}

export function ModuleParallax() {
return (
<div className="parallax">
  
<Parallax bgImage={image0} strength={200}>
<div style={{ height: "89vh" }}>
</div>
</Parallax>

<Parallax bgImage={image1} strength={200}>
<div style={{ height: "100vh" }}>
</div>
</Parallax>


<Parallax bgImage={image2} strength={200}>
<div style={{ height: "80vh" }}>
<div style={insideStyles}> CV</div>
</div>
</Parallax>

<Parallax bgImage={image3} strength={200}>
<div style={{ height: "80vh" }}>

</div>
</Parallax>

<Parallax bgImage={image4} strength={200}>
<div style={{ height: "80vh" }}>

</div>
</Parallax>

<Parallax bgImage={image5} strength={200}>
<div style={{ height: "80vh" }}>

</div>
</Parallax>
</div>
);
}
