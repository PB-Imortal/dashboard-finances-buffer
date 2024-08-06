import React from 'react';
import { useTheme } from "../providers/context/ThemeContext";
import Moon from '../assets/DarkModeIcon.svg';
import Sun from '../assets/LightModeIcon.svg';
import SideBar from '../components/_molecules/SideBar/SideBar';

const SettingPage: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div className={`flex h-screen ${isDarkMode ? 'dark' : ''}`}>
      <SideBar styles='' />
      <div className="flex-1 p-4 dark:text-white text-black lg:ml-0">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Settings</h1>
        </div>
        <hr className="md:border-gray-300 my-4" />
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only"
            checked={isDarkMode}
            onChange={toggleDarkMode}
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full dark:bg-gray-700 relative">
            <span
              className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                isDarkMode ? 'transform translate-x-5' : ''
              }`}
            ></span>
          </div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            {isDarkMode ? (
              <img src={Moon} alt="Dark Mode" className="inline-block mr-1" />
            ) : (
              <img src={Sun} alt="Light Mode" className="inline-block mr-1" />
            )}
            {isDarkMode ? 'Dark Mode' : 'Light Mode'}
          </span>
        </label>
      </div>
    </div>
  );
};

export default SettingPage;
