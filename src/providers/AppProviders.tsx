import { RouterProvider } from "react-router-dom";
import { router } from "../router/Router";
import AuthContextProvider from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";

export default function AppProviders() {
  return (
    <>
      {/* Other providers */}
      <ThemeProvider>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
      </ThemeProvider>
    </>
  );
}
