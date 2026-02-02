import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const BlogDetails = lazy(() => import("../pages/BlogDetails"));
const Packages = lazy(() => import("../pages/Packages"));
const IntellectualMatch = lazy(() =>
  import("../components/IntellectualMatch")
);
const ReportProfileForm = lazy(() =>
  import("../pages/ReportProfileForm")
);

export const publicRoutes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/blog", element: <BlogDetails /> },
  { path: "/packages", element: <Packages /> },
  { path: "/intellectualMatch", element: <IntellectualMatch /> },
  { path: "/reportProfile", element: <ReportProfileForm /> },
];
