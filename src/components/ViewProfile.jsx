"use client"

import { useEffect, useState } from "react"
import {
  ArrowLeft,
  Heart,
  MessageSquare,
  Star,
  Share2,
  Flag,
  User,
  Calendar,
  MapPin,
  Briefcase,
  Activity,
  Users,
} from "lucide-react"
import { Link, matchPath, useLocation } from "react-router-dom"
import { getMatches } from "../services/api.service"
import { useSelector } from "react-redux"

export default function ProfileDetails({ profileId = "1" }) {
const user= useSelector((state)=>state.user)
const location= useLocation()
console.log(location.state)
  const profileData= location.state
  const [isLiked, setIsLiked] = useState(false)
  const [isStarred, setIsStarred] = useState(false)
const time=new Date(profileData.dob)
  const calculateAge = (dateOfBirth) => {   

    if(dateOfBirth){
    const today = new Date()
    const birthDate = new Date(dateOfBirth)
    let age = today.getFullYear() - birthDate.getFullYear() 
    const monthDiff = (today.getMonth() + 1) - birthDate.getMonth()
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--
    } 
    return age
  }
  }

  // Helper function to format income
  const formatIncome = (incomeRange) => {
    const incomeMap = {
      "0-25000": "₹0 - ₹25,000",
      "25000-50000": "₹25,000 - ₹50,000",
      "50000-100000": "₹50,000 - ₹1,00,000",
      "100000-200000": "₹1,00,000 - ₹2,00,000",
      "200000-500000": "₹2,00,000 - ₹5,00,000",
      "500000-1000000": "₹5,00,000 - ₹10,00,000",
      "1000000+": "₹10,00,000+",
    }
    return incomeMap[incomeRange] || incomeRange
  }

  const handleBack = () => {
    console.log("Navigate back to matches")
  }

  const handleLike = () => {
    setIsLiked(!isLiked)
    console.log("Profile liked:", !isLiked)
  }

  const handleMessage = () => {
    console.log("Open message conversation")
  }

  const handleStar = () => {
    setIsStarred(!isStarred)
    console.log("Profile starred:", !isStarred)
  }

  const handleShare = () => {
    console.log("Share profile")
  }

  const handleReport = () => {
    console.log("Report profile")
  }

  const age = calculateAge(profileData?.dob)
