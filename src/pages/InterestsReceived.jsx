import { useSelector } from "react-redux";
import ProfileListPage from "./ProfileListPage";
import {
  useGetReceivedInterestsQuery,
  useAcceptInterestMutation,
  useRejectInterestMutation,
} from "../Redux/apiSlice";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";

const InterestsReceived = () => {
  const user = useSelector((state) => state.user.user);
  const userId = user?._id;

  const { data, isLoading, error } = useGetReceivedInterestsQuery(userId, {
    skip: !userId,
  });

  const [acceptInterest] = useAcceptInterestMutation();
  const [rejectInterest] = useRejectInterestMutation();

  // ✅ LOCAL STATE
  const [profiles, setProfiles] = useState([]);

  // ✅ SET INITIAL DATA
  useEffect(() => {
    if (data?.interests) {
      const formatted = data.interests.map((profile) => ({
        ...profile,
        interestSent: false,
        interestReceived: true,
      }));

      setProfiles(formatted);
    }
  }, [data]);

  if (isLoading) return <p>Loading received interests...</p>;

  if (error) return <p>Error loading received interests</p>;

  // ✅ ACCEPT HANDLER
  const handleAccept = async (profile) => {
    try {
      const res = await acceptInterest({
        senderId: profile.userId,
        receiverId: userId,
      }).unwrap();

      toast.success(res.message);

      // update UI
      setProfiles((prev) =>
        prev.map((p) =>
          p.userId === profile.userId
            ? {
                ...p,
                interestReceived: false,
                interestSent: false,
                matched: true,
              }
            : p
        )
      );
    } catch (err) {
      toast.error(err.data?.message || "Failed to accept interest");
    }
  };

  // ✅ REJECT HANDLER
  const handleReject = async (profile) => {
    try {
      const res = await rejectInterest({
        senderId: profile.userId,
        receiverId: userId,
      }).unwrap();

      toast.success(res.message);

      // remove from list
      setProfiles((prev) =>
        prev.filter((p) => p.userId !== profile.userId)
      );
    } catch (err) {
      toast.error(err.data?.message || "Failed to reject interest");
    }
  };

  return (
    <ProfileListPage
      title="Interests Received"
      profiles={profiles}
      showBtns={true}
      extraActions={{ handleAccept, handleReject }}
    />
  );
};

export default InterestsReceived;
