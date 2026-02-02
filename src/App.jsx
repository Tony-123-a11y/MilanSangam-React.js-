import React, { Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

/* Layouts */
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import ProfileLayout from "./layouts/ProfileLayout";

/* Common */
import ProtectedRoute from "./components/ProtectedRoute";
import PageLoader from "./components/PageLoader";
import NotFound from "./pages/NotFound";

/* Route configs */
import { publicRoutes } from "./routes/publicRoutes";
import { authRoutes } from "./routes/authRoutes";
import { profileRoutes } from "./routes/profileRoutes";

/* Redux */
import { fetchUser } from "./Features/Userslice";
import { connectSocket } from "./Features/SocketSlice";

/* Helper to render nested routes */
const renderRoutes = (routes) =>
  routes.map((route, index) => (
    <Route key={index} {...route}>
      {route.children && renderRoutes(route.children)}
    </Route>
  ));

const App = () => {
  const { token, user, isAuthenticated } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();

  /* Fetch user on refresh */
  useEffect(() => {
    if (token) dispatch(fetchUser());
  }, [token, dispatch]);

  /* Connect socket after user load */
  useEffect(() => {
    if (user?._id) dispatch(connectSocket(user._id));
  }, [user, dispatch]);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>

        {/* ================= MAIN LAYOUT (Navbar + Footer) ================= */}
        <Route element={<MainLayout />}>

          {/* Public Pages */}
          {renderRoutes(publicRoutes)}

          {/* Profile Pages (Navbar SHOULD show here) */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfileLayout />
              </ProtectedRoute>
            }
          >
            {renderRoutes(profileRoutes)}
          </Route>

        </Route>

        {/* ================= AUTH LAYOUT (NO Navbar) ================= */}
        <Route element={<AuthLayout />}>
          {renderRoutes(authRoutes(isAuthenticated))}
        </Route>

        {/* ================= 404 ================= */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </Suspense>
  );
};

export default App;
