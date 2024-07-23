import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/loginPage";
import SignInPage from "../pages/SignInPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  { path: "/login", element: <LoginPage /> },
  { path: "/signin", element: <SignInPage /> },
]);
