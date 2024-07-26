import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAvatar } from "../../hook/useHooks";
import ButtonComponent from "../_atoms/Button/Button";
import FormInput from "../_atoms/Input/FormInput";
import NotificationUpperbarIcon from "../common/svg/NotificationUpperBarIcon";
import SearchIcon from "../common/svg/SearchIcon";
import SettingUpperbarIcon from "../common/svg/setting-upperbar-icon";

export default function NavBar() {
  const { userAvatar, setUserAvatar } = useAvatar();

  useEffect(() => {
    const newAvatarUrl = `https://xsgames.co/randomusers/avatar.php?g=pixel&${new Date().getTime()}`;
    setUserAvatar(newAvatarUrl);
  }, []);

  return (
    <div className="flex flex-row grow sm:bg-white md:bg-inherit">
      <div className=" flex lg:mr-4 grow bg-white rounded md:rounded-lg  sm:justify-start justify-around  lg:ml-4 sm:px-2 sm:h-[88px] h-[120px]  lg:mt-4 dark:bg-dkrbgitenseblue">
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
        <div className="  sm:hidden md:flex  justify-around mt-4 mx-7 align-middle">
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
          <Link to="Profile" className="">
            <ButtonComponent
              styles=""
              arialabeltext="Profile button"
              bgcolor="bg-bgwhite"
            >
              <img
                className="-mt-2 w-[48px] h-[48px] rounded-full ring-1 ring-gray-300 z-0 align-top"
                src={userAvatar}
                alt="user avatar"
              />
            </ButtonComponent>
          </Link>
        </div>
      </div>
    </div>
  );
}
