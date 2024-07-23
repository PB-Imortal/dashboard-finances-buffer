import { Outlet } from "react-router-dom"

// Side Navigation
import SideBar from "../components/SideBar/SideBar"

export default function RootLayout() {
    return (
        <>
            {/* <Header /> */}
          
            {/* <SideNav */}

            {/* <Main /> */}
            <Outlet />
            {/* <Footer /> */}
            
        </>
    )
}
