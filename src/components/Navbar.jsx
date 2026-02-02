import { Link } from "react-router-dom";
import { FaUserCircle, FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { AiOutlineLogin } from "react-icons/ai";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/vivahLogo2.jpg";
import HiddenSideNav from "./HiddenSideNav";
import { AnimatePresence } from "framer-motion";
import { PersonStanding } from "lucide-react";
import { useSelector } from "react-redux";
import SideNav from "./SideNav";

const Navbar = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const [showNav, setshowNav] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  let closeTimer;
  return (
    <>
      <nav className="bg-white shadow-sm z-100 sticky top-0 left-0 w-full">
        <div className=" mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            to={isAuthenticated ? "/profile" : "/"}
            className="flex items-center gap-4"
          >
            <img src={logo} alt="Logo" className="w-11 font-['montserrat']" />
            <div>
              <h3 className="font-bold logo text-2xl tracking-wider text-amber-500 leading-5 max-sm:text-xl">
                Milan Sangam
              </h3>
              <p className="text-xs text-amber-600  ml-1 mt-1 capitalize max-sm:text-[11px]">
                When Hearts Align, Sanyog Happens
              </p>
            </div>
          </Link>

          {/* Right Nav Items */}
          <div className="flex gap-4 items-center">
            {/* Static links (authenticated only) */}
            {isAuthenticated && (
              <div className="hidden lg:flex items-center space-x-8 max-xl:space-x-4 text-gray-700 text-sm  font-medium">
                <Link to="/profile">Home</Link>

                {/* Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => {
                    clearTimeout(closeTimer);
                    setOpenDropdown(true);
                  }}
                  onMouseLeave={() => {
                    closeTimer = setTimeout(() => {
                      setOpenDropdown(false);
                    }, 150);
                  }}
                >
                  <span className="flex items-center gap-1 cursor-pointer select-none">
                    Relevent Profile ▾
                  </span>

                  {openDropdown && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl rounded-md z-50">
                      <Link
                      to="/profile/profiles/under-25"
                        onClick={() => setOpenDropdown(false)}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Under 25 Profiles
                      </Link>

                      <Link
                       to="/profile/profiles/under-30"
                        onClick={() => setOpenDropdown(false)}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Under 30 Profiles
                      </Link>

                      <Link
                    to="/profile/profiles/under-35"
                        onClick={() => setOpenDropdown(false)}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Under 35 Profiles
                      </Link>

                      <Link
                       to="/profile/profiles/under-40"
                        onClick={() => setOpenDropdown(false)}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Under 40 Profiles
                      </Link>

                      <Link
                     to="/profile/profiles/divorce"
                        onClick={() => setOpenDropdown(false)}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Divorce Profiles
                      </Link>
                    </div>
                  )}
                </div>

                <Link to="/profile/search">Search Your Partner</Link>
                <Link to="/matches">Perfect Matches</Link>
                <Link to="/profile/shortListProfile">Shortlisted Profiles</Link>
                <Link to="/profile/chats">Messages/Chats</Link>
                <Link to="/packages">Packages</Link>
              </div>
            )}

            {/* Conditional Login/Profile Icon */}
            {isAuthenticated ? (
              <Link
                to="/profile"
                className="relative flex items-center gap-2 text-gray-700 transition"
              >
                <FaUserCircle className="text-2xl" />
              </Link>
            ) : (
              <div className="flex items-center justify-center gap-4">
                <Link
                  to="/"
                  className="relative flex max-sm:hidden items-center gap-2 border border-primary hover:bg-amber-500 hover:text-white bg-white  text-secondary px-6 py-1.5 rounded font-semibold transition"
                >
                  <PersonStanding fontSize={20} />
                  <span>Create your profile</span>
                </Link>
                <Link
                  to="/login"
                  className="relative flex items-center gap-2 border border-primary bg-amber-500 hover:bg-white text-white hover:text-secondary px-6 py-1.5 rounded font-semibold transition "
                >
                  <AiOutlineLogin fontSize={20} />
                  <span>Login</span>
                </Link>
              </div>
            )}

            {/* Mobile Menu Toggle */}
            {isAuthenticated && (
              <div className="md:hidden h-6">
                {!showNav ? (
                  <button onClick={() => setshowNav(true)}>
                    <FaBars className="text-2xl text-gray-700 hover:text-amber-500 transition" />
                  </button>
                ) : (
                  <button onClick={() => setshowNav(false)}>
                    <IoMdClose className="text-2xl text-gray-600 hover:text-red-500 transition" />
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Nav */}
      <AnimatePresence>
        {showNav && <HiddenSideNav setShowNav={setshowNav} />}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
