import { profiles } from "../data/profilesData";
import ProfileListPage from "./ProfileListPage";

const InterestsReceived = () => {
  const receivedInterests = profiles.filter(
    (item) =>
      item.status === "interest" &&
      item.interestType === "received"
  );

  return (
    <ProfileListPage
      title="Interests Received"
      profiles={receivedInterests}
      showBtns={false}
    />
  );
};

export default InterestsReceived;
