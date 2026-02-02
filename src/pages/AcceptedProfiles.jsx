import { profiles } from "../data/profilesData";
import ProfileListPage from "./ProfileListPage";

const AcceptedProfiles = () => {
  // console.log(profiles)
  const acceptedProfiles = profiles.filter(
    (item) => item.status === "accepted"
  );
  // console.log(acceptedProfiles)

  return (
    <ProfileListPage
      title="Accepted Profiles"
      profiles={acceptedProfiles}
      showBtns={true}
    />
  );
};

export default AcceptedProfiles;
