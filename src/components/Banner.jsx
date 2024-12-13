import React from "react";
import PropTypes from "prop-types";

const Banner = ({ backgroundImage, text }) => {
  return (
    <div
      className="relative flex items-center justify-center text-center text-white h-[400px] sm:h-[500px] lg:h-[600px] bg-cover bg-center rounded shadow-lg"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Superposición transparente */}
      <div className="absolute inset-0 bg-black/50 rounded"></div>

      {/* Texto del banner */}
      <h1 className="relative z-10 text-4xl font-bold max-w-3xl mx-auto">
        {text}
      </h1>
    </div>
  );
};

// Validación de las propiedades usando PropTypes
Banner.propTypes = {
  backgroundImage: PropTypes.string.isRequired, // La imagen debe ser una URL de tipo string
  text: PropTypes.string.isRequired, // El texto debe ser una cadena
};

export default Banner;
