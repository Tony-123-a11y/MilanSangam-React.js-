import React, { useContext, useEffect } from "react";
import Navbar from "./components/Navbar";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import BlogDetails from "./pages/BlogDetails";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ProfilePage from "./pages/ProfilePage";
import Matches from "./components/Matches";
import ActivityContent from "./components/ActivityContent";
import SearchContent from "./components/SearchContent";
import EditProfile from "./components/EditProfile";
import VerifyEmail from "./pages/auth/Verify_Email";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import ProtectedRoute from "./components/ProtectedRoute";
import Packages from "./pages/Packages";
import MyProfile from "./components/MyProfile";
import ProfileDetails from "./components/ViewProfile";
import BottomNav from "./components/BottomNav";
import IntellectualMatch from "./components/IntellectualMatch";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./Features/Userslice";
import AcceptedProfiles from "./pages/AcceptedProfiles";
import RejectedProfiles from "./pages/RejectedProfile";
import ShortListedProfiles from "./pages/ShortListedProfiles";
import ReportProfileForm from "./pages/ReportProfileForm";
import ChatLayout from "./pages/Chat/ChatLayout";
import ChatStartPage from "./pages/Chat/ChatStartPage";
import ChatPage from "./components/ChatPage";
import { connectSocket } from "./Features/SocketSlice";


const ScrollToTop = () => {
  const { pathname } = useLocation();


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
};



const App = () => {
  const {user,isAuthenticated,token}= useSelector((state)=>state.user)
  const dispatch=useDispatch()
 useEffect(()=>{
  if(token){
 dispatch(fetchUser())
  }
 },[token])


useEffect(() => {
if(user){
   dispatch(connectSocket(user._id))
}
}, [user])

  return (
    <>
      <ScrollToTop />
      <Navbar />
     
   
      <main className="antialiased">
        <Routes>
          <Route path="/"   element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={ !isAuthenticated ? <Login /> : <Navigate to={'/profile'}/>} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/blog" element={<BlogDetails />} />
          <Route path="/packages" element={<Packages/>}/>
          <Route path="/profileDetails" element={<ProfileDetails/>}/>
          <Route path="/intellectualMatch" element={<IntellectualMatch/>}/>
          <Route path="/reportProfile" element={<ReportProfileForm/>}/>
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
             </ProtectedRoute>
            }
          >
            <Route index  element={<Matches />} />
            <Route path="activity" element={<ActivityContent />} />
            <Route path="search" element={<SearchContent />} />
            <Route path="editProfile" element={<EditProfile />} />
            <Route path="chats" element={<ChatLayout/>}>
              <Route index  element={<ChatStartPage/>}/>
              <Route path="chatpage/:userId" element={<ChatPage/>}/>
            </Route>
            <Route path="myProfile" element={<MyProfile/>}/>
            <Route path="acceptProfile" element={<AcceptedProfiles/>}/>
            <Route path="rejectProfile" element={<RejectedProfiles/>}/>
            <Route path="shortListProfile" element={<ShortListedProfiles/>}/>
          </Route>

          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
