import React from "react";
import { FaComments, FaHeart, FaUserPlus } from "react-icons/fa";

const JourneyBegins = () => {
  return (
   <section className="px-5 py-15 bg-gray-50">
    <div className=" max-w-7xl mx-auto ">
    <h2 className="text-5xl text-amber-500 text-center  font-bold max-md:text-4xl max-sm:text-3xl font-['inter']">Why Choose Milan Sangam?</h2>
    
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 max-md:gap-4">
  {[
    {
      icon: "🧠",
      title: "Smart Matchmaking Tools",
      desc: "Use detailed filters to search by education, profession, age, income-group, community, lifestyle, and more.",
    },
    {
      icon: "🔒",
      title: "Verified & Genuine Profiles",
      desc: "Every profile goes through a basic verification to ensure trust and authenticity.",
    },
    {
      icon: "🎯",
      title: "Personalized Partner Criteria",
      desc: "Set your own preferences for the ideal life partner and get matches tailored to you.",
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Family-Friendly Platform",
      desc: "Designed keeping in mind traditional values with a modern touch, suitable for both individuals and families to use.",
    },
    {
      icon: "📱",
      title: "Easy to Use, Anytime Anywhere",
      desc: "Mobile-friendly design for convenient access and updates on the go.",
    },
  ].map((item, index) => (
    <div
      key={index}
      className="bg-white rounded-2xl shadow p-6 py-8 max-sm:py-4 text-center"
    >
      <div className="text-4xl max-sm:text-2xl">{item.icon}</div>
      <h3 className="text-lg md:text-xl font-semibold text-red-800 font-['poppins'] capitalize mt-5">
        {item.title}
      </h3>
      <p className="text-sm md:text-base text-gray-500">{item.desc}</p>
    </div>
  ))}
</div>

  </div>
 
</section>

  );
};

export default JourneyBegins;
