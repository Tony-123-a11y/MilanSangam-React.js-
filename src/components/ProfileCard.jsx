import { Heart, MessageSquare, PhoneCall, Star } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useState, useMemo, useEffect } from "react";

import {
  useSendInterestMutation,
  useShortListProfileMutation,
  useRemoveShortListMutation,
} from "../Redux/apiSlice";

const ProfileCard = ({
  match,
  showBtns = true,
  showShortlist = true,
  showRemoveShortlist = false,
  extraActions = {},
}) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  const { handleAccept, handleReject } = extraActions;

  /* ---------------- MUTATIONS ---------------- */

  const [sendInterest, { isLoading: sendingInterest }] =
    useSendInterestMutation();

  const [shortListProfile, { isLoading: shortListing }] =
    useShortListProfileMutation();

  const [removeShortList, { isLoading: removingShortlist }] =
    useRemoveShortListMutation();

 const [localInterestSent, setLocalInterestSent] = useState(
  match?.interestSent || false
);

useEffect(() => {
  setLocalInterestSent(match?.interestSent || false);
}, [match?.interestSent]);
  /* ---------------- DERIVED VALUES ---------------- */

  const age = useMemo(() => {
    if (!match?.dob) return "";
    const dob = new Date(match.dob);
    if (isNaN(dob.getTime())) return "";
    const today = new Date();
    let calculatedAge = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      calculatedAge--;
    }
    return calculatedAge > 0 ? calculatedAge : "";
  }, [match?.dob]);

 const isInterestSent = localInterestSent;
  const isInterestReceived = match?.interestReceived;
  const isMatched = match?.matched;

  const interestBtnDisabled = isInterestSent || isMatched || sendingInterest;

  const interestBtnLabel = sendingInterest
    ? "Sending..."
    : isMatched
      ? "Matched"
      : isInterestSent
        ? "Interest Sent"
        : "Send Interest";

  /* ---------------- ACTIONS ---------------- */

  const handleSendInterest = async () => {
    if (!user?._id || !match?.userId) {
      toast.error("User information missing");
      return;
    }

    try {
      const res = await sendInterest({
        senderId: user._id,
        receiverId: match.userId,
      }).unwrap();

      toast.success(res?.message || "Interest sent successfully");

     setLocalInterestSent(true);
    } catch (err) {
      toast.error(err?.data?.message || "Failed to send interest");
    }
  };

  const handleShortlist = async () => {
    try {
      const res = await shortListProfile(match.profileId).unwrap();

      toast.success(res?.message || "Profile shortlisted successfully");
    } catch (err) {
      toast.error(err?.data?.message || "Failed to shortlist profile");
    }
  };

  const handleRemoveShortlist = async () => {
    try {
      const res = await removeShortList(match.profileId).unwrap();

      toast.success(res?.message || "Profile removed from shortlist");
    } catch (err) {
      toast.error(err?.data?.message || "Failed to remove shortlist");
    }
  };

  /* ---------------- SAFETY ---------------- */

  if (!match) {
    return <p className="text-sm text-gray-500">Loading profile...</p>;
  }

  /* ---------------- UI ---------------- */

  return (
    <div className="flex overflow-hidden border-2 border-gray-300 rounded-lg h-70 bg-white max-sm:flex-col max-sm:h-screen">
      {/* IMAGE */}
      <Link
        to={`/profileDetails/${match.userId}`}
        state={match}
        className="relative w-1/2 max-sm:w-full max-sm:h-1/2"
      >
        <div className="absolute h-full w-1/7 right-0 top-0 bg-gradient-to-l profileCard max-sm:hidden" />

        <img
          src={match?.profilePic?.[0] || "/placeholder.svg"}
          alt={`${match?.fullName || "User"} Profile`}
          className="w-full object-cover object-top h-full max-sm:border-b bg-amber-400 border-gray-300"
        />
      </Link>

      {/* DETAILS */}
      <div className="p-3 px-2 w-2/3 max-xl:w-1/2 max-sm:w-full">
        {/* NAME */}
        <div className="flex justify-between items-center">
          <h3 className="font-semibold flex items-center w-full justify-between">
            {match?.fullName}
          </h3>

          <span className="text-semibold text-gray-600">{age}</span>
        </div>

        {/* MATCH % */}
        <p className="text-sm mt-1">
          <span className="font-semibold text-amber-500 tracking-wide">
            Compatibility:
          </span>{" "}
          {match?.matchPercentage || 0}%
        </p>

        {/* INFO */}
        <div className="flex items-center flex-wrap gap-1 py-4 max-lg:pb-2">
          <Info value={match?.marriageStatus} />
          <Info value={match?.religion} />
          <Info value={match?.caste} />
          <Info value={match?.city} />
          <Info value={match?.state} />
          <Info value={match?.height} />
          <Info value={match?.employmentType} />
          <Info value={match?.highestQualification} />
          <Info value={match?.occupation} />
          <Info value={match?.workingStatus} />
        </div>

        {/* BUTTONS */}
        {showBtns && (
          <div className="grid grid-cols-2 gap-2 mt-1">
            {/* SEND INTEREST */}
            <ActionBtn
              label={interestBtnLabel}
              icon={<Heart size={18} />}
              color={isMatched ? "green" : "rose"}
              disabled={interestBtnDisabled}
              onClick={!interestBtnDisabled ? handleSendInterest : undefined}
            />

            {/* MESSAGE */}
            {!isInterestReceived && (
              <>
                <ActionBtn
                  label="Message"
                  icon={<MessageSquare size={18} />}
                  color="blue"
                  onClick={() =>
                    navigate(`/profile/chats/chatpage/${match.userId}`, {
                      state: {
                        fullName: match.fullName,
                        profilePhoto: match?.profilePic?.[0],
                      },
                    })
                  }
                />

                {showShortlist && (
                  <ActionBtn
                    label="Shortlist"
                    icon={<Star size={18} />}
                    color="amber"
                    disabled={shortListing}
                    onClick={handleShortlist}
                  />
                )}

                {showRemoveShortlist && (
                  <ActionBtn
                    label="Remove"
                    icon={<Star size={18} />}
                    color="gray"
                    disabled={removingShortlist}
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
              </>
            )}

            {/* ACCEPT / REJECT */}
            {handleAccept && handleReject && isInterestReceived && (
              <>
                <ActionBtn
                  label="Accept"
                  icon={<Heart size={18} />}
                  color="green"
                  onClick={() => handleAccept(match)}
                />

                <ActionBtn
                  label="Reject"
                  icon={<Heart size={18} />}
                  color="gray"
                  onClick={() => handleReject(match)}
                />
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

/* ---------------- INFO ---------------- */

const Info = ({ value }) => {
  if (!value) return null;

  return (
    <span className="text-sm capitalize text-gray-600 px-2 py-1 border border-gray-200 rounded-lg bg-gray-50">
      {value}
    </span>
  );
};

/* ---------------- BUTTON ---------------- */

const ActionBtn = ({ label, icon, color, onClick, disabled = false }) => {
  const colors = {
    rose: "bg-rose-100 hover:bg-rose-200 text-rose-600",
    blue: "bg-blue-100 hover:bg-blue-200 text-blue-600",
    amber: "bg-amber-100 hover:bg-amber-200 text-amber-600",
    green: "bg-green-100 hover:bg-green-200 text-green-600",
    gray: "bg-gray-100 hover:bg-gray-200 text-gray-600",
  };

  const disabledStyle = "bg-gray-200 text-gray-400 cursor-not-allowed";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center justify-center gap-2 text-xs font-medium p-2 rounded-lg transition ${
        disabled ? disabledStyle : colors[color]
      }`}
    >
      {icon}
      {label}
    </button>
  );
};

export default ProfileCard;
