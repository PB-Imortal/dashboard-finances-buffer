import ButtonComponent from "../_atoms/Button";
import NotificationUpperbarIcon from "../common/svg/NotificationUpperBarIcon";
import SettingUpperbarIcon from "../common/svg/setting-upperbar-icon";
import { Link } from "react-router-dom";
import SearchIcon from "../common/svg/SearchIcon";
import SideBar from "../SideBar/SideBar";
import FormInput from "../_atoms/FormInput";
import UserProfileIcon from "../common/svg/UserProfileIcon";

export default function NavBar() {
  return (
    <div className="flex flex-row grow ">
      <SideBar styles="sm:flex md:hidden " />

      <div className=" mr-4 grow bg-white flex sm:justify-start justify-around  gap-5 md:ml-4  md:mt-4">
        <FormInput
          id="search"
          aria-label="Search box"
          placeholder="   Search something"
          type="text"
          endSvg={<SearchIcon />}
          styles="space-y-0 justify-start  grow lg:ml-12 "
     
      
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
             <UserProfileIcon/>
              {/*   será necessário pegar a imagem de usuario do banco de dados */}
            </ButtonComponent>
          </Link>
        </div>
      </div>
    </div>
  );
}
