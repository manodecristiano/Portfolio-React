import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/Inicio.css";
import image1 from "./assets/carousel/01-Icono.png";
import image2 from "./assets/carousel/02-Icono.png";
import image3 from "./assets/carousel/03-Icono.png";
import image4 from "./assets/carousel/04-Icono.png";
import image5 from "./assets/carousel/05-Icono.png";
import image6 from "./assets/carousel/06-Icono.png";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1, 
    pauseOnHover: false, 
    easing: "ease-in-out",
  };

  return (
    <div id="carousel-container">
      <Slider {...settings} className="custom-carousel">
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
        <div>
        <img src={image5} alt="icono Bootstrap" />
        </div>
        <div>
        <img src={image6} alt="icono Wordpress" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
