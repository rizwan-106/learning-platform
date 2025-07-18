import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full border-2 h-auto fixed">
      <ul className="flex justify-evenly bg-red-300">
        <NavLink to={"/home"}>Home</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Services</NavLink>
        <NavLink>Contact us</NavLink>
        <NavLink to={"/team"}>Our Team</NavLink>
        <NavLink>Join us</NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
