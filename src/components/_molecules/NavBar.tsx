import userprofileicon from "../../assets/user-profile-icon.svg";
import ButtonComponent from "../_atoms/Button";
import NotificationUpperbarIcon from "../common/svg/NotificationUpperBarIcon";
import SettingUpperbarIcon from "../common/svg/setting-upperbar-icon";
import { Link } from "react-router-dom";
import SearchIcon from "../common/svg/SearchIcon";
import SideBar from "../SideBar/SideBar";
import FormInput from "../_atoms/FormInput";
import DeskTopSideBar from "../SideBar/DeskTopSideBar";

export default function NavBar() {
  return (
    <div className="">
      <DeskTopSideBar />
      <SideBar styles="sm:flex md:flex lg:hidden xl:hidden " />

      <div className="ml-16 mr-4 bg-white flex sm:justify-start justify-around  gap-5 py-4 ">
        <FormInput
          id="search"
          aria-label="Search box"
          placeholder="   Search something"
          type="text"
          endSvg={<SearchIcon />}
          styles="grow justify-start"
     
      
        >
          {" "}
        </FormInput>
        <div className="  sm:hidden md:flex  justify-around   mx-7">
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
