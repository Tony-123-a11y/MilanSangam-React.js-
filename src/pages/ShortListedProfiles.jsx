import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { profiles } from "../data/profilesData";
import ProfileListPage from "./ProfileListPage";
import { useQuery } from "@tanstack/react-query";
import { getShortListedProfilesService } from "../services/api.service";
import ProfileCard from "../components/ProfileCard";
// import { getShortListedProfilesService } from "../services/api.service"; // ❌ API later

const ShortListedProfiles = () => {
  // 🔹 API version (future use)
  /*
  const [profiles, setProfiles] = useState([]);

  const fetchShortListedProfiles = async () => {
    try {
      const res = await getShortListedProfilesService();
      const shortlisted = res.data.shortlistedProfiles.map(
        (item) => item.user
      );
      setProfiles(shortlisted);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchShortListedProfiles();
  }, []);

  */

  const {data:shortListedProfiles, isLoading, error}= useQuery({
    queryKey:['shortListedProfile'],
    queryFn:({signal})=>getShortListedProfilesService(signal),
    staleTime: 5 * 60 * 1000,
    select: (response)=> response.data.shortlistedProfiles
    
  })

  console.log(shortListedProfiles)

  // ✅ TEMP: data.js se shortlist
  const shortlistedProfiles = profiles.filter(
    (item) => item.status === "shortlisted"
  );

   return (
    <div className="space-y-6 h-full bg-white ml-auto  py-4 px-5 pb-10 shadow-sm  max-sm:px-3   max-lg:w-full ">
         {
          shortListedProfiles?.length>0 ? 
        <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Your Shortlisted Profiles </h1>
 <div className="grid grid-cols-2 gap-2 max-sm:gap-6 max-xl:grid-cols-1">
        {shortListedProfiles?.map((match) => {
          const user = match.user;
          return (
           <ProfileCard key={match.userId} match={match} user={user} />
          );
        })}
      </div>
        </div> 
     
      :
      <div className="h-full text-center flex items-center justify-center">
          
      <div>
          <Search size={160} className="text-amber-400 mx-auto"/>
      

      <h2 className="text-2xl font-semibold text-amber-600">
        No ShortListed Profiles Found
      </h2>

      <p className="mt-2 text-amber-500 max-w-sm">
        We couldn’t find any profiles shortlisted by you.
        Try shortlisting profiles from
        <Link to={'/profile/matches'} className="underline"> Your Matches.</Link>
        
      </p>

      </div>
      </div>
}
    </div>
  );
};

export default ShortListedProfiles;
