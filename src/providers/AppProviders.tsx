import { RouterProvider } from "react-router-dom";
import { router } from "../router/Router";
import AuthContextProvider from "./context/AuthContext";

export default function AppProviders() {
  return (
    <>
      {/* Other providers */}
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </>
  );
}
