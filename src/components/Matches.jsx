import { useSelector } from "react-redux";
import ProfileCard from "./ProfileCard";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useGetMatchesQuery } from "../Redux/apiSlice";

export default function Matches() {
  const user = useSelector((state) => state.user.user);
  const userId = user?._id;

  const { data, isLoading, error } = useGetMatchesQuery(userId, {
    skip: !userId,
  });

const matches = data?.matches || [];

  if (isLoading) {
    return <p>Loading matches...</p>;
  }

  if (error) {
    return <p>Something went wrong while loading matches.</p>;
  }

  return (
    <div className="space-y-6 h-full bg-white ml-auto py-4 px-5 pb-10 shadow-sm max-sm:px-3 max-lg:w-full">
      {matches?.length > 0 ? (
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Your Matches
          </h1>
          <div className="grid grid-cols-2 gap-2 max-sm:gap-6 max-xl:grid-cols-1">
            {matches?.map((match) => {
              return <ProfileCard key={match.userId} match={match} />;
            })}
          </div>
        </div>
      ) : (
        <div className="h-full text-center flex items-center justify-center">
          <div>
            <Search size={160} className="text-amber-400 mx-auto" />
            <h2 className="text-2xl font-semibold text-amber-600">
              No Matches Found
            </h2>
            <p className="mt-2 text-amber-500 max-w-sm">
              We couldn’t find any profiles matching your preferences. Try
              adjusting your
              <Link to={"/profile/editProfile"} className="underline">
                {" "}
                Partner preferences.
              </Link>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
