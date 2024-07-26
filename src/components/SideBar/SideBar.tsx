import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import HomeIconInactive from "../../assets/home-sidebar-icon.svg";
import StatementIconActive from "../../assets/statement-active-icon.svg";
import StatementIconInactive from "../../assets/statement-icon.svg";
import ProfileIconActive from "../../assets/user-profile-active-icon.svg";
import ProfileIconInactive from "../../assets/user-profile-icon.svg";
import SettingSideBar from "../../assets/setting-sidebar-icon.svg";
import SettingSideBarActive from "../../assets/statement-active-icon.svg";
import NotificationSideBar from "../../assets/notification-sidebar-icon.svg";
import NotificationSideBarActive from "../../assets/notification-sidebar-icon-active.svg";
import LogoutSideBarIcon from "../../assets/logout-sidebar-icon.svg";
import LogoIcon from "../../assets/BlackLogo.svg";
import HomeIconActive from "../../assets/home-active-icon.svg";

interface BurgerMenuProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpen, setIsOpen }) => {
  return (
    <button
      data-testid="burger-menu"
      className={`my-auto bg-bgwhite px-4 py-9 rounded flex flex-col justify-center items-center gap-1 ${isOpen ? "z-20" : "z-60"}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span className="block w-5 h-0.5 bg-black"></span>
      <span className="block w-5 h-0.5 bg-black"></span>
      <span className="block w-5 h-0.5 bg-black"></span>
    </button>
  );
};

interface NavLinkProps {
  to: string;
  activeImgSrc: string;
  inactiveImgSrc: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, activeImgSrc, inactiveImgSrc, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  const textColorClass = isActive ? "text-[#8E48EC]" : "";

  return (
    <Link to={to} className={`flex items-center gap-4 ${textColorClass}`}>
      <img src={isActive ? activeImgSrc : inactiveImgSrc} alt="" />
      <span>{children}</span>
    </Link>
  );
};

interface SideBarProps {
  styles: string;
}

const SideBar: React.FC<SideBarProps> = ({ styles }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${styles}`}>
      <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30" onClick={() => setIsOpen(false)}></div>
      )}
      <div className={`fixed top-0 left-0 z-40 w-64 h-full bg-white shadow-md transform ease-in-out duration-300 rounded-tr-[18px] rounded-br-[18px] p-5 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <ul>
          <li className="flex justify-center p-2">
            <img src={LogoIcon} alt="logo" className="h-auto" />
          </li>
          <li className="p-4">
            <div className="border-t border-#DFDFE0"></div>
          </li>
          <li className="p-4">
            <button className="absolute top-0 right-0 mt-1 mr-3 text-black text-[26px]" onClick={() => setIsOpen(false)}>&#120;</button>
          </li>
        </ul>
        <div className="p-4">
          <nav className="flex flex-col gap-12 font-[600]">
            <NavLink to="/" activeImgSrc={HomeIconActive} inactiveImgSrc={HomeIconInactive}>Home</NavLink>
            <NavLink to="/statement" activeImgSrc={StatementIconActive} inactiveImgSrc={StatementIconInactive}>Statement</NavLink>
            <NavLink to="/profile" activeImgSrc={ProfileIconActive} inactiveImgSrc={ProfileIconInactive}>Profile</NavLink>
            <NavLink to="#" activeImgSrc={NotificationSideBarActive} inactiveImgSrc={NotificationSideBar}>Notification</NavLink>
            <NavLink to="#" activeImgSrc={SettingSideBarActive} inactiveImgSrc={SettingSideBar}>Setting</NavLink>
            <NavLink to="/login" activeImgSrc={LogoutSideBarIcon} inactiveImgSrc={LogoutSideBarIcon}>Logout</NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SideBar;