import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {

  return (
    <nav className="flex justify-between">
    <NavLink to="/" className={({ isActive }) => `text-2xl hover:italic ${isActive && 'font-semibold'}`}>
        Sakib's Tea House
    </NavLink>
    <div className="flex gap-5 items-center">
        <NavLink to="/directors"
                    className={({ isActive }) => `px-1.5 hover:underline ${isActive && 'font-semibold'}`}>
            Our Teas
        </NavLink>
        <NavLink to="/actors"
                    className={({ isActive }) => `px-1.5 hover:underline ${isActive && 'font-semibold'}`}>
            About
        </NavLink>
    </div>
    </nav>
)
};

export default NavBar;
