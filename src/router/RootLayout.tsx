import { Outlet } from "react-router-dom";
import NavBar from "../components/_molecules/navbar/NavBar";
import SideBar from "../components/SideBar/SideBar";
import DeskTopSideBar from "../components/SideBar/DeskTopSideBar";
import { useScreenSize } from "../hook/useHooks";

export default function RootLayout() {
  const screenSize = useScreenSize();
  return (
    <main className="flex bg-bggrey">
      <div>
        {screenSize.width <= 1023 ? (
          <SideBar styles="sm:flex md:flex lg:hidden xl:hidden" />
        ) : (
          <DeskTopSideBar styles="sm:hidden md:hidden lg:flex" />
        )}
      </div>
      <div className="flex flex-col flex-1 ">
        <NavBar />
      <div className="sm: -ml-14 md:ml-0">
        <Outlet />
      </div>
      </div>
    </main>
  );
}