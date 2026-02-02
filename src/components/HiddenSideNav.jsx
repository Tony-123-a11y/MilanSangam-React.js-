import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { SiActivitypub } from "react-icons/si";
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineModeEdit } from "react-icons/md";
import { motion } from "framer-motion";
import { FiLogOut } from "react-icons/fi";
import { BsChatSquareDots } from "react-icons/bs";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { CiCircleCheck } from "react-icons/ci";
import { RiUserReceivedLine } from "react-icons/ri";
import { RxCrossCircled } from "react-icons/rx";
import { TbUserShare } from "react-icons/tb";
import { LuBrain } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../Features/Userslice";
const HiddenSideNav = ({ setShowNav }) => {
  const { profileData } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

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
    icon: <LiaUserFriendsSolid />,
    text: "Shortlisted Profiles",
    path: "/profile/shortListProfile",
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

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const panelVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0 },
    exit: { x: "-100%" },
  };

  const linkClasses = ({ isActive }) => {
    return `py-2.5       rounded-md transition duration-75  px-4 flex items-center justify-start gap-4    ${isActive ? "bg-primary text-white" : "hover:bg-amber-200"
      }`;
  };

  return (
    <div
      className=" fixed left-0 top-0 w-full  z-50 py-10  h-screen "
    >
      {/* Backdrop */}
      <motion.div
        className="absolute left-0 top-0 w-full h-full bg-black/60 backdrop-blur-sm"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.3 }}
        onClick={() => setShowNav(false)}
      />
      <motion.div
        className=" absolute left-0 top-0  bg-white w-[80%] pt-25 overflow-y-scroll h-full  custom-scrollbar px-4 py-4"
        variants={panelVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <Link
          to={"/profile/myProfile"}
          onClick={() => setShowNav(false)}
          className="rounded-full w-16 h-16 border  mx-auto border-gray-100 flex items-center justify-center bg-gray-100"
        >
          {profileData?.profilePic?.[0] ? (
            <img
              src={profileData.profilePic[0]}
              alt="Profile"
              className="rounded-full w-16 h-16 object-cover"
            />
          ) : (
            <CgProfile className="text-4xl text-gray-400" />
          )}
        </Link>

        <h1 className="text-2xl text-center leading-5 font-semibold mt-4">
          {profileData?.personalInfo?.fullName}
        </h1>
        <hr className="text-gray-300 mt-5 w-[90%] m-auto" />

        {links.map((link) => {
          return (
            <NavLink
              to={link.path}
              key={link.text}
              end={link.path === "/profile"}
              className={linkClasses}
              onClick={() => setShowNav(false)}
            >
              <span className="text-xl">{link.icon}</span>
              <span className="capitalize">{link.text}</span>
            </NavLink>
          );
        })}


        <div className="mt-auto">
          {/* <Link className="px-5 mt-4 flex items-center justify-start gap-2 text-white tracking-wide font-semibold text-lg rounded-lg py-2 bg-gradient-to-br from-orange-400 to-red-400 max-xl:text-base">
          <GiUpgrade className="text-xl" />
          <span>Upgrade to Pro</span>
        </Link> */}

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="mt-3 w-full cursor-pointer text-left px-5 py-2.5 flex items-center gap-2 rounded-lg text-red-500 font-semibold hover:bg-red-50 transition"
          >
            <FiLogOut className="text-xl" />
            <span>Logout</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default HiddenSideNav;
