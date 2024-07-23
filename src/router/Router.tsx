import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/loginPage";
import Profile from "../pages/Profile";
import SignInPage from "../pages/signinPage";

import NotFound from "../pages/NotFound";

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
    ],
  },
  { path: "/login", element: <LoginPage /> },
  { path: "/signin", element: <SignInPage /> },
  { path: "/profile", element: <Profile /> },
  // { path: "/statement", elment: <Statement /> },
]);
