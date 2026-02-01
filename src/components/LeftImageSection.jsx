import React, { useEffect, useState } from "react";

import image2 from "../assets/ghoda2.png";
import image3 from "../assets/mandap.png";
import image4 from "../assets/mandap2.png";
const imageList = [ image2, image3, image4];

const LeftImageSection = ({ altText = "Matrimony" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageList.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hidden md:block w-full h-full rounded-3xl overflow-hidden">
      <img
        src={imageList[currentIndex]}
        alt={altText}
        className="w-full h-full object-cover rounded-3xl transition-all duration-1000 ease-in-out"
      />
    </div>
  );
};

export default LeftImageSection;
