import { Outlet } from "react-router-dom";
import NavBar from "../components/_molecules/navbar/NavBar";
import SideBar from "../components/_molecules/SideBar/SideBar";
import DeskTopSideBar from "../components/_molecules/SideBar/DeskTopSideBar";
import { useScreenSize } from "../hook/useHooks";
import { StatementContextProvider } from "../providers/context/StatementContextProvider";

export default function RootLayout() {
  const screenSize = useScreenSize();
  return (
    <main className="flex h-screen bg-bggrey dark:bg-dkrbgblue">
      <div>
        {screenSize.width <= 1023 ? (
          <SideBar styles="sm:flex md:flex lg:hidden xl:hidden" />
        ) : (
          <DeskTopSideBar styles="sm:hidden md:hidden lg:flex dark:bg-dkrbgblue" />
        )}
      </div>
      <StatementContextProvider>
        <div className="flex flex-col flex-1 max-w-full dark:bg-dkrbgblue">
          <NavBar />
          <div className="sm: -ml-14 md:ml-0 dark:bg-dkrbgblue">
            <Outlet />
          </div>
        </div>
      </StatementContextProvider>
    </main>
  );
}