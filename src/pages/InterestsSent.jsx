import { profiles } from "../data/profilesData";
import ProfileListPage from "./ProfileListPage";

const InterestsSent = () => {
  const sentInterests = profiles.filter(
    (item) =>
      item.status === "interest" &&
      item.interestType === "sent"
  );

  return (
    <ProfileListPage
      title="Interests Sent"
      profiles={sentInterests}
      showBtns={true}
    />
  );
};

export default InterestsSent;
