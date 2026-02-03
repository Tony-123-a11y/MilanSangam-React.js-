import {  useState } from "react";
import { getMatches } from "../services/api.service";
import { useSelector } from "react-redux";
import ProfileCard from "./ProfileCard";
import { useQuery } from "@tanstack/react-query";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

export default function Matches() {
  const user = useSelector((state) => state.user.user);
  const userId= user?._id;
 const { data:matches, isLoading, error }=useQuery({
   queryKey:['matches',userId],
   queryFn: ({signal})=>getMatches(userId,signal),
   enabled:!!userId,
  staleTime: 5 * 60 * 1000,
   select: (response) => response.data.matches,
 })
if (isLoading) {
  return <p>Loading matches...</p>
}

   if (error) {
  return <p>Something went wrong while loading matches.</p>
}



  return (
    <div className="space-y-6 h-full bg-white ml-auto  py-4 px-5 pb-10 shadow-sm max-sm:px-3  max-lg:w-full ">
         {
          matches?.length>0 ? 
        <div>
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
     
      :
      <div className="h-full text-center flex items-center justify-center">
          
      <div>
          <Search size={160} className="text-amber-400 mx-auto"/>
      

      <h2 className="text-2xl font-semibold text-amber-600">
        No Matches Found
      </h2>

      <p className="mt-2 text-amber-500 max-w-sm">
        We couldn’t find any profiles matching your preferences.
        Try adjusting your 
        <Link to={'/profile/editProfile'} className="underline"> Partner preferences.</Link>
        
      </p>

      </div>
      </div>
}
    </div>
  );
}
