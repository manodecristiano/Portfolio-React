import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/Carousel.css";
import image1 from "./assets/carousel/01-Icono.png";
import image2 from "./assets/carousel/02-Icono.png";
import image3 from "./assets/carousel/03-Icono.png";
import image4 from "./assets/carousel/04-Icono.png";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 200, 
    pauseOnHover: false, 
    easing: "ease-in-out", // Tipo de animación (desplazamiento suave)
  };

  return (
    <div id="carousel-container">
      <Slider {...settings}>
        <div>
          <img src={image1} alt="icono Javascript" />
        </div>
        <div>
        <img src={image2} alt="icono Flutter" />
        </div>
        <div>
        <img src={image3} alt="icono React" />
        </div>
        <div>
        <img src={image4} alt="icono Tailwind" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
