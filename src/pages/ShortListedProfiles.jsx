import React from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import ProfileCard from "../components/ProfileCard";
import { useGetAllShortlistedProfilesQuery } from "../Redux/apiSlice";

const ShortListedProfiles = () => {
  const { data, isLoading, isError, error } =
    useGetAllShortlistedProfilesQuery();

  const shortListedProfiles = data?.profiles || [];

  if (isLoading) {
    return (
      <div className="h-full flex justify-center items-center">
        <p className="text-gray-500 text-lg">Loading shortlisted profiles...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="h-full flex justify-center items-center">
        <p className="text-red-500">
          {error?.data?.message || "Failed to load shortlisted profiles"}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6 h-full bg-white ml-auto py-4 px-5 pb-10 shadow-sm max-sm:px-3 max-lg:w-full">
      {shortListedProfiles.length > 0 ? (
        <>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Your Shortlisted Profiles
          </h1>

          <div className="grid grid-cols-2 gap-2 max-sm:gap-6 max-xl:grid-cols-1">
            {shortListedProfiles.map((match) => (
              <ProfileCard
                key={match.userId}
                match={match}
                showShortlist={false} 
                showRemoveShortlist={true} 
              />
            ))}
          </div>
        </>
      ) : (
        <div className="h-full text-center flex items-center justify-center">
          <div>
            <Search size={160} className="text-amber-400 mx-auto" />

            <h2 className="text-2xl font-semibold text-amber-600">
              No Shortlisted Profiles Found
            </h2>

            <p className="mt-2 text-amber-500 max-w-sm">
              We couldn’t find any profiles shortlisted by you. Try shortlisting
              profiles from
              <Link to={"/profile/matches"} className="underline">
                {" "}
                Your Matches
              </Link>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShortListedProfiles;
