import { Heart, MessageSquare, PhoneCall, Star } from "lucide-react";
import { Link, useNavigate } from "react-router-dom"
import { removeFromShortListService, sendInterestService, shortListProfileService } from "../services/api.service";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const ProfileCard = ({ match, showBtns = true, user,removeShortListBtn=false }) => {
  const navigate = useNavigate();
  const data = useSelector((state)=> state.user)
  const shortListProfile = async (matchId) => {
    try {
      const res = await shortListProfileService(matchId);
      toast(res.data.message, { type: "success" })
    } catch (error) {
      toast(error.response.data.message, { type: "error" })
    }
  }
  const removeShortListProfile = async(matchId)=>{
      console.log('matchId',matchId)
      try {
        const res = await removeFromShortListService(matchId);
        toast(res.data.message,{type:"success"})
        props.fetchShortListedProfiles()
      } catch (error) {
       toast(error.response.data.message,{type:"error"})
      }
     }

  const handleSendInterest = async () => {
    try {

      // ✅ Call API service (make sure match._id exists)
      const res = await sendInterestService({
        senderId: data.user._id,
        receiverId: match.user._id,
    });

      if (res?.data?.success) {
        toast.success(res.data.message);
      } else {
        toast.error(res.data?.message || "Failed to send interest");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };
  return (
    <div
      key={match?._id}
      className="flex  items-center justify-center rounded-lg max-sm:block  overflow-hidden border border-gray-300 "
    >
      <Link to={"/profileDetails"} state={match} className="relative w-1/3 ">
        <img
          src={match?.profilePhotos?.[0] || "/placeholder.svg"}
          alt={user?.fullName}
          className="w-full h-61 object-cover  max-sm:border-b border-gray-300 max-sm:h-64 "
        />
      </Link>

      <div className="p-3 pt-6 px-2 w-2/3 max-sm:w-full">
        <h3 className=" font-semibold flex items-center leading-1   w-full justify-between">
          <span>{user?.fullName}</span>
          <span>
            {user?.dob &&
              new Date().getFullYear() -
              new Date(user?.dob).getFullYear()}
          </span>
        </h3>
        <br />
        <h3 className="capitalize text-sm leading-2">
          <span className="font-semibold text-amber-500 tracking-wide">
            compatiblity-
          </span>
          <span className="font-semibold">
            {" "}
            {match?.matchPercentage}%
          </span>
        </h3>

        <div className="flex items-center justify-start flex-wrap gap-1 py-4 max-lg:pb-2">
          <p className="text-sm  capitalize text-gray-600 px-2 py-1 border border-gray-200 rounded-lg bg-gray-50">
            <span className="font-medium mr-1 ">height-</span>
            <span className="text-black">{user?.height}</span>
          </p>
          <p className="text-sm  capitalize text-gray-600 px-2 py-1 border border-gray-200 rounded-lg bg-gray-50">
            <span className="font-medium mr-1 ">marriage status-</span>
            <span className="text-black">{user?.marriageStatus}</span>
          </p>
          <p className="text-sm  capitalize text-gray-600 px-2 py-1 border border-gray-200 rounded-lg bg-gray-50">
            <span className="font-medium mr-1 ">religion-</span>
            <span className="text-black">{user?.religion}</span>
          </p>
          <p className="text-sm  capitalize text-gray-600 px-2 py-1 border border-gray-200 rounded-lg bg-gray-50">
            <span className="font-medium mr-1 ">region-</span>
            <span className="text-black">{user?.city}</span>
          </p>
          <p className="text-sm  capitalize text-gray-600 px-2 py-1 border border-gray-200 rounded-lg bg-gray-50">
            <span className="font-medium mr-1 ">working status-</span>
            <span className="text-black">
              {match?.career?.employmentType}
            </span>
          </p>
          <p className="text-sm  capitalize text-gray-600 px-2 py-1 border border-gray-200 rounded-lg bg-gray-50">
            <span className="font-medium mr-1 ">education-</span>
            <span className="text-black">
              {match?.education?.highestQualification}
            </span>
          </p>
        </div>
        {
          showBtns &&

          <div className="grid grid-cols-2 gap-2 max-sm:grid max-sm:grid-cols-2  max-sm:gap-1">
            <button className="p-2 rounded-lg bg-rose-100 px-4 max-xl:px-2 max-xl:py-1.5 flex-grow cursor-pointer hover:bg-rose-200 flex items-center justify-center gap-2 transition-colors" onClick={handleSendInterest}>
              <h2 className="text-xs font-medium capitalize  ">
                {" "}
                Send Your Interest
              </h2>
              <Heart size={20} className="text-rose-600" />
            </button>

                  <button onClick={()=>{
                    console.log('hello navigate')
                     navigate(`/profile/chats/chatpage/${match?.user?._id}`,{state:match});
                  }} className="p-2 rounded-lg bg-gray-100 px-4 flex-grow  max-xl:px-2 max-xl:py-1.5 cursor-pointer hover:bg-gray-200 flex items-center justify-center gap-2 transition-colors">
                    <h2 className="text-xs font-medium capitalize  ">
                      Send Message
                    </h2>
                    <MessageSquare size={20} className="text-blue-500" />
                  </button>
               {
    removeShortListBtn ?  <button onClick={()=>removeShortListProfile(match?._id)} className="p-2 rounded-lg bg-gray-100 px-4 flex-grow max-xl:px-2 max-xl:py-1.5 cursor-pointer hover:bg-gray-200 flex items-center justify-center gap-2 transition-colors">
                    <h2 className="text-xs font-medium capitalize  ">
                      Remove Profile
                    </h2>
                    <Star size={20} className="text-amber-500" />
                  </button>
               :
                  <button onClick={()=>shortListProfile(match?._id)} className="p-2 rounded-lg bg-gray-100 px-4 flex-grow max-xl:px-2 max-xl:py-1.5 cursor-pointer hover:bg-gray-200 flex items-center justify-center gap-2 transition-colors">
                    <h2 className="text-xs font-medium capitalize  ">
                      Shortlist Profile
                    </h2>
                    <Star    size={20} className="text-amber-500" />
                  </button>
}
                  <button className="p-2 rounded-lg bg-green-100 px-4 flex-grow max-xl:px-2 max-xl:py-1.5 cursor-pointer hover:bg-green-200 flex items-center justify-center gap-2 transition-colors">
                    <h2 className="text-xs font-medium capitalize  ">
                      {" "}
                      See Phone Number
                    </h2>
                    <PhoneCall size={20} className="text-green-600" />
                  </button>
                </div>
}
              </div>
            </div>
  )
}

export default ProfileCard