import ButtonComponent from "../_atoms/Button/Button";
import NotificationUpperbarIcon from "../common/svg/NotificationUpperBarIcon";
import SettingUpperbarIcon from "../common/svg/setting-upperbar-icon";
import { Link } from "react-router-dom";
import SearchIcon from "../common/svg/SearchIcon";
import SideBar from "../SideBar/SideBar";
import FormInput from "../_atoms/Input/FormInput";
import DeskTopSideBar from "../SideBar/DeskTopSideBar";
import UserProfileIcon from "../common/svg/UserProfileIcon";

export default function NavBar() {
  return (
    <div className="flex flex-row grow sm:bg-white md:bg-inherit">
      <DeskTopSideBar styles="sm:hidden md:hidden lg:flex xl:flex" />
      <SideBar styles="sm:flex md:hidden " />

      <div className=" flex mr-4 grow bg-white rounded md:rounded-lg  sm:justify-start justify-around  md:ml-4 sm:px-2 sm:h-[88px] h-[120px]  md:mt-4">
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
