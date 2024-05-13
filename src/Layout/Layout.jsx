import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/header/Navbar";
import { Toaster } from "react-hot-toast";
import CategoriesDropDown from "../utils/CategoriesDropDown";

function Layout() {
    return (
        <div>
            <Navbar />
            {/* <div className="flex"> */}
            {/* <CategoriesDropDown /> */}
            <Outlet />
            {/* </div> */}
            <Toaster position="top-center" />
        </div>
    )
}

export default Layout;