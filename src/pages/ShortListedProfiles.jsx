import { ArrowLeft, Heart, MessageSquare, PhoneCall, Star } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProfileCard from '../components/ProfileCard'
import { getShortListedProfilesService } from '../services/api.service'

const ShortListedProfiles = () => {
    const [profiles, setprofiles] = useState(null);
     const fetchShortListedProfiles = async () => {
        try { 
          const res = await getShortListedProfilesService();
           setprofiles(res.data.shortlistedProfiles);
        }catch (error) {
          console.error("Error fetching shortlisted profiles:", error);
        }
      }
    useEffect(() => {
    fetchShortListedProfiles();
    }, []);

  return (
    <div className='min-h-screen bg-white p-4'>
          <div className="flex items-center gap-2">
          <Link to={'/profile'} className="p-2 rounded-full hover:bg-gray-100">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Shortlisted Profiles</h1>
        </div>
       <div className=" mt-4 max-lg:grid-cols-1 grid grid-cols-2 gap-4">
        {
         profiles?.map((match,i)=>{
          const user= match.user;
            return <ProfileCard key={i} match={match} user={user} removeShortListBtn={true} fetchShortListedProfiles={fetchShortListedProfiles}/>
         })
       }
       </div>
    </div>
  )
}

export default ShortListedProfiles
