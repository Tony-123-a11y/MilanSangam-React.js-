import { Outlet } from "react-router-dom";
import ProfilePage from "../pages/ProfilePage";

const ProfileLayout = () => {
  return <ProfilePage><Outlet /></ProfilePage>;
};

export default ProfileLayout;
