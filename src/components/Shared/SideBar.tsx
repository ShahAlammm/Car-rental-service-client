import { navLink } from "../../utils";


const SideBar = () => {
    return (
        <div className="drawer-side z-50">
            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay">
                
            </label>
            <ul className="menu bg-base-200 min-h-full w-80 p-4">
                {navLink}
            </ul>
        </div>
    );
};

export default SideBar;