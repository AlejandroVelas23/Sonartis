import React from "react";

interface BannerProps {
  backgroundImage: string;
  text: string;
}

const Banner: React.FC<BannerProps> = ({ backgroundImage, text }) => {
  return (
    <div
      className="relative flex items-center justify-center text-center text-white h-[400px] sm:h-[500px] lg:h-[600px] bg-cover bg-center rounded shadow-lg"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/50 rounded"></div>
      <h1 className="relative z-10 text-4xl font-bold max-w-3xl mx-auto">
        {text}
      </h1>
    </div>
  );
};

export default Banner;
