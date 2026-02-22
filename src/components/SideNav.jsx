import React from "react";
import { CgProfile } from "react-icons/cg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { SiActivitypub } from "react-icons/si";
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineModeEdit } from "react-icons/md";
import { BsChatSquareDots } from "react-icons/bs";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { CiCircleCheck } from "react-icons/ci";
import { RiUserReceivedLine } from "react-icons/ri";
import { RxCrossCircled } from "react-icons/rx";
import { TbUserShare } from "react-icons/tb";
import { LuBrain } from "react-icons/lu";
import { FiLogOut } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../Features/Userslice";

const SideNav = () => {
  const { profileData } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ✅ CLEAN & UNIQUE ROUTES (no duplicates)
  const links = [
    {
      icon: <LiaUserFriendsSolid />,
      text: "Matches",
      path: "/profile",
    },
    {
      icon: <SiActivitypub />,
      text: "Activity",
      path: "/profile/activity",
    },
    {
      icon: <IoSearchSharp />,
      text: "Search",
      path: "/profile/search",
    },
    {
      icon: <CgProfile />,
      text: "My Profile",
      path: "/profile/myProfile",
    },
    {
      icon: <MdOutlineModeEdit />,
      text: "Edit Profile",
      path: "/profile/editProfile",
    },
    {
      icon: <BsChatSquareDots />,
      text: "Chats / Messages",
      path: "/profile/chats",
    },
    {
      icon: <CiCircleCheck />,
      text: "Accepted Profiles",
      path: "/profile/acceptProfile",
    },
    {
      icon: <RxCrossCircled />,
      text: "Rejected Profiles",
      path: "/profile/rejectProfile",
    },
    {
      icon: <RiUserReceivedLine />,
      text: "Interests Received",
      path: "/profile/interests-received",
    },
    {
      icon: <TbUserShare />,
      text: "Interests Sent",
      path: "/profile/interests-sent",
    },
    {
      icon: <MdOutlineWorkspacePremium />,
      text: "Packages",
      path: "/packages",
    },
    {
      icon: <LuBrain />,
      text: "Intellectual Match",
      path: "/intellectualMatch",
    },
  ];

  const handleLogout = () => {
    dispatch(logOutUser());
    navigate("/");
  };

  return (
    <div className="py-10 pb-20 px-2 h-full overflow-y-scroll custom-scrollbar bg-amber-100 flex flex-col">
      
      {/* Profile Avatar */}
      <div className="px-4 flex flex-col items-center">
        <Link
          to="/profile/myProfile"
          className="w-16 h-16 rounded-full border bg-gray-100 flex items-center justify-center"
        >
          {profileData?.profilePhotos?.[0] ? (
            <img
              src={profileData.profilePhotos[0]}
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover object-top"
            />
          ) : (
            <CgProfile className="text-4xl text-gray-400" />
          )}
        </Link>

        <h1 className="text-xl font-semibold mt-4 text-center">
          {profileData?.personalInfo?.fullName}
        </h1>
      </div>

      <hr className="my-5 w-[90%] mx-auto border-gray-300" />

      {/* Navigation Links */}
      <div className="space-y-1 font-secondaryHead">
        {links.map((link) => (
          <NavLink
            key={link.text}
            to={link.path}
            end={link.path === "/profile"} // ✅ VERY IMPORTANT
            className={({ isActive }) =>
              `px-4 py-2.5 flex items-center gap-4 rounded-md transition
              ${
                isActive
                  ? "bg-primary text-white"
                  : "hover:bg-amber-200 text-gray-800"
              }`
            }
          >
            <span className="text-xl">{link.icon}</span>
            <span className="capitalize">{link.text}</span>
          </NavLink>
        ))}
      </div>

      {/* Logout */}
      <div className="mt-auto px-2">
        <button
          onClick={handleLogout}
          className="w-full mt-4 px-4 py-2.5 flex items-center gap-3 rounded-lg text-red-500 font-semibold hover:bg-red-100 transition"
        >
          <FiLogOut className="text-xl" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default SideNav;
