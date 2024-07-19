import { RouterProvider } from "react-router-dom";
import { router } from "../router/Router";

export default function AppProvider() {
  return (
    <>
      {/* Other providers */}
      <RouterProvider router={router} />
    </>
  );
}
