import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full h-auto sticky top-0">
      <ul className="flex justify-evenly bg-red-300">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink>About</NavLink>
        <NavLink to={"/course"}>Courses</NavLink>
        <NavLink>Contact us</NavLink>
        <NavLink to={"/team"}>Our Team</NavLink>
        <NavLink>Join us</NavLink>
        <NavLink to={"/profile"}>Profile</NavLink>
      </ul>
    </nav>
    // <nav className="w-full border-2 h-auto sticky top-0 z-50 bg-white">
    //   <ul className="flex justify-evenly items-center bg-red-300 py-3 relative">
    //     <NavLink to="/">Home</NavLink>
    //     <NavLink>About</NavLink>

    //     {/* Courses Dropdown */}
    //     <li className="relative group">
    //       <span className="cursor-pointer px-2">Courses</span>

    //       {/* Courses Main Dropdown */}
    //       <ul className="absolute hidden group-hover:flex flex-col top-full left-0 bg-white shadow-md rounded-md py-2 w-60 z-50">
    //         {/* AI/ML */}
    //         <li className="relative group/item px-4 py-2 hover:bg-gray-100">
    //           <span className="cursor-pointer">AI / ML</span>
    //           {/* Submenu */}
    //           <ul className="absolute hidden group-hover/item:flex flex-col top-0 left-full bg-white shadow-md rounded-md py-2 w-48">
    //             <li className="px-4 py-2 hover:bg-gray-100">Deep Learning</li>
    //             <li className="px-4 py-2 hover:bg-gray-100">ML Basics</li>
    //           </ul>
    //         </li>

    //         {/* Programming Languages */}
    //         <li className=" group/item px-4 py-2 hover:bg-gray-100">
    //           <span className="cursor-pointer">Programming Languages</span>
    //           <ul className="absolute hidden group-hover/item:flex flex-col top-0 left-full bg-white shadow-md rounded-md py-2 w-48">
    //             <li className="px-4 py-2 hover:bg-gray-100">Java</li>
    //             <li className="px-4 py-2 hover:bg-gray-100">Python</li>
    //             <li className="px-4 py-2 hover:bg-gray-100">C++</li>
    //           </ul>
    //         </li>

    //         {/* Web Technology */}
    //         <li className=" group/item px-4 py-2 hover:bg-gray-100">
    //           <span className="cursor-pointer">Web Technology</span>
    //           <ul className="absolute hidden group-hover/item:flex flex-col top-0 left-full bg-white shadow-md rounded-md py-2 w-48">
    //             <li className="px-4 py-2 hover:bg-gray-100">HTML</li>
    //             <li className="px-4 py-2 hover:bg-gray-100">CSS</li>
    //             <li className="px-4 py-2 hover:bg-gray-100">JavaScript</li>
    //             <li className="px-4 py-2 hover:bg-gray-100">Node.js</li>
    //           </ul>
    //         </li>
    //       </ul>
    //     </li>

    //     <NavLink>Contact us</NavLink>
    //     <NavLink to="/team">Our Team</NavLink>
    //     <NavLink>Join us</NavLink>
    //   </ul>
    // </nav>
  );
};

export default Navbar;
