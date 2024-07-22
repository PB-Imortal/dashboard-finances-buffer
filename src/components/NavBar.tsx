import { Input } from "@mui/base";
import ButtonComponent from "./Button";
import SettingUpperbarIcon from "./setting-upperbar-icon";
import NotificationUpperbarIcon from "./NotificationUpperBarIcon";
import userprofileicon from "../assets/user-profile-icon.svg";

export default function NavBar() {
  return (
    <div className="bg-bglilac py-96 ">
      <div className="bg-white flex justify-around lg:w-90 gap-5 py-4 rounded-lg">
        <Input
          className="flex flex-grow w-52 h-14  border  border-bordergrey rounded-md ml-10"
          aria-label="Search box"
          placeholder="   Search something"
        />
        <div className="flex justify-around  gap-7 mx-7">
          <ButtonComponent
            styles=" sm:hidden md:flex my-auto"
            arialabeltext="Settings button"
          >
            {" "}
            <SettingUpperbarIcon />
          </ButtonComponent>
          <ButtonComponent
            styles="sm:hidden md:flex my-auto"
            arialabeltext="Notifications button"
          >
            {" "}
            <NotificationUpperbarIcon />{" "}
          </ButtonComponent>
          <ButtonComponent styles="flex" arialabeltext="Settings button">
            {" "}
            <img
              className="flex shrink-0 my-auto w-[48px] h-[48px]"
              src={userprofileicon}
            />{" "}
            {/*   será necessário pegar a imagem de usuario do banco de dados */}
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
}
