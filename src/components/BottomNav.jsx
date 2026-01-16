import React from 'react'
import { BsChatSquareDots } from 'react-icons/bs';
import { GiUpgrade } from 'react-icons/gi';
import { IoSearchSharp } from 'react-icons/io5';
import { LiaUserFriendsSolid } from 'react-icons/lia';
import { MdOutlineModeEdit } from 'react-icons/md';
import { SiActivitypub } from 'react-icons/si';
import { NavLink } from 'react-router-dom';

const BottomNav = () => {
   const links = [
      {
        icon: <LiaUserFriendsSolid />,
        text: "matches",  
        path: "/profile",
      },
      {
        icon: <SiActivitypub />,
        text: "activity",
        path: "/profile/activity",
      },
      {
        icon: <IoSearchSharp />,
        text: "search",
        path: "/profile/search",
      },
  
    
      {
        icon: <BsChatSquareDots />,
        text: "Messenger",
        path: "/profile/chats",
      },
      {
        icon: <GiUpgrade />,
        text: " Upgrade",
        path: "/packages",
      },
     
    ];
     const linkClasses = ({ isActive }) => {
    return `py-2.5 transition duration-75 flex-grow  px-3 flex flex-col items-center justify-start     ${
      isActive ? "bg-primary text-white" : "hover:bg-amber-100"
    }
              `;
  };
  return (
    <div className='max-md:block hidden fixed bottom-0 left-0  overflow-hidden rounded-t-md w-full z-100'>
       <ul className='flex items-center justify-center   bg-white'>
         {links.map((link) => {
          return (
            <NavLink
              to={link.path}
              key={link.text}
              end={link.path === "/profile"}
              className={linkClasses}
            >
              <span className="">{link.icon}</span>
              <span className="capitalize text-sm">{link.text}</span>
            </NavLink>
          );
        })}
       </ul>
    </div>
  )
}

export default BottomNav
