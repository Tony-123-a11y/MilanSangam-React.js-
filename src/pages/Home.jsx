import React from "react";
import HeroSection from "../components/HeroSection";
import JourneyBegins from "../components/JourneyBegins";
// import ConciergeSection from "../components/ConciergeSection";
import TestimonialSection from "../components/TestimonialSection";
import BlogSection from "../components/BlogSection";
import Faqs from "../components/Faqs";
import TrustedByMillions from "../components/TrustedByMillions";
import Steps from "../components/Steps";
import AboutVivah from "../components/AboutVivah";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Steps/>
      <JourneyBegins />
      <AboutVivah/>
      {/* <ConciergeSection /> */}
      <TestimonialSection />
      <BlogSection />
      <Faqs />
      <TrustedByMillions />
    </>
  );
};

export default Home;
