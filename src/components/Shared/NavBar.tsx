
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { navLink } from '../../utils';

const NavBar = () => {




    return (
        <div className="navbar fixed w-full shadow-2xl bg-white z-50">
            <div className="flex-none lg:hidden">

                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-circle swap swap-rotate">
                    <svg
                        className="swap-off fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 512 512">
                        <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                    </svg>
                </label>

            </div>
            <div className="mx-2 flex-1 px-2"><NavLink to="/"><img src={logo} alt="logo" className="h-16 w-32 " /></NavLink></div>
            <div className="hidden flex-none lg:block">
                <ul className="menu menu-horizontal font-semibold gap-1">
                    {navLink}
                </ul>
            </div>
            <div className='flex-1 justify-end items-end pr-5'>
                <button className='btn btn-circle swap swap-rotate shadow-md shadow-black/50'>Hi</button>
            </div>
        </div>
    );
};

export default NavBar;
