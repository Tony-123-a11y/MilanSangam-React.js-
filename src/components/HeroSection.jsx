import React from "react";
import banner1 from "../assets/Image 1.jfif";
import Form from "./Form";
import { FaLongArrowAltRight } from "react-icons/fa";
import { motion, spring } from "motion/react";

const HeroSection = () => {
  return (
    <div
      className="relative h-[calc(100vh+68px)] w-full  bg-no-repeat  bg-cover  flex items-center justify-end"
      style={{ backgroundImage: `url(${banner1})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute -left-20 -top-20 w-150 rotate-z-50 h-160 backdrop-blur-sm rounded-full rounded-l-none bg-black/50 max-lg:hidden">
        <div className=" absolute left-[24%] top-[34%] -rotate-z-50  text-white z-30 ">
          <h2 className="text-5xl leading-15  tracking-wider font-semibold font-['montserrat']">
            {" "}
            Find your <br /> life partner
            <br /> now{" "}
          </h2>
          <motion.span
            animate={{
              translateX: [0, 50, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
            className="text-6xl mt-5 block "
          >
            <FaLongArrowAltRight />
          </motion.span>
        </div>
      </div>

      {/* Form Overlay Right */}
      <div className=" z-10  w-1/2 max-lg:w-full  px-4 ">
        <Form />
      </div>
    </div>
  );
};

export default HeroSection;
