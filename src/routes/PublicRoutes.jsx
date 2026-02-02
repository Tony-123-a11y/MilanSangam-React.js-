import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const BlogDetails = lazy(() => import("../pages/BlogDetails"));
const Packages = lazy(() => import("../pages/Packages"));
const Support = lazy(() => import("../pages/Support"));
const Terms = lazy(() => import("../pages/Terms"));
const Privacy = lazy(() => import("../pages/Privacy"));
const IntellectualMatch = lazy(() =>
  import("../components/IntellectualMatch")
);
const ReportProfileForm = lazy(() =>
  import("../pages/ReportProfileForm")
);

export const publicRoutes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
   { path: "/contact", element: <Contact /> },
  { path: "/blog", element: <BlogDetails /> },
  { path: "/packages", element: <Packages /> },
  { path: "/intellectualMatch", element: <IntellectualMatch /> },
  { path: "/reportProfile", element: <ReportProfileForm /> },
    { path: "/support", element: <Support /> },
  { path: "/terms", element: <Terms /> },
  { path: "/privacy", element: <Privacy /> },
];
