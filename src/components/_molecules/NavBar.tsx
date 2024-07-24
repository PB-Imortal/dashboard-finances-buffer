import ButtonComponent from "../_atoms/Button/Button";
import NotificationUpperbarIcon from "../common/svg/NotificationUpperBarIcon";
import SettingUpperbarIcon from "../common/svg/setting-upperbar-icon";
import { Link } from "react-router-dom";
import SearchIcon from "../common/svg/SearchIcon";
import SideBar from "../SideBar/SideBar";
import FormInput from "../_atoms/Input/FormInput";
import DeskTopSideBar from "../SideBar/DeskTopSideBar";
import UserProfileIcon from "../common/svg/UserProfileIcon";

import { useState, useEffect } from "react";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState<{ width: number }>({
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize;
};

export default function NavBar() {
  const screenSize = useScreenSize();
  return (
    <div className="flex flex-row grow sm:bg-white md:bg-inherit">
      {screenSize.width < 1023 ? (
        <SideBar styles="sm:flex md:flex lg:hidden xl:hidden " />
      ) : (
        <DeskTopSideBar styles="sm:hidden md:hidden lg:flex" />
      )}

      <div className=" flex lg:mr-4 grow bg-white rounded md:rounded-lg  sm:justify-start justify-around  lg:ml-4 sm:px-2 sm:h-[88px] h-[120px]  lg:mt-4">
        <FormInput
          id="search"
          aria-label="Search box"
          placeholder="   Search something"
          type="text"
          endSvg={<SearchIcon />}
          styles="space-y-0 justify-start  grow lg:ml-12 mt-2"
        >
          {" "}
        </FormInput>
        <div className="  sm:hidden md:flex  justify-around mt-2 mx-7">
          <Link to="">
            <ButtonComponent
              styles="my-auto"
              arialabeltext="Settings button"
              bgcolor="bg-bgwhite"
            >
              <SettingUpperbarIcon />
            </ButtonComponent>
          </Link>
          <Link to="">
            <ButtonComponent
              styles="my-auto"
              arialabeltext="Notifications button"
              bgcolor="bg-bgwhite"
            >
              <NotificationUpperbarIcon />{" "}
            </ButtonComponent>{" "}
          </Link>
          <Link to="Profile" className="w-12 h-12">
            <ButtonComponent
              styles="flex w-12 h-12 my-auto"
              arialabeltext="Profile button"
              bgcolor="bg-bgwhite"
            >
              <UserProfileIcon />
              {/*   será necessário pegar a imagem de usuario do banco de dados */}
            </ButtonComponent>
          </Link>
        </div>
      </div>
    </div>
  );
}
