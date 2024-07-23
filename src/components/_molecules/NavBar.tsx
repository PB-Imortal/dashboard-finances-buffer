import { Input } from "@mui/base";

import userprofileicon from "../../assets/user-profile-icon.svg";
import ButtonComponent from "../_atoms/Button";
import NotificationUpperbarIcon from "../common/svg/NotificationUpperBarIcon";
import SettingUpperbarIcon from "../common/svg/setting-upperbar-icon";
import { Link } from "react-router-dom";
import SearchIcon from "../common/svg/SearchIcon";
import SideBar from "../SideBar/SideBar";

export default function NavBar() {
  return (
    <div className="">
      <SideBar styles="sm:flex md:flex lg:hidden xl:hidden" />
      <div className="bg-white flex justify-around lg:w-90 gap-5 py-4 rounded-lg">
        <Input
          className="flex flex-grow w-52 h-14 my-auto border  border-bordergrey rounded-md ml-10"
          aria-label="Search box"
          placeholder="   Search something"
          type="text"
        >
          {" "}
          <SearchIcon />{" "}
        </Input>
        <div className="flex justify-around  gap-7 mx-7">
          <Link to="">
            <ButtonComponent
              styles=" sm:hidden md:flex my-auto"
              arialabeltext="Settings button"
              bgcolor="bgwhite"
            >
              <SettingUpperbarIcon />
            </ButtonComponent>
          </Link>
          <Link to="">
            <ButtonComponent
              styles="sm:hidden md:flex my-auto"
              arialabeltext="Notifications button"
              bgcolor="bgwhite"
            >
              <NotificationUpperbarIcon />{" "}
            </ButtonComponent>{" "}
          </Link>
          <Link to="Profile">
            <ButtonComponent
              styles="flex"
              arialabeltext="Settings button"
              bgcolor="bgwhite"
            >
              <img
                className="flex shrink-0 my-auto w-[48px] h-[48px]"
                src={userprofileicon}
              />
              {/*   será necessário pegar a imagem de usuario do banco de dados */}
            </ButtonComponent>
          </Link>
        </div>
      </div>
    </div>
  );
}
