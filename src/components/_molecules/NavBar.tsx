import { Input } from "@mui/base";

import userprofileicon from "../../assets/user-profile-icon.svg";
import ButtonComponent from "../_atoms/Button";
import NotificationUpperbarIcon from "../common/svg/NotificationUpperBarIcon";
import SettingUpperbarIcon from "../common/svg/setting-upperbar-icon";
import { Link } from "react-router-dom";
import SearchIcon from "../common/svg/SearchIcon";
import SideBar from "../SideBar/SideBar";
import FormInput from "../_atoms/FormInput";

export default function NavBar() {
  return (
    <div className="">
      <SideBar styles="sm:flex md:flex lg:hidden xl:hidden " />

      <div className="bg-white flex justify-around lg:w-90 gap-5 py-4 ">
        <FormInput
          id="search"
          className="flex lg:flex-grow w-52 h-14 my-auto border  border-bordergrey rounded-md ml-20 "
          aria-label="Search box"
          placeholder="   Search something"
          type="text"
          endSvg={<SearchIcon />}
        >
          {" "}
        </FormInput>
        <div className="  sm:hidden md:flex  justify-around   mx-7">
          <Link to="">
            <ButtonComponent
              styles="my-auto"
              arialabeltext="Settings button"
              bgcolor="bgwhite"
            >
              <SettingUpperbarIcon />
            </ButtonComponent>
          </Link>
          <Link to="">
            <ButtonComponent
              styles="my-auto"
              arialabeltext="Notifications button"
              bgcolor="bgwhite"
            >
              <NotificationUpperbarIcon />{" "}
            </ButtonComponent>{" "}
          </Link>
          <Link to="Profile" className="w-12 h-12">
            <ButtonComponent
              styles="flex w-12 h-12 my-auto"
              arialabeltext="Profile button"
              bgcolor="bgwhite"
            >
              <img className="my-auto h-12 w-12" src={userprofileicon} />
              {/*   será necessário pegar a imagem de usuario do banco de dados */}
            </ButtonComponent>
          </Link>
        </div>
      </div>
    </div>
  );
}
