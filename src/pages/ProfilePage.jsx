import React, { useEffect } from "react";
import SideNav from "../components/SideNav";
import { Outlet, useLocation } from "react-router-dom";
import ProfileLoader from "../components/ProfileLoader";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

const ProfilePage = () => {
  const {loading}= useSelector((state)=>state.user)
  const isMobile= useMediaQuery({maxWidth:768})
 
  return (
  
      <div className=" mx-auto flex h-[calc(100vh-10px)]  bg-white items-start justify-center ">
     {
 !isMobile &&  <div className="  h-full bg-white  shadow-sm sticky top-17  w-1/7 max-xl:w-2/7">
        <SideNav />
        </div>
     }  
       

        <div className="w-6/7 max-xl:w-8/7 h-full overflow-x-hidden  custom-scrollbar  overflow-y-scroll   relative
        " >
       
        {
          loading &&  <ProfileLoader/>
        }
          <Outlet/>
        </div>
      </div>
   
  );
};

export default ProfilePage;
