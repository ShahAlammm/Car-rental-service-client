import { IoSettingsSharp } from "react-icons/io5";
import { Link, Outlet } from "react-router-dom";
import logo from '../../assets/logo.png';

const DashboardLayout = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <label htmlFor="my-drawer-2" className="btn absolute rounded-s-none w-16 bg-base-200 shadow-xl drop-shadow-xl drawer-button mt-5 lg:hidden">
      <IoSettingsSharp className="text-3xl text-blue-600" />
      </label>
      <div className="drawer-content px-5 py-20">
        <Outlet />
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 font-bold text-base-content min-h-full w-80 p-4">
          <li><Link to={'/'}><img src={logo} className="pb-16" alt="" /></Link></li>
          {/* Sidebar content here */}
          <li><Link to={"/dashboard"}>Profile</Link></li>
          <li><Link to={"/dashboard/booking"}>My Booking</Link></li>
          <li><a>Sidebar Item 2</a></li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;