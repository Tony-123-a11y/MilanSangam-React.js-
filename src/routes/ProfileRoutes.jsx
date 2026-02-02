import { lazy } from "react";

const Matches = lazy(() => import("../components/Matches"));
const ActivityContent = lazy(() => import("../components/ActivityContent"));
const SearchContent = lazy(() => import("../components/SearchContent"));
const EditProfile = lazy(() => import("../components/EditProfile"));
const MyProfile = lazy(() => import("../components/MyProfile"));

const AcceptedProfiles = lazy(() => import("../pages/AcceptedProfiles"));
const RejectedProfiles = lazy(() => import("../pages/RejectedProfile"));
const ShortListedProfiles = lazy(() =>
  import("../pages/ShortListedProfiles")
);

const InterestsReceived = lazy(() => import("../pages/InterestsReceived"));
const InterestsSent = lazy(() => import("../pages/InterestsSent"));

const ChatLayout = lazy(() => import("../pages/Chat/ChatLayout"));
const ChatStartPage = lazy(() => import("../pages/Chat/ChatStartPage"));
const ChatPage = lazy(() => import("../components/ChatPage"));

export const profileRoutes = [
  /* DEFAULT PROFILE PAGE */
  { index: true, element: <Matches /> },

  /* NAVBAR DROPDOWN → SAME PAGE, DIFFERENT FILTER */
  { path: "profiles/:filter", element: <Matches /> },

  { path: "activity", element: <ActivityContent /> },
  { path: "search", element: <SearchContent /> },
  { path: "editProfile", element: <EditProfile /> },
  { path: "myProfile", element: <MyProfile /> },

  { path: "acceptProfile", element: <AcceptedProfiles /> },
  { path: "rejectProfile", element: <RejectedProfiles /> },
  { path: "shortListProfile", element: <ShortListedProfiles /> },

  { path: "interests-received", element: <InterestsReceived /> },
  { path: "interests-sent", element: <InterestsSent /> },

  {
    path: "chats",
    element: <ChatLayout />,
    children: [
      { index: true, element: <ChatStartPage /> },
      { path: "chatpage/:userId", element: <ChatPage /> },
    ],
  },
];
