import { Outlet } from "react-router-dom";
import NavBar from "../components/_molecules/NavBar";
import {
  default as DeskTopSideBar,
  default as SideBar,
} from "../components/SideBar/SideBar";
import { useScreenSize } from "../hook/useHooks";

export default function RootLayout() {
  const screenSize = useScreenSize();
  return (
    <main className="flex bg-bggrey">
      <div>
        {screenSize.width < 1023 ? (
          <SideBar styles="sm:flex md:flex lg:hidden xl:hidden " />
        ) : (
          <DeskTopSideBar styles="sm:hidden md:hidden lg:flex" />
        )}
      </div>
      <div className="flex flex-col flex-1 ">
        <NavBar />
        <Outlet />
      </div>
    </main>
  );
}
