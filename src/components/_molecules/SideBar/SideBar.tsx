import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import HomeIconInactive from "../../../assets/home-sidebar-icon.svg";
import StatementIconActive from "../../../assets/statement-active-icon.svg";
import StatementIconInactive from "../../../assets/statement-icon.svg";
import ProfileIconActive from "../../../assets/user-profile-active-icon.svg";
import ProfileIconInactive from "../../../assets/user-profile-icon.svg";
import SettingSideBar from "../../../assets/setting-sidebar-icon.svg";
import SettingSideBarActive from "../../../assets/SettingSideBar-active.svg";
import NotificationSideBar from "../../../assets/notification-sidebar-icon.svg";
import NotificationSideBarActive from "../../../assets/notification-sidebar-icon-active.svg";
import LogoutSideBarIcon from "../../../assets/logout-sidebar-icon.svg";
import LogoIcon from "../../../assets/BlackLogo.svg";
import HomeIconActive from "../../../assets/home-active-icon.svg";

interface BurgerMenuProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  const isSettingPage = location.pathname === "/setting";
  return (
    <button
      data-testid="burger-menu"
      className={`my-auto ${
        isSettingPage ? "bg-transparent" : "bg-bgwhite dark:bg-dkrbgitenseblue"
      } px-4 py-[37px] flex flex-col justify-center items-center gap-1 ${isOpen ? "z-20" : "z-60"}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span className="block w-5 h-0.5 bg-black dark:bg-bgwhite"></span>
      <span className="block w-5 h-0.5 bg-black dark:bg-bgwhite"></span>
      <span className="block w-5 h-0.5 bg-black dark:bg-bgwhite"></span>
    </button>
  );
};

interface NavLinkImageProps {
  src: string;
  alt: string;
  isActive: boolean;
  className?: string;
}

const NavLinkImage: React.FC<NavLinkImageProps> = ({ src, alt, className }) => (
  <img
    src={src}
    alt={alt}
    className={`transition-transform duration-300 ${className}`}
  />
);

interface NavLinkProps {
  to: string;
  activeImgSrc: string;
  inactiveImgSrc: string;
  children: React.ReactNode;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavLink: React.FC<NavLinkProps> = ({
  to,
  activeImgSrc,
  inactiveImgSrc,
  children,
  setIsOpen,
}) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  const textColorClass = isActive ? "text-[#8E48EC]" : "";

  const getImageClassName = () => {
    if (!isActive) {
      if (
        to === "/" ||
        to === "/statement" ||
        to === "/profile" ||
        to === "/setting" ||
        to === "/login" ||
        to === "#"
      ) {
        return "dark:invert";
      }
    }
    return "";
  };

  return (
    <Link
      to={to}
      className={`flex items-center gap-4 ${textColorClass}`}
      onClick={() => setIsOpen(false)}
    >
      <NavLinkImage
        src={isActive ? activeImgSrc : inactiveImgSrc}
        alt=""
        isActive={isActive}
        className={getImageClassName()}
      />
      <span>{children}</span>
    </Link>
  );
};

interface SideBarProps {
  styles: string;
}

const SideBar: React.FC<SideBarProps> = ({ styles }) => {
  const [isOpen, setIsOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      setIsOpen((prev) => !prev);
    }
  };

  useEffect(() => {
    const handleDocumentKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen((prev) => !prev);
      }
    };

    document.addEventListener("keydown", handleDocumentKeyDown);

    return () => {
      document.removeEventListener("keydown", handleDocumentKeyDown);
    };
  }, []);

  useEffect(() => {
    if (isOpen && overlayRef.current) {
      overlayRef.current.focus();
    }
  }, [isOpen]);

  return (
    <div className={`${styles}`}>
      <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && (
        <div
          ref={overlayRef}
          className="fixed inset-0 bg-black bg-opacity-50 z-30 py-4"
          onClick={() => setIsOpen(false)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        ></div>
      )}
      <div
        className={`fixed top-0 left-0 z-40 w-64 h-full bg-white dark:bg-dkrbgitenseblue shadow-md transform ease-in-out duration-300 rounded-tr-[16px] rounded-br-[16px] p-5 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <ul>
          <li className="flex justify-center p-2">
            <img src={LogoIcon} alt="logo" className="h-auto dark:invert" />
          </li>
          <li className="p-4">
            <div className="border-t border-#DFDFE0"></div>
          </li>
          <li className="p-4">
            <button
              className="absolute top-0 right-0 mt-1 mr-3 text-black dark:text-white text-[26px]"
              onClick={() => setIsOpen(false)}
            >
              &#120;
            </button>
          </li>
        </ul>
        <div className="p-4 dark:text-bgwhite">
          <nav className="flex flex-col gap-12 font-[600]">
            <NavLink
              to="/"
              activeImgSrc={HomeIconActive}
              inactiveImgSrc={HomeIconInactive}
              setIsOpen={setIsOpen}
            >
              Home
            </NavLink>
            <NavLink
              to="/statement"
              activeImgSrc={StatementIconActive}
              inactiveImgSrc={StatementIconInactive}
              setIsOpen={setIsOpen}
            >
              Statement
            </NavLink>
            <NavLink
              to="/profile"
              activeImgSrc={ProfileIconActive}
              inactiveImgSrc={ProfileIconInactive}
              setIsOpen={setIsOpen}
            >
              Profile
            </NavLink>
            <NavLink
              to="/notifications"
              activeImgSrc={NotificationSideBarActive}
              inactiveImgSrc={NotificationSideBar}
              setIsOpen={setIsOpen}
            >
              Notification
            </NavLink>
            <NavLink
              to="/setting"
              activeImgSrc={SettingSideBarActive}
              inactiveImgSrc={SettingSideBar}
              setIsOpen={setIsOpen}
            >
              Setting
            </NavLink>
            <NavLink
              to="/login"
              activeImgSrc={LogoutSideBarIcon}
              inactiveImgSrc={LogoutSideBarIcon}
              setIsOpen={setIsOpen}
            >
              Logout
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
