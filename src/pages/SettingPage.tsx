import { useEffect, useState } from "react"
import DeskTopSideBar from "../components/SideBar/DeskTopSideBar"

const SettingPage = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        const savedMode = localStorage.getItem("darkMode") === "true"
        setIsDarkMode(savedMode)
        document.documentElement.classList.toggle("dark", savedMode)
        document.documentElement.classList.add("transition-colors", "duration-500")
    }, [])

    const toggleDarkMode = () => {
        const newMode = !isDarkMode
        setIsDarkMode(newMode)
        localStorage.setItem("darkMode", newMode.toString())
        document.documentElement.classList.toggle("dark", newMode)
    }

    return (
        <div className="flex">
            <DeskTopSideBar styles={""} />
            <div className="flex items-center">
                <button
                    onClick={toggleDarkMode}
                    className="mt-4 px-4 py-2 transition-colors duration-500"
                >
                    {isDarkMode ? "Dark Mode" : "Light Mode"}
                </button>
            </div>
        </div>
    )
}

export default SettingPage
