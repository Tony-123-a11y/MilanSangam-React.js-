import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* 3D Card */}
      <div className="relative p-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg shadow-gray-800 text-center transition-transform transform hover:scale-105">
        <h1 className="text-8xl font-extrabold text-white drop-shadow-md">
          404
        </h1>
        <p className="text-lg text-gray-300 mt-2">Oops! Page not found.</p>

        {/* Button with hover effect */}
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 text-white font-semibold bg-blue-500 hover:bg-blue-600 rounded-lg shadow-lg transition-transform transform hover:scale-110 "
        >
          Go Home
        </Link>

        {/* Floating 3D Effect */}
        <div className="absolute top-[-20px] left-[-20px] w-10 h-10 bg-blue-400 rounded-full shadow-2xl blur-lg animate-bounce"></div>
        <div className="absolute bottom-[-20px] right-[-20px] w-10 h-10 bg-purple-400 rounded-full shadow-2xl blur-lg animate-bounce"></div>
      </div>
    </div>
  );
};

export default NotFound;
