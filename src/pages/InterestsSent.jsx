import { useSelector } from "react-redux";
import ProfileListPage from "./ProfileListPage";
import { useGetSentInterestsQuery } from "../Redux/apiSlice";

const InterestsSent = () => {
  const user = useSelector((state) => state.user.user);
  const userId = user?._id;

  const { data, isLoading, error } = useGetSentInterestsQuery(userId, {
    skip: !userId,
  });
  // console.log(data)
  if (isLoading) return <p>Loading interests...</p>;
  if (error) return <p>Error loading interests</p>;

  const profiles =
    data?.interests.map((profile) => ({
      ...profile,
      interestSent: true,
    })) || [];

  return (
    <ProfileListPage
      title="Interests Sent"
      profiles={profiles}
      showBtns={true}
    />
  );
};

export default InterestsSent;
