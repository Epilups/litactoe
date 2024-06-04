import {Outlet} from "react-router-dom";
import TopNavbar from "./TopNavbar.jsx";

const MainLayout = () => {
    return (
        <div>
            <TopNavbar/>
            <div className='mainContent'>
                <Outlet/>
            </div>
        </div>
    )
}

export default MainLayout;
