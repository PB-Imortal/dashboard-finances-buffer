/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

import { lazy, Suspense } from "react";

const Home = lazy(() => import("../pages/HomePage"));
const Statement = lazy(() => import("../components/_organisms/Statement/Statement"));
const Profile = lazy(() => import("../pages/Profile"));
const Notification = lazy(() => import("../pages/NotificationPage"));
const Setting = lazy(() => import("../pages/SettingPage"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Login = lazy(() => import("../pages/LoginPage"));
const SignIn = lazy(() => import("../pages/SigninPage"));
const RootLayout = lazy(() => import("./RootLayout"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense>
        <RootLayout />
      </Suspense>
    ),
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ProtectedRoute children={<Home />} redirectPath={"/login"} />
          </Suspense>
        ),
      },
      {
        path: "/statement",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ProtectedRoute children={<Statement />} redirectPath={"/login"} />,
          </Suspense>
        ),
      },
      {
        path: "/profile",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ProtectedRoute children={<Profile />} redirectPath={"/login"} />,
          </Suspense>
        ),
      },
      {
        path: "/notifications",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ProtectedRoute children={<Notification />} redirectPath={"/login"} />,
          </Suspense>
        ),
      },
      {
        path: "/setting",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ProtectedRoute children={<Setting />} redirectPath={"/login"} />,
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: (
      <Suspense>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/signin",
    element: (
      <Suspense>
        <SignIn />
      </Suspense>
    ),
  },
]);
