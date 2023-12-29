import React from "react";
import "./css/Servicios.css";
import image1 from "./assets/servicios/internet.png";
import image2 from "./assets/servicios/logo-design.png";
import image3 from "./assets/servicios/phone.png";

export const Servicios = () => {
  return (
    <>
      <h2 id="tituloServicio">Servicios</h2>

      <div className="contenedor-flex">
        <div className="subcontenedorServicios">
          <div id="linea-separadora"></div>
          <h2>Páginas Webs</h2>
          <div className="linea-separadora"></div>
          <p>
            Desarrollo tu web y mejoro su posicionamiento web. Mi servicio de
            creación de páginas web ofrece diseño innovador, funcionalidad
            avanzado y una presencia en línea que destaca. Desde sitios
            corporativos hasta portafolios personales, creo la plataforma
            perfecta para tu éxito en internet.
          </p>
          <img src={image1} alt="Descripción de la imagen" />
        </div>

        <div id='contenedorUI'className="subcontenedorServicios">
          <h2>Diseño UI </h2>
          <div className="linea-separadora"></div>
          <p>
            Potencio tu marca con diseño de interfaz y experiencia de usuario
            excepcionales. Mi servicio de UI/UX transforma conceptos en
            interfaces intuitivas y estéticamente atractivas, elevando la
            conexión emocional con tus usuarios.
          </p>
          <img src={image2} alt="Descripción de la imagen" />
        </div>

        <div id='contenedorDEV'className="subcontenedorServicios">
          <h2>Dev Apps </h2>
          <div className="linea-separadora"></div>
          <p>
            Convierto tus ideas en aplicaciones impactantes. Mi servicio de
            desarrollo de aplicaciones ofrece soluciones personalizadas,
            funcionalidad avanzada y una experiencia de usuario excepcional para
            impulsar tu presencia móvil.
          </p>
          <img src={image3} alt="Descripción de la imagen" />
        </div>
      </div>
      <h2 id="linea-separadora3"> </h2>
    </>
  );
};
