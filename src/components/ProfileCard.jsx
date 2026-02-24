import { Heart, MessageSquare, PhoneCall, Star } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useState, useMemo, useEffect } from "react";

import {
  useSendInterestMutation,
  useShortListProfileMutation,
  useRemoveShortListMutation,
  useViewContactMutation,
} from "../Redux/apiSlice";

const handlePremiumError = (err, navigate) => {
  const message = err?.data?.message || "Action failed";
  const status = err?.status;
  if (
    status === 403 &&
    (message === "Please purchase a package" ||
      message === "Your package has expired" ||
      message === "Contact view limit reached")
  ) {
    toast.error(message);
    navigate("/packages");
    return true;
  }

  toast.error(message);
  return false;
};

const ProfileCard = ({
  match,
  showBtns = true,
  showShortlist = true,
  showRemoveShortlist = false,
  extraActions = {},
}) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const [phoneData, setPhoneData] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const { handleAccept, handleReject } = extraActions;

  /* ---------------- MUTATIONS ---------------- */

  const [sendInterest, { isLoading: sendingInterest }] =
    useSendInterestMutation();

  const [shortListProfile, { isLoading: shortListing }] =
    useShortListProfileMutation();

  const [removeShortList, { isLoading: removingShortlist }] =
    useRemoveShortListMutation();

  const [viewContact, { isLoading: viewingContact }] = useViewContactMutation();
  /* ---------------- LOCAL STATE (FIXED) ---------------- */

  const [localInterestSent, setLocalInterestSent] = useState(false);
  const [localShortlisted, setLocalShortlisted] = useState(false);

  /* ---------------- SYNC WITH MATCH ---------------- */

  useEffect(() => {
    setLocalInterestSent(match?.interestSent || false);
  }, [match?.interestSent]);

  useEffect(() => {
    setLocalShortlisted(match?.isShortlisted || false);
  }, [match?.isShortlisted]);

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
  const isInterestReceived = match?.interestReceived || false;
  const isMatched = match?.matched || false;
  const isRejected = match?.rejected || false;

  const isShortlisted = localShortlisted;

  /* ---------------- INTEREST BUTTON LOGIC ---------------- */

  const interestBtnDisabled =
    isInterestSent ||
    isInterestReceived ||
    isMatched ||
    isRejected ||
    sendingInterest;

  let interestBtnLabel = "Send Interest";

  if (sendingInterest) {
    interestBtnLabel = "Sending...";
  } else if (isMatched) {
    interestBtnLabel = "Matched";
  } else if (isInterestReceived) {
    interestBtnLabel = "Interest Received";
  } else if (isInterestSent) {
    interestBtnLabel = "Interest Sent";
  } else if (isRejected) {
    interestBtnLabel = "Rejected";
  }

  /* ---------------- ACTIONS ---------------- */

  const handleSendInterest = async () => {
    if (!user?._id) {
      toast.error("Please login again");
      return;
    }
    if (!match?.userId) {
      toast.error("Invalid profile");
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
      handlePremiumError(err, navigate);
    }
  };

  /* -------- SHORTLIST FIX -------- */

  const handleShortlist = async () => {
    try {
      const res = await shortListProfile(match.userId).unwrap();
      toast.success(res?.message);
      setLocalShortlisted(true);
    } catch (err) {
      toast.error(err?.data?.message);
    }
  };

  const handleRemoveShortlist = async () => {
    try {
      const res = await removeShortList(match.userId).unwrap();
      toast.success(res?.message);
      setLocalShortlisted(false);
    } catch (err) {
      toast.error(err?.data?.message);
    }
  };

  const handleViewPhone = async () => {
    try {
      const res = await viewContact(match.userId).unwrap();

      setPhoneData(res.contact);
      setShowPopup(true);

      toast.success(`Remaining: ${res.remaining}`);
    } catch (err) {
      handlePremiumError(err, navigate);
    }
  };

  // const handleMessage = async () => {
  //   try {
  //     if (!user?._id) {
  //       toast.error("Please login again");
  //       return;
  //     }

  //     if (!match?.userId) {
  //       toast.error("Invalid profile");
  //       return;
  //     }

  //     navigate(`/profile/chats/chatpage/${match.userId}`);
  //   } catch (err) {
  //     handlePremiumError(err, navigate);
  //   }
  // };
  /* ---------------- SAFETY ---------------- */

  if (!match) {
    return <p className="text-sm text-gray-500">Loading profile...</p>;
  }

  /* ---------------- UI (UNCHANGED) ---------------- */

  return (
    <>
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
            alt="profile"
            className="w-full object-cover object-top h-full max-sm:border-b bg-amber-400 border-gray-300"
          />
        </Link>

        {/* DETAILS */}
        <div className="p-3 px-2 w-2/3 max-xl:w-1/2 max-sm:w-full">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold">{match?.fullName}</h3>

            <span className="text-gray-600">{age}</span>
          </div>

          <p className="text-sm mt-1">
            <span className="font-semibold text-amber-500">Compatibility:</span>{" "}
            {match?.matchPercentage || 0}%
          </p>

          {/* INFO */}
          <div className="flex flex-wrap gap-1 py-4">
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
            <div className="grid grid-cols-2 gap-2">
              {/* INTEREST */}
              <ActionBtn
                label={interestBtnLabel}
                icon={<Heart size={18} />}
                color={
                  isMatched
                    ? "green"
                    : isInterestReceived
                      ? "blue"
                      : isInterestSent
                        ? "gray"
                        : "rose"
                }
                disabled={interestBtnDisabled}
                onClick={!interestBtnDisabled ? handleSendInterest : undefined}
              />

              <ActionBtn
                label="Message"
                icon={<MessageSquare size={18} />}
                color="blue"
                onClick={() =>
                  navigate(`/profile/chats/chatpage/${match.userId}`)
                }
                // onClick={handleMessage}
              />

              {showShortlist && (
                <ActionBtn
                  label={isShortlisted ? "Shortlisted" : "Shortlist"}
                  icon={<Star size={18} />}
                  color={isShortlisted ? "gray" : "amber"}
                  disabled={isShortlisted || shortListing}
                  onClick={!isShortlisted ? handleShortlist : undefined}
                />
              )}

              {showRemoveShortlist && isShortlisted && (
                <ActionBtn
                  label="Remove"
                  icon={<Star size={18} />}
                  color="gray"
                  disabled={removingShortlist}
                  onClick={handleRemoveShortlist}
                />
              )}

              <ActionBtn
                label={viewingContact ? "Opening..." : "View Phone"}
                icon={<PhoneCall size={18} />}
                color="green"
                disabled={viewingContact}
                onClick={handleViewPhone}
              />

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

      {showPopup && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-80 shadow-lg relative">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-3 text-gray-500"
            >
              ✕
            </button>

            <h2 className="text-lg font-semibold text-center mb-4">
              Contact Details
            </h2>

            <div className="text-center space-y-2">
              <p className="text-green-600 font-bold text-lg">
                {user?.mobile || "No phone available"}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

/* INFO */
const Info = ({ value }) => {
  if (!value) return null;

  return (
    <span className="text-sm text-gray-600 px-2 py-1 border rounded-lg bg-gray-50">
      {value}
    </span>
  );
};

/* BUTTON */
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
      disabled={disabled}
      onClick={onClick}
      className={`flex items-center cursor-pointer justify-center gap-2 text-xs font-medium p-2 rounded-lg transition ${
        disabled ? disabledStyle : colors[color]
      }`}
    >
      {icon}
      {label}
    </button>
  );
};

export default ProfileCard;
