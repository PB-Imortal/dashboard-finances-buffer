import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";

import HomePage from "../pages/HomePage";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";
import LoginPage from "../pages/LoginPage";
import SignInPage from "../pages/SigninPage";

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
        element: <div>Statement</div>,
      },
    ],
  },
  { path: "/login", element: <LoginPage /> },
  { path: "/signin", element: <SignInPage /> },
  { path: "/profile", element: <Profile /> },
  // { path: "/statement", elment: <Statement /> },
]);
