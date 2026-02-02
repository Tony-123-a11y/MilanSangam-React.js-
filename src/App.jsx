import React, { Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

/* Layout */
import MainLayout from "./layouts/MainLayout";
import ProfileLayout from "./layouts/ProfileLayout";

/* Common */
import ProtectedRoute from "./components/ProtectedRoute";
import PageLoader from "./components/PageLoader";
import NotFound from "./pages/NotFound";

/* Route configs */
import { publicRoutes } from "./routes/PublicRoutes";
import { authRoutes } from "./routes/AuthRoutes";
import { profileRoutes } from "./routes/ProfileRoutes";

/* Redux */
import { fetchUser } from "./Features/Userslice";
import { connectSocket } from "./Features/SocketSlice";
import ScrollToTop from "./components/ScrollToTop";

/* Helper to render nested routes */
const renderRoutes = (routes) =>
  routes.map((route, index) => (
    <Route key={index} {...route}>
      {route.children && renderRoutes(route.children)}
    </Route>
  ));

const App = () => {
  const { token, user, isAuthenticated } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  /* Fetch user on refresh */
  useEffect(() => {
    if (token) {
      dispatch(fetchUser());
    }
  }, [token, dispatch]);

  /* Connect socket after user load */
  useEffect(() => {
    if (user?._id) {
      dispatch(connectSocket(user._id));
    }
  }, [user, dispatch]);

  return (
    <Suspense fallback={<PageLoader />}>
      <ScrollToTop />

      <Routes>
        {/* 🔥 MAIN LAYOUT — NAVBAR + FOOTER ON ALL PAGES */}
        <Route element={<MainLayout />}>
          {/* Public Pages */}
          {renderRoutes(publicRoutes)}

          {/* Auth Pages (Login / Register etc.) */}
          {renderRoutes(authRoutes(isAuthenticated))}

          {/* Profile Pages (Protected) */}
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

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App;
