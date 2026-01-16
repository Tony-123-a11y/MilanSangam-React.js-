"use client";

import { Search, Filter, MapPin, Briefcase, GraduationCap, ArrowLeft } from "lucide-react";
import { useState } from "react";
import SearchFilters from "./SearchFilter";
import { Link } from "react-router-dom";

export default function SearchContent() {
  const [searchParams, setSearchParams] = useState({
    ageMin: 25,
    ageMax: 40,
    distance: 50,
    hasPhoto: true,
    onlineNow: false,
    education: "",
    occupation: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSearchParams((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="space-y-6 bg-white  px-8 py-4  shadow-sm max-lg:w-full max-lg:mt-18 max-lg:pb-22">
       <div className="flex items-center gap-2">
          <Link to={'/profile'} className="p-2 rounded-full hover:bg-gray-100">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Find Your Match</h1>
        </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Search Filters */}
       <SearchFilters/>

        {/* Search Results */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Search Results</h2>
          
          </div>

          <div className="space-y-4">
            {/* Placeholder for search results */}
            <div className="text-center py-10 text-gray-500">
              <Search size={48} className="mx-auto mb-4 text-gray-300" />
              <p className="text-lg font-medium">
                Use the filters to find your perfect match
              </p>
              <p className="text-sm">
                Adjust your search criteria to see potential matches
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
