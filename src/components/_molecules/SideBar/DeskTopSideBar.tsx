import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

// Importando os assets
import LogoIcon from "../../../assets/BlackLogo.svg";
import HomeIconActive from "../../../assets/home-active-icon.svg";
import HomeIconInactive from "../../../assets/home-sidebar-icon.svg";
import StatementIconActive from "../../../assets/statement-active-icon.svg";
import StatementIconInactive from "../../../assets/statement-icon.svg";
import SettingSideBar from "../../../assets/setting-sidebar-icon.svg";
import UserProfileActive from "../../../assets/user-profile-active-icon.svg";
import UserProfile from "../../../assets/user-profile-icon.svg";
import SettingSideBarActive from "../../../assets/SettingSideBar-active.svg";
import LogoutSideBarInactive from "../../../assets/logout-sidebar-icon.svg";
import HomeHoverFunction from "../../../assets/HomeHoverFunction.svg";
import ProfileHoverFunction from "../../../assets/ProfileHoverFunciton.svg";
import SettingHoverFunction from "../../../assets/SettingHoverFunction.svg";
import LogoutHoverFunction from "../../../assets/LogoutHoverFunction.svg";
import StatementHoverFunction from "../../../assets/StatementHoverFunction.svg";
import NotificationsSideBarActive from "../../../assets/notification-sidebar-icon-active.svg";
import NotificationsSideBar from "../../../assets/notification-sidebar-icon.svg";
import NotificationsHoverFunction from "../../../assets/NotificationHoverSideBar.svg";

interface NavItemProps {
  to: string;
  label: string;
  activeImg: string;
  inactiveImg: string;
  hoverImg?: string;
}

const NavItem: React.FC<NavItemProps> = ({
  to,
  label,
  activeImg,
  inactiveImg,
  hoverImg,
}) => {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);

  const isActive = location.pathname === to;

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const iconSrc = isActive
    ? activeImg
    : isHovered && hoverImg
      ? hoverImg
      : inactiveImg;

  const textColorClass = getTextColorClass(isActive, isHovered);

  return (
    <Link
      to={to}
      className={`flex items-center gap-2 transition-colors duration-300 ${textColorClass}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={iconSrc}
        alt={label}
        className={`transition-transform duration-300 ${
          !isActive && !isHovered ? "dark:invert" : ""
        }`}
        style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
      />
      <span
        className="transition-transform duration-300"
        style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
      >
        {label}
      </span>
    </Link>
  );
};

const getTextColorClass = (isActive: boolean, isHovered: boolean): string => {
  if (isActive) {
    return "text-purple-600";
  }
  if (isHovered) {
    return "text-[#AE7EED] dark:text-[#CBB2FF]";
  }
  return "text-gray-700 dark:text-gray-300";
};

interface DeskTopSideBarProps {
  styles: string;
}

const DeskTopSideBar: React.FC<DeskTopSideBarProps> = ({ styles }) => {
  return (
    <div data-testid="desktopsidebar" className={styles}>
      <div className="m-3 top-0 left-0 z-40 w-64 h-[96.5vh] ml-4 mt-4 bg-white shadow-md p-8 rounded-[16px] dark:bg-dkrbgitenseblue">
        <ul>
          <li className="flex justify-center p-2">
            <img src={LogoIcon} alt="Logo" className="h-auto dark:invert" />
          </li>
          <li className="p-4">
            <div className="border-t border-#DFDFE0"></div>
          </li>
        </ul>

        <nav className="p-4 flex flex-col gap-12 font-semibold dark:text-bgwhite">
          {[
            {
              to: "/",
              label: "Home",
              activeImg: HomeIconActive,
              inactiveImg: HomeIconInactive,
              hoverImg: HomeHoverFunction,
              alt:"Home",
            },
            {
              to: "/statement",
              label: "Statement",
              activeImg: StatementIconActive,
              inactiveImg: StatementIconInactive,
              hoverImg: StatementHoverFunction,
              alt: "Statement",
            },
            {
              to: "/profile",
              label: "Profile",
              activeImg: UserProfileActive,
              inactiveImg: UserProfile,
              hoverImg: ProfileHoverFunction,
              alt: "Profile",
            },
            {
              to: "/notifications",
              label: "Notifications",
              activeImg: NotificationsSideBarActive,
              inactiveImg: NotificationsSideBar,
              hoverImg: NotificationsHoverFunction,
              alt: "Notifications",
            },
            {
              to: "/setting",
              label: "Settings",
              activeImg: SettingSideBarActive,
              inactiveImg: SettingSideBar,
              hoverImg: SettingHoverFunction,
              alt: "Settings",
            },
            {
              to: "/login",
              label: "Logout",
              activeImg: LogoutSideBarInactive,
              inactiveImg: LogoutSideBarInactive,
              hoverImg: LogoutHoverFunction,
              alt: "Logout",
            },
          ].map(({ to, label, activeImg, inactiveImg, hoverImg }) => (
            <NavItem
              key={label}
              to={to}
              label={label}
              activeImg={activeImg}
              inactiveImg={inactiveImg}
              hoverImg={hoverImg}
            />
          ))}
        </nav>
      </div>
    </div>
  );
};

export default DeskTopSideBar;
