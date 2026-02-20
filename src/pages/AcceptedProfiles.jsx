import ProfileListPage from "./ProfileListPage";
import { useSelector } from "react-redux";
import { useGetAcceptedProfilesQuery } from "../Redux/apiSlice";

const AcceptedProfiles = () => {
  const user = useSelector((state) => state.user.user);

  const { data, isLoading, isError } = useGetAcceptedProfilesQuery(user?._id, {
    skip: !user?._id,
  });

  const acceptedProfiles = data?.profiles || data?.data || [];

  if (isLoading) {
    return <p className="p-4">Loading accepted profiles...</p>;
  }

  if (isError) {
    return <p className="p-4 text-red-500">Failed to load accepted profiles</p>;
  }

  return (
    <ProfileListPage
      title="Accepted Profiles"
      profiles={acceptedProfiles}
      showBtns={true}
    />
  );
};

export default AcceptedProfiles;
