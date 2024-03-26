import { NavLink } from "react-router-dom";

const Navbar = () => {

    const link = <>

        <li><NavLink className={({ isActive }) => isActive ? 'border border-[#23BE0A] text-[#23BE0A] font-semibold px-4 py-2 rounded-lg' : 'font-semibold px-4 py-2'} to="/">Home</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'border border-[#23BE0A] text-[#23BE0A] font-semibold px-4 py-2 rounded-lg' : 'font-semibold px-4 py-2'} to="/listed-books">Listed Books</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'border border-[#23BE0A] text-[#23BE0A] font-semibold px-4 py-2 rounded-lg' : 'font-semibold px-4 py-2'} to="/page-to-read">Pages to Read</NavLink></li>
        <li><a className="btn bg-[#23BE0A] text-white lg:hidden">Sign In</a></li>
        <li><a className="btn bg-[#59C6D2] text-white lg:hidden">Sign Up</a></li>

    </>


    return (
        <div className="navbar bg-base-100 py-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            link
                        }
                    </ul>
                </div>
                <a className="text-2xl font-bold mx-auto lg:mx-0">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className=" menu-horizontal px-1 gap-8">
                    {
                        link
                    }
                </ul>
            </div>
            <div className="navbar-end gap-4 hidden lg:inline-flex">
                <a className="btn bg-[#23BE0A] text-white">Sign In</a>
                <a className="btn bg-[#59C6D2] text-white">Sign Up</a>
            </div>
        </div>
    );
};

export default Navbar;