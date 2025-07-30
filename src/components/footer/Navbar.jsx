import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full h-auto sticky top-0 z-50">
      <ul className="flex justify-around sm:justify-evenly bg-red-300">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/course"}>Courses</NavLink>
        <NavLink to={"/contact"}>Contact us</NavLink>
        <NavLink to={"/team"}>Our Team</NavLink>
        <NavLink to={"/profile"}>Profile</NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
