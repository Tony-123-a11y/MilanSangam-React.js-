import { Heart, MessageSquare, PhoneCall, Star } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { useSelector } from "react-redux";

// import {
//   sendInterestService,
//   shortListProfileService,
//   removeFromShortListService,
// } from "../services/api.service";

const ProfileCard = ({
  match,
  showBtns = true,
  showShortlist = true,
  showRemoveShortlist = false,
}) => {
  const navigate = useNavigate();
  // const { user } = useSelector((state) => state.user);

  /* ------------------ ACTIONS (API COMMENTED) ------------------ */

  const handleSendInterest = () => {
    console.log("Send Interest clicked", match?._id);

    // const res = await sendInterestService({
    //   senderId: user?._id,
    //   receiverId: match?._id,
    // });
    // toast.success(res.data.message);
  };

  const handleShortlist = () => {
    console.log("Shortlist clicked", match?._id);

    // const res = await shortListProfileService(match?._id);
    // toast.success(res.data.message);
  };

  const handleRemoveShortlist = () => {
    console.log("Remove shortlist clicked", match?._id);

    // const res = await removeFromShortListService(match?._id);
    // toast.success(res.data.message);
  };

  /* ------------------ UI ------------------ */

  return (
    <div className="flex max-sm:block border border-gray-300 rounded-lg overflow-hidden bg-white">
      {/* Image */}
      <Link
        to="/profileDetails"
        state={match}
        className="relative  w-1/3 max-sm:w-full"
      >
        <img
          src={match?.profilePhotos?.[0] || "/placeholder.svg"}
          alt={match?.fullName}
          className="w-full h-61 object-cover  max-sm:border-b border-gray-300 max-sm:h-64 "
        />
      </Link>

      {/* Details */}
      <div className="p-3 pt-6 px-2 w-2/3 max-sm:w-full">
        {/* Name + Age */}
        <div className="flex justify-between items-center">
          <h3 className=" font-semibold flex items-center leading-1   w-full justify-between">
            {match?.fullName}
          </h3>
          <span className="text-sm text-gray-600">
            {match?.dob
              ? new Date().getFullYear() - new Date(match?.dob).getFullYear()
              : match?.age}
          </span>
        </div>

        {/* Match Score */}
        {match?.matchScore && (
          <p className="text-sm mt-1">
            <span className="font-semibold text-amber-500 tracking-wide">
              Compatibility:
            </span>{" "}
            {(match.matchScore * 100).toFixed(0)}%
          </p>
        )}

        {/* Info */}
        <div className="flex items-center justify-start flex-wrap gap-1 py-4 max-lg:pb-2">
          <Info label="Marital" value={match?.marriageStatus} />
          <Info label="Religion" value={match?.religion} />
          <Info label="Caste" value={match?.caste} />
          <Info label="City" value={match?.metro} />
          <Info label="Education" value={match?.educationQualifications} />
          <Info label="Working" value={match?.workingStatus} />
        </div>

        {/* Buttons */}
        {showBtns && (
          <div className="grid grid-cols-2 gap-2 mt-1">
            <ActionBtn
              label="Send Interest"
              icon={<Heart size={18} />}
              color="rose"
              onClick={handleSendInterest}
            />

            <ActionBtn
              label="Message"
              icon={<MessageSquare size={18} />}
              color="blue"
              onClick={() =>
                navigate(`/profile/chats/chatpage/${match?._id}`, {
                  state: match,
                })
              }
            />

            {showShortlist && (
              <ActionBtn
                label="Shortlist"
                icon={<Star size={18} />}
                color="amber"
                onClick={handleShortlist}
              />
            )}

            {showRemoveShortlist && (
              <ActionBtn
                label="Remove"
                icon={<Star size={18} />}
                color="gray"
                onClick={handleRemoveShortlist}
              />
            )}

            <ActionBtn
              label="View Phone"
              icon={<PhoneCall size={18} />}
              color="green"
              onClick={() =>
                alert(`Phone: ${match?.mobile || "Not available"}`)
              }
            />
          </div>
        )}
      </div>
    </div>
  );
};

/* ------------------ SMALL COMPONENTS ------------------ */

const Info = ({ label, value }) => {
  if (!value) return null;
  return (
    <span className="text-sm  capitalize text-gray-600 px-2 py-1 border border-gray-200 rounded-lg bg-gray-50">
      <b>{label}:</b> {value}
    </span>
  );
};

const ActionBtn = ({ label, icon, color, onClick }) => {
  const colors = {
    rose: "bg-rose-100 hover:bg-rose-200 text-rose-600",
    blue: "bg-blue-100 hover:bg-blue-200 text-blue-600",
    amber: "bg-amber-100 hover:bg-amber-200 text-amber-600",
    green: "bg-green-100 hover:bg-green-200 text-green-600",
    gray: "bg-gray-100 hover:bg-gray-200 text-gray-600",
  };

  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-2 text-xs font-medium p-2 rounded-lg transition ${colors[color]}`}
    >
      {icon}
      {label}
    </button>
  );
};

export default ProfileCard;
