import { lazy } from "react";
import { Navigate } from "react-router-dom";

const Login = lazy(() => import("../pages/auth/Login"));
const Register = lazy(() => import("../pages/auth/Register"));
const VerifyEmail = lazy(() => import("../pages/auth/Verify_Email"));
const ForgotPassword = lazy(() => import("../pages/auth/ForgotPassword"));
const ResetPassword = lazy(() => import("../pages/auth/ResetPassword"));

export const authRoutes = (isAuthenticated) => [
  {
    path: "/login",
    element: !isAuthenticated ? <Login /> : <Navigate to="/profile" />,
  },
  { path: "/register", element: <Register /> },
  { path: "/verify-email", element: <VerifyEmail /> },
  { path: "/forgot-password", element: <ForgotPassword /> },
  { path: "/reset-password/:token", element: <ResetPassword /> },
];
