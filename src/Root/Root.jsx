import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Root = () => {
    return (
        <div className="max-w-[1440px] mx-auto lg:px-[135px]">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;