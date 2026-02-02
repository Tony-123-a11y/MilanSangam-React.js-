import { profiles } from "../data/profilesData";
import ProfileListPage from "./ProfileListPage";

const RejectedProfiles = () => {
  const rejectedProfiles = profiles.filter(
    (item) => item.status === "rejected"
  );

  return (
    <ProfileListPage
      title="Rejected Profiles"
      profiles={rejectedProfiles}
      showBtns={false}
    />
  );
};

export default RejectedProfiles;
