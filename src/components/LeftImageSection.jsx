import React, { useEffect, useState } from "react";
import image from "../assets/auth/1.png";
import image2 from "../assets/auth/2.png";
import image3 from "../assets/auth/3.png";
import image4 from "../assets/auth/4.png";
import image5 from "../assets/auth/5.png";
const imageList = [image, image2, image3, image4, image5];

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
