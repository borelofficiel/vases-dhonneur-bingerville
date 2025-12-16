import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Accueil.css";

// Import des images depuis le dossier assets
import Img1 from "../assets/FONDS/FOND1.jpeg";
import Img2 from "../assets/FONDS/FOND4.jpeg";
import Img3 from "../assets/FONDS/FOND3.jpeg";
import Img4 from "../assets/FONDS/FOND2.jpeg";
import Img5 from "../assets/FONDS/FOND5.jpeg";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function HeroSlider() {
  // Tableau des slides avec titre, description et texte du bouton
  const slides = [
    {
      image: Img1,
      title: <>Bienvenue à <br /> Vases d'Honneur Bingerville</>,
      description: "Un lieu d'adoration et de communion de toutes les églises vases d'honneur Bingerville.",
      btnText: "Rejoignez-nous",
      btnLink: "/offrande",
    },
    {
      image: Img2,
      title: "Joignez-vous à nos activités",
      description: "Participez aux événements de notre église.",
      btnText: "Participer à un événement",
      btnLink: "/evenements",
    },
    {
      image: Img3,
      title: "Soutenez l'œuvre de Dieu",
      description: "Vos dîmes et offrandes font la différence.",
      btnText: "Soutenir l'œuvre",
      btnLink: "/soutien",
    },
    {
      image: Img4,
      title: "Famille et communauté",
      description: "Vivez la foi avec nous chaque semaine.",
      btnText: "Rejoindre la communauté",
      btnLink: "/communaute",
    },
    {
      image: Img5,
      title: "Partagez l'amour du Christ",
      description: "Transformez des vies autour de vous.",
      btnText: "Partager l'amour",
      btnLink: "/partager",
    },
  ];

  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // Défilement automatique toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <section className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={index === current ? "slide active" : "slide"}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          {index === current && (
            <div className="slide-content">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
              <Link to={slide.btnLink} className="btn-participer">
                {slide.btnText}
              </Link>
            </div>
          )}
        </div>
      ))}

      {/* Flèches de navigation */}
      <FaArrowLeft className="arrow left" onClick={prevSlide} />
      <FaArrowRight className="arrow right" onClick={nextSlide} />
    </section>
  );
}

export default HeroSlider;
