import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ProfileCard from "../components/ProfileCard";

const ProfileListPage = ({ title, profiles = [], showBtns = false }) => {
  return (
    <div className="min-h-screen bg-white p-4">
      {/* Header */}
      <div className="flex items-center gap-2">
        <Link to="/profile" className="p-2 rounded-full hover:bg-gray-100">
          <ArrowLeft size={20} />
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
      </div>

      {/* Content */}
      {profiles.length === 0 ? (
        <p className="mt-6 text-gray-500">No profiles found</p>
      ) : (
        <div className="mt-4 grid grid-cols-2 gap-4 max-sm:grid-cols-1">
          {profiles.map((profile) => (
            <ProfileCard
              key={profile.id}   
              match={profile}
              showBtns={showBtns}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfileListPage;
