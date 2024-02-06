import React from "react";
import "./css/Servicios.css";
import image1 from "./assets/servicios/internet.png";
import image2 from "./assets/servicios/logo-design.png";
import image3 from "./assets/servicios/phone.png";

export const Servicios = () => {
  return (
    <>
      <h2 id="tituloServicio">Servicios</h2>

      <div id='containerServices'>


        <div className="sucontainerServices">
          <h2>Páginas Webs</h2>
          <div className="separator-line"></div>
          <p>
            Desarrollo tu web y mejoro su posicionamiento. Mi servicio de
            creación de páginas web ofrece un diseño y funcionalidad
            avanzada. Desde sitios corporativos hasta portfolios personales,
            usando desde código hasta CMS como Wordpress.
          </p>
          <img src={image1} alt="Descripción de la imagen" />
        </div>


        <div id='contenedorUI'className="sucontainerServices">
          <h2>Diseño UI </h2>
          <div className="separator-line"></div>
          <p>
            Potencio tu marca con un diseño de interfaz y experiencia de usuario
            excepcionales. Mi servicio de UI/UX transforma conceptos en
            interfaces intuitivas y estéticamente atractivas, elevando la
            conexión emocional con tus usuarios.
          </p>
          <img src={image2} alt="Descripción de la imagen" />
        </div>



        <div id='contenedorDEV'className="sucontainerServices">
          <h2>Dev Apps </h2>
          <div className="separator-line"></div>
          <p>
            Convierto tus ideas en aplicaciones impactantes(Iphone y Android). Mi servicio de
            desarrollo de aplicaciones ofrece soluciones personalizadas,
            funcionalidad avanzada y una experiencia de usuario excepcional para
            impulsar tu presencia móvil.
          </p>
          <img src={image3} alt="Descripción de la imagen" />
        </div>
      </div>
      <div id="separator-line-FinalServices"></div>
    </>
  );
};
