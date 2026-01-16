import { Heart, X, Star, MessageSquare, PhoneCall } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getMatches } from "../services/api.service";
import { useSelector } from "react-redux";
import ProfileCard from "./ProfileCard";

export default function Matches() {
  const user = useSelector((state) => state.user.user);
  const [matches, setmatches] = useState();

  useEffect(() => {
    const getMatchedUsers = async () => {
      if (!user?._id) return;
      const res = await getMatches(user._id);
      console.log("matches", res);
      setmatches(res.data.matches);
    };
    getMatchedUsers();
  }, [user]);



  return (
    <div className="space-y-6  bg-white ml-auto  py-4 px-5 pb-10 shadow-sm max-sm:px-3  max-lg:w-full ">
      <h1 className="text-2xl font-bold text-gray-900">Your Matches</h1>

      <div className="grid grid-cols-2 gap-2 max-sm:gap-6 max-lg:grid-cols-1">
        {matches?.map((match) => {
          const user = match.user;
          return (
           <ProfileCard key={match._id} match={match} user={user} />
          );
        })}
      </div>
    </div>
  );
}
