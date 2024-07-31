import React from "react";
import DeskTopSideBar from "../components/_molecules/SideBar/DeskTopSideBar";

const SettingPage: React.FC = () => {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <>
      <div className="flex dark:bg-dkrbgblue">
        <DeskTopSideBar styles={""} isDarkMode={true} />
        <div className="p-4 dark:text-bgwhite">
          <h1 className="text-2xl font-bold mb-4">Settings</h1>
          <button
            onClick={toggleDarkMode}
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Toggle Dark Mode
          </button>
        </div>
      </div>
    </>
  );
};

export default SettingPage;