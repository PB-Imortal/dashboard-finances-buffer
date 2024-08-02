import React, { useState, useEffect } from "react";
import DeskTopSideBar from "../components/_molecules/SideBar/DeskTopSideBar";
import SideBar from "../components/_molecules/SideBar/SideBar";

import Sun from "../assets/LightModeIcon.svg";
import Moon from "../assets/DarkModeIcon.svg";

const SettingPage: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });
  const [screenSize, setScreenSize] = useState({ width: window.innerWidth });

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    document.documentElement.classList.toggle("dark", newMode);
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", JSON.stringify(newMode));
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({ width: window.innerWidth });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <>
      <div className="flex h-screen dark:bg-dkrbgblue">
        {screenSize.width <= 1023 ? (
          <SideBar styles="sm:flex md:flex lg:hidden xl:hidden fixed top-0 left-0 z-50" />
        ) : (
          <DeskTopSideBar styles="sm:hidden md:hidden lg:flex z-50" />
        )}
        <div className="flex-1 p-4 dark:text-bgwhite ml-12 lg:ml-0">
          <div className="flex items-center justify-between ">
            <h1 className="text-2xl font-bold">Settings</h1>
          </div>
          <hr className="md:border-gray-300 my-4" />
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only"
              checked={!isDarkMode}
              onChange={toggleDarkMode}
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full dark:bg-gray-700 relative">
              <span
                className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                  isDarkMode ? "transform translate-x-5" : ""
                }`}
              ></span>
            </div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              {isDarkMode ? (
                <img src={Moon} alt="Dark Mode" className="inline-block mr-1" />
              ) : (
                <img src={Sun} alt="Light Mode" className="inline-block mr-1" />
              )}
              {isDarkMode ? "Dark Mode" : "Light Mode"}
            </span>
          </label>
        </div>
      </div>
    </>
  );
};

export default SettingPage;