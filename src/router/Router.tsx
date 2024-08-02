import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import ProtectedRoute from "./ProtectedRoute";

import HomePage from "../pages/HomePage";
import Statement from "../components/_organisms/Statement/Statement";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";
import LoginPage from "../pages/LoginPage";
import SignInPage from "../pages/SigninPage";
import SettingPage from "../pages/SettingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute children={<HomePage />} redirectPath={"/login"} />
        ),
      },
      {
        path: "/statement",
        element: (
          <ProtectedRoute children={<Statement />} redirectPath={"/login"} />
        ),
      },
    ],
  },
  { path: "/login", element: <LoginPage /> },
  { path: "/signin", element: <SignInPage /> },
  {
    path: "/profile",
    element: <ProtectedRoute children={<Profile />} redirectPath={"/login"} />,
  },
  {
    path: "/setting",
    element: (
      <ProtectedRoute children={<SettingPage />} redirectPath={"/login"} />
    ),
  },
]);
