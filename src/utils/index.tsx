import { NavLink } from "react-router-dom";

export const navLink = (
  <>
    <li>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "animate-bounce bg-blue-600 shadow-xl shadow-black/50 font-bold text-white" : ""
        }
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/allCars"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "animate-bounce bg-blue-600 shadow-xl shadow-black/50 font-bold text-white" : ""
        }
      >
        All Cars
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/about"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "animate-bounce bg-blue-600 shadow-xl shadow-black/50 font-bold text-white" : ""
        }
      >
        About Us
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/booking"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "bg-blue-600 animate-bounce shadow-xl shadow-black/50 font-bold text-white" : ""
        }
      >
        Booking
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/contact"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "bg-blue-600 animate-bounce shadow-xl shadow-black/50 font-bold text-white" : ""
        }
      >
        Contact
      </NavLink>
    </li>
  </>
);
