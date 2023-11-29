import React from "react";
import "../css/Parallax.css";
import { Parallax } from "react-parallax";
import image1 from "../assets/fotoCristian01.jpeg";
import image2 from "../assets/fotoCristian02.jpeg";
import image3 from "../assets/fotoCristian03.jpeg";
import image4 from "../assets/fotoCristian04.jpeg";
import image5 from "../assets/fotoCristian05.jpeg";


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
<Parallax bgImage={image1} strength={400}>
<div style={{ height: "100vh" }}>
<div style={insideStyles}> CV</div>
</div>
</Parallax>
</div>
);
}
