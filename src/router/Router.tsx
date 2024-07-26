import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";

import HomePage from "../pages/HomePage";
import Statement from "../components/_organisms/Statement";
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
        element: <HomePage />,
      },
      {
        path: "/statement",
        element: <Statement />,
      },
    ],
  },
  { path: "/login", element: <LoginPage /> },
  { path: "/signin", element: <SignInPage /> },
  { path: "/profile", element: <Profile /> },
  { path: "/setting", element: <SettingPage /> },
]);
