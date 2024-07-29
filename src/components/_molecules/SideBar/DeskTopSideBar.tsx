import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

// Importing the assets
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
import PorifleHoverFunciton from "../../../assets/PorifleHoverFunciton.svg";
import SettingHoverFunction from "../../../assets/SettingHoverFunction.svg";
import LogoutHoverFunction from "../../../assets/LogoutHoverFunction.svg";
import StatementHoverFunction from "../../../assets/StatementHoverFunction.svg";

interface NavLinkProps {
  to: string;
  activeImgSrc: string;
  inactiveImgSrc: string;
  hoverImgSrc?: string;
  children: React.ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  isHovered?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({
  to,
  activeImgSrc,
  inactiveImgSrc,
  hoverImgSrc,
  children,
  onMouseEnter,
  onMouseLeave,
  isHovered,
}) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  const textColorClass = isActive
    ? "text-dkrbgpurple"
    : isHovered
    ? "text-[#AE7EED] dark:text-[#CBB2FF]"
    : "text-gray-700 dark:text-gray-300";

  return (
    <Link
      to={to}
      className={`flex items-center gap-2 transition-colors duration-300 ${textColorClass}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <img
        src={isActive ? activeImgSrc : isHovered && hoverImgSrc ? hoverImgSrc : inactiveImgSrc}
        alt=""
        className="transition-transform duration-300"
        style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
      />
      <span className="transition-transform duration-300" style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}>
        {children}
      </span>
    </Link>
  );
};

interface DeskTopSideBarProps {
  styles: string;
}

const DeskTopSideBar: React.FC<DeskTopSideBarProps> = ({ styles }) => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className={`${styles}`}>
      <div className={`m-3 top-0 left-0 z-40 w-64 h-[97vh] bg-white shadow-md p-8 rounded-[18px] dark:bg-dkrbgitenseblue`}>
        <ul>
          <li>
            <div className="flex justify-center p-2">
              <img src={LogoIcon} alt="Logo" className=" h-auto" />
            </div>
          </li>
          <li className="p-4">
            <div className="border-t border-#DFDFE0"></div>
          </li>
        </ul>

        {/* Sidebar Content */}
        <div className="p-4">
          <nav className="flex flex-col gap-12 font-[600] dark:text-bgwhite">
            <NavLink
              to="/"
              activeImgSrc={HomeIconActive}
              inactiveImgSrc={HomeIconInactive}
              hoverImgSrc={HomeHoverFunction}
              onMouseEnter={() => setHovered("Home")}
              onMouseLeave={() => setHovered(null)}
              isHovered={hovered === "Home"}
            >
              Home
            </NavLink>

            <NavLink
              to="/statement"
              activeImgSrc={StatementIconActive}
              inactiveImgSrc={StatementIconInactive}
              hoverImgSrc={StatementHoverFunction}
              onMouseEnter={() => setHovered("Statement")}
              onMouseLeave={() => setHovered(null)}
              isHovered={hovered === "Statement"}
            >
              Statement
            </NavLink>

            {/* Additional Links */}
            <NavLink
              to="/profile"
              activeImgSrc={UserProfileActive}
              inactiveImgSrc={UserProfile}
              hoverImgSrc={PorifleHoverFunciton}
              onMouseEnter={() => setHovered("Profile")}
              onMouseLeave={() => setHovered(null)}
              isHovered={hovered === "Profile"}
            >
              Profile
            </NavLink>

            <NavLink
              to="/setting"
              activeImgSrc={SettingSideBarActive}
              inactiveImgSrc={SettingSideBar}
              hoverImgSrc={SettingHoverFunction}
              onMouseEnter={() => setHovered("Setting")}
              onMouseLeave={() => setHovered(null)}
              isHovered={hovered === "Setting"}
            >
              Setting
            </NavLink>

            <NavLink
              to="/login"
              activeImgSrc={LogoutSideBarInactive}
              inactiveImgSrc={LogoutSideBarInactive}
              hoverImgSrc={LogoutHoverFunction}
              onMouseEnter={() => setHovered("Logout")}
              onMouseLeave={() => setHovered(null)}
              isHovered={hovered === "Logout"}
            >
              Logout
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default DeskTopSideBar;