import React from "react";
import { Link, useLocation } from "react-router-dom";

// Importing the assets
import LogoIcon from "../../assets/BlackLogo.svg";
import HomeIconActive from "../../assets/home-active-icon.svg";
import HomeIconInactive from "../../assets/home-sidebar-icon.svg";
import StatementIconActive from "../../assets/statement-active-icon.svg";
import StatementIconInactive from "../../assets/statement-icon.svg";
import ProfileIconActive from "../../assets/user-profile-active-icon.svg";
import ProfileIconInactive from "../../assets/user-profile-icon.svg";
import SettingSideBar from "../../assets/setting-sidebar-icon.svg";
import NotificationSideBar from "../../assets/notification-sidebar-icon.svg";
import NotificationSideBarActive from "../../assets/notification-sidebar-icon-active.svg";
import SettingSideBarActive from "../../assets/SettingSideBar-active.svg";
import LogoutSideBarInactive from "../../assets/logout-sidebar-icon.svg";
import LogoutSideBarActive from "../../assets/LogoutSideBar-active.svg";

interface NavLinkProps {
  to: string;
  activeImgSrc: string;
  inactiveImgSrc: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({
  to,
  activeImgSrc,
  inactiveImgSrc,
  children,
}) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  const textColorClass = isActive ? "text-[#8E48EC]" : "";

  return (
    <Link to={to} className={`flex items-center gap-2 ${textColorClass}`}>
      <img src={isActive ? activeImgSrc : inactiveImgSrc} alt="" />
      <span>{children}</span>
    </Link>
  );
};

const DeskTopSideBar = () => {
  return (
    <div className="top-0 left-0 z-40 w-64  bg-white shadow-md h-[98vh] p-5 sm:hidden md:flex md:flex-col">
      <ul>
        <li>
          <div className="flex justify-center p-2">
            <img src={LogoIcon} alt="Logo" />
          </div>
        </li>
      </ul>

      {/* Sidebar Content */}
      <div className="p-4">
        <nav className="flex flex-col gap-10 font-[600]">
          <NavLink
            to="/"
            activeImgSrc={HomeIconActive}
            inactiveImgSrc={HomeIconInactive}
          >
            Home
          </NavLink>

          <NavLink
            to="/statement"
            activeImgSrc={StatementIconActive}
            inactiveImgSrc={StatementIconInactive}
          >
            Statement
          </NavLink>

          <NavLink
            to="/profile"
            activeImgSrc={ProfileIconActive}
            inactiveImgSrc={ProfileIconInactive}
          >
            Profile
          </NavLink>

          {/* Additional Links */}
          <NavLink
            to="#"
            activeImgSrc={NotificationSideBarActive}
            inactiveImgSrc={NotificationSideBar}
          >
            Notification
          </NavLink>

          <NavLink
            to="#"
            activeImgSrc={SettingSideBarActive}
            inactiveImgSrc={SettingSideBar}
          >
            Setting
          </NavLink>

          <NavLink
            to="/login"
            activeImgSrc={LogoutSideBarActive}
            inactiveImgSrc={LogoutSideBarInactive}
          >
            Logout
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default DeskTopSideBar;