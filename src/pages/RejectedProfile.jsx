import ProfileListPage from "./ProfileListPage";
import { useSelector } from "react-redux";
import { useGetRejectedProfilesQuery } from "../Redux/apiSlice";

const RejectedProfiles = () => {
  const user = useSelector((state) => state.user.user);

  const { data, isLoading, isError } = useGetRejectedProfilesQuery(user?._id, {
    skip: !user?._id,
  });

  const rejectedProfiles = data?.profiles || data?.data || [];

  if (isLoading) {
    return <p className="p-4">Loading rejected profiles...</p>;
  }

  if (isError) {
    return <p className="p-4 text-red-500">Failed to load rejected profiles</p>;
  }
  return (
    <ProfileListPage
      title="Rejected Profiles"
      profiles={rejectedProfiles}
      showBtns={true}
    />
  );
};

export default RejectedProfiles;