const [matches, setmatches] = useState();
console.log(matches)
 useEffect(() => {
    const getMatchedUsers = async () => {
      if (!user?._id) return;
      const res = await getMatches(user._id);
      setmatches(res.data.matches);
    };
    getMatchedUsers();
  }, [user]);
  return (
    <div className="grid grid-cols-12  mx-auto bg-white rounded-lg shadow-sm border border-gray-200">
      {/* Header */}
     <div className="col-span-9">
       <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <Link to={'/profile'}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Matches</span>
          </Link>

          <div className="flex items-center gap-2">
            <button onClick={handleShare} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Share2 size={18} className="text-gray-600" />
            </button>
           
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={handleLike}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
              isLiked ? "bg-rose-600 text-white" : "bg-rose-100 text-rose-600 hover:bg-rose-200"
            }`}
          >
            <Heart size={18} fill={isLiked ? "currentColor" : "none"} />
            {isLiked ? "Liked" : "Like"}
          </button>

          <button
            onClick={handleMessage}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            <MessageSquare size={18} />
            Send Message
          </button>

          <button
            onClick={handleStar}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
              isStarred ? "bg-amber-500 text-white" : "bg-amber-100 text-amber-600 hover:bg-amber-200"
            }`}
          >
            <Star size={18} fill={isStarred ? "currentColor" : "none"} />
            {isStarred ? "Shortlisted" : "Shortlist"}
          </button>
        </div>
      </div>

      <div className="p-6">
        {/* Profile Header Section */}
        <div className="flex flex-col lg:flex-row gap-6 mb-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
          <div className="flex-shrink-0">
            <img
              src={profileData?.profilePhoto || "/placeholder.svg"}
              alt="Profile"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>

          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{profileData?.fullName}</h2>
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    {profileData?.lastActive}
                  </div>
                  <span className="text-gray-500 text-sm">Member Since {new Date(profileData?.createdAt).toLocaleDateString()}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 bg-rose-100 text-rose-700 rounded-lg font-semibold">
                <Heart size={16} />
                {/* {profileData?.compatibilityScore}% Match */}
                90% Match
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-blue-500" />
                <span>{age} years old</span>
              </div>
              <div className="flex items-center gap-2">
                <User size={16} className="text-blue-500" />
                <span>{profileData?.gender}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-blue-500" />
                <span>
                  {
                    profileData?.metroCities ? profileData.metroCities : "--"
                  },
                  {
                    profileData?.state ? profileData.state : "--"
                  }
                
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase size={16} className="text-blue-500" />
                <span>
                  {
                    profileData?.occupation ? profileData?.occupation : '--'
                  }
                  </span>
              </div>
            </div>
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Photos</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {
              profileData?.photos?.length > 0 ? profileData?.photos?.map((photo, index) => (
              <div key={index} className="aspect-square rounded-lg overflow-hidden">
                <img
                  src={ "/placeholder.svg"}
                  alt={`Photo ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                />
              </div>
            
            ))
          :'No photos added yet'
          }
            
          
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Personal Information */}
          <div className="space-y-6">
  <div className="bg-white border border-gray-200 rounded-lg p-6">
    <div className="flex items-center gap-2 mb-4">
      <User className="text-blue-600" size={20} />
      <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
    </div>

    <div className="space-y-3">
      <div className="flex justify-between">
        <span className="text-gray-600">Full Name:</span>
        <span className="font-medium">{profileData?.fullName ?? '--'}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Date of Birth:</span>
        <span className="font-medium">
       {`${time.getFullYear()}/${time.getMonth()}/${time.getDate()}`}
        </span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Age:</span>
        <span className="font-medium">{age ? `${age} years` : '--'}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Gender:</span>
        <span className="font-medium">{profileData?.gender ?? '--'}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Height:</span>
        <span className="font-medium">{profileData?.height ?? '--'}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Marriage Status:</span>
        <span className="font-medium">{profileData?.marriageStatus ?? '--'}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Mobile:</span>
        <span className="font-medium">{profileData?.mobile ?? '--'}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Email:</span>
        <span className="font-medium">{profileData?.email ?? '--'}</span>
      </div>
    </div>
  </div>

  {/* Location Information */}
  <div className="bg-white border border-gray-200 rounded-lg p-6">
    <div className="flex items-center gap-2 mb-4">
      <MapPin className="text-blue-600" size={20} />
      <h3 className="text-lg font-semibold text-gray-900">Location</h3>
    </div>

    <div className="space-y-3">
      <div className="flex justify-between">
        <span className="text-gray-600">Country:</span>
        <span className="font-medium">{profileData?.country ?? '--'}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">State:</span>
        <span className="font-medium">{profileData?.state ?? '--'}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Metro Cities:</span>
        <span className="font-medium">{profileData?.metroCities ?? '--'}</span>
      </div>
    </div>
  </div>

  {/* Physical & Health */}
  <div className="bg-white border border-gray-200 rounded-lg p-6">
    <div className="flex items-center gap-2 mb-4">
      <Activity className="text-blue-600" size={20} />
      <h3 className="text-lg font-semibold text-gray-900">Physical & Health</h3>
    </div>

    <div className="space-y-3">
      <div className="flex justify-between">
        <span className="text-gray-600">Height:</span>
        <span className="font-medium">{profileData?.height ?? '--'}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Physical Disability:</span>
        <span className="font-medium">{profileData?.physicalDisability ?? '--'}</span>
      </div>
    </div>
  </div>
</div>

          {/* Religious & Cultural Information */}
          <div className="space-y-6">
  <div className="bg-white border border-gray-200 rounded-lg p-6">
    <div className="flex items-center gap-2 mb-4">
      <Heart className="text-blue-600" size={20} />
      <h3 className="text-lg font-semibold text-gray-900">Religious & Cultural</h3>
    </div>

    <div className="space-y-3">
      <div className="flex justify-between">
        <span className="text-gray-600">Religion:</span>
        <span className="font-medium">{profileData?.religion ?? '--'}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Mother Tongue:</span>
        <span className="font-medium">{profileData?.motherTongue ?? '--'}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Caste:</span>
        <span className="font-medium">{profileData?.caste ?? '--'}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Subcaste:</span>
        <span className="font-medium">{profileData?.subcaste ?? '--'}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Gothram:</span>
        <span className="font-medium">{profileData?.gothram ?? '--'}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Manglik:</span>
        <span className="font-medium">{profileData?.manglik ?? '--'}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Dosh:</span>
        <span className="font-medium">{profileData?.dosh ?? '--'}</span>
      </div>
    </div>
  </div>

  {/* Professional Information */}
  <div className="bg-white border border-gray-200 rounded-lg p-6">
    <div className="flex items-center gap-2 mb-4">
      <Briefcase className="text-blue-600" size={20} />
      <h3 className="text-lg font-semibold text-gray-900">Professional Information</h3>
    </div>

    <div className="space-y-3">
      <div className="flex justify-between">
        <span className="text-gray-600">Occupation:</span>
        <span className="font-medium">{profileData?.occupation ?? '--'}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Working Status:</span>
        <span className="font-medium">{profileData?.workingStatus ?? '--'}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Annual Income:</span>
        <span className="font-medium">{profileData?.annualIncome ? formatIncome(profileData.annualIncome) : '--'}</span>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-gray-600">Education Qualifications:</span>
        <span className="font-medium text-sm">{profileData?.educationQualifications ?? '--'}</span>
      </div>
    </div>
  </div>
</div>


          {/* Family & Personal Information */}
          <div className="lg:col-span-2 space-y-6">
  <div className="bg-white border border-gray-200 rounded-lg p-6">
    <div className="flex items-center gap-2 mb-4">
      <Users className="text-blue-600" size={20} />
      <h3 className="text-lg font-semibold text-gray-900">Family & Personal</h3>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-600">Marriage Status:</span>
          <span className="font-medium">{profileData?.marriageStatus ?? '--'}</span>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-600">Kids:</span>
          <span className="font-medium">{profileData?.kids ?? '--'}</span>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-600">Siblings:</span>
          <span className="font-medium">{profileData?.siblings ?? '--'}</span>
        </div>
      </div>
    </div>
  </div>

  {/* About Me */}
  <div className="bg-white border border-gray-200 rounded-lg p-6">
    <div className="flex items-center gap-2 mb-4">
      <User className="text-blue-600" size={20} />
      <h3 className="text-lg font-semibold text-gray-900">
        About {profileData?.fullName?.split(" ")[0] ?? '--'}
      </h3>
    </div>

    <div className="space-y-4">
      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-2">About Me</h4>
        <p className="text-gray-600 leading-relaxed">
          {profileData?.aboutMe ?? '--'}
        </p>
      </div>

      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-2">Interests & Hobbies</h4>
        <div className="flex flex-wrap gap-2">
          {(profileData?.interestsHobbies ?? '')
            .split(",")
            .filter(Boolean)
            .map((interest, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
              >
                {interest.trim()}
              </span>
            ))}
          {!profileData?.interestsHobbies && (
            <span className="text-gray-600">--</span>
          )}
        </div>
      </div>
    </div>
  </div>
</div>

        </div>

        {/* Compatibility Section */}
        <div className="mt-8 bg-gradient-to-r from-rose-50 to-pink-50 border border-rose-200 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-rose-900">Compatibility Score</h3>
              <p className="text-rose-700 text-sm">Based on your preferences and profile information</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 relative">
                <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-rose-200"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-rose-600"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeDasharray={`${profileData?.compatibilityScore}, 100`}
                    strokeLinecap="round"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* <span className="text-rose-900 font-bold text-lg">{profileData?.compatibilityScore}%</span> */}
                  <span className="text-rose-900 font-bold text-lg">90%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Footer */}
        <div className="mt-8 pt-6 border-t border-gray-200 flex flex-wrap gap-3 justify-center">
          <button
            onClick={handleLike}
            className={`flex items-center gap-2 px-8 py-3 rounded-lg font-medium transition-colors ${
              isLiked ? "bg-rose-600 text-white" : "bg-rose-100 text-rose-600 hover:bg-rose-200"
            }`}
          >
            <Heart size={18} fill={isLiked ? "currentColor" : "none"} />
            {isLiked ? "Liked" : "Like Profile"}
          </button>

          <button
            onClick={handleMessage}
            className="flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            <MessageSquare size={18} />
            Send Message
          </button>

          <button
            onClick={handleStar}
            className={`flex items-center gap-2 px-8 py-3 rounded-lg font-medium transition-colors ${
              isStarred ? "bg-amber-500 text-white" : "bg-amber-100 text-amber-600 hover:bg-amber-200"
            }`}
          >
            <Star size={18} fill={isStarred ? "currentColor" : "none"} />
            {isStarred ? "Shortlisted" : "Add to Shortlist"}
          </button>
        </div>
      </div>
     </div>
    <div className="col-span-3 p-2 bg-gray-50  left-0 ">
      
       <div className=" space-y-2 mt-4 sticky top-16  bg-gray-200 p-2  max-h-145 rounded-md shadow  overflow-y-scroll custom-scrollbar">
        <h2 className="text-lg  font-semibold">Check Out More Profiles</h2>
        {
          matches?.map((match,i)=>{
      
 return i<=5 && <Link to={'/profileDetails'} state={match} className="flex cursor-pointer hover:bg-amber-50 items-center gap-4 p-3 bg-white shadow-sm rounded-lg border border-gray-200 max-w-sm">
      <img
           src={match.profilePhoto || "/placeholder.svg"}
          alt={match.fullName}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
            <h3 className="font-medium">{match.fullName}</h3>
        <p className="text-sm text-gray-800">
             {match.age}, {match.caste}, {match.subCaste}, {match.metroCities}
        </p>
      </div>
    </Link>
           
          })
        }
     </div>
    </div>
    </div>
  )
}
