import React from "react"
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {

  return (
    <div>
        <nav role="navigation" className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/directors">Directors</NavLink>
        <NavLink to="/actors">Actors</NavLink>
        </nav>
    </div>

  )
}

export default NavBar;
