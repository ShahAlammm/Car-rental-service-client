import { Outlet } from "react-router-dom"
import NavBar from "../Shared/NavBar"
import SideBar from "../Shared/SideBar"
import Footer from "../Shared/Footer"




function MainLayout() {
    return (
        <>
            <div className="drawer z-50">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <NavBar />
                    <Outlet />
                    <Footer />
                </div>
                <SideBar />
            </div>
        </>
    )
}

export default MainLayout