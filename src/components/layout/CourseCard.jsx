import React from "react";
import { GiProgression } from "react-icons/gi";

// import cpp from "../../assets/courseCard/cpp.webp";
import cpp from "../../assets/courseCard/cpp.webp";
import dsa from "../..//assets/courseCard/dsa.webp";
import java from "../../assets/courseCard/java.webp";
import mern from "../../assets/courseCard/mern.png";
import python from "../../assets/courseCard/python.webp";
import interview from "../../assets/courseCard/tech_interview.webp";
import { NavLink } from "react-router-dom";
const items = [
  {
    name: "cpp",
    img: cpp,
    sub: "C++ Programming Course Online",
    level: "Beginner to Advance",
    rating: "rating",
  },
  {
    name: "java",
    img: java,
    sub: "Complete Java Programming Course",
    level: "Intermediate to Advance",
    rating: "rating",
  },
  {
    name: "python",
    img: python,
    sub: "Python Programming Bootcamp",
    level: "Beginner to Advance",
    rating: "rating",
  },
  {
    name: "mern",
    img: mern,
    sub: "Full Stack Developer : MERN",
    level: "Beginner to Advance",
    rating: "rating",
  },
  {
    name: "dsa",
    img: dsa,
    sub: "Master DSA: Logic, Code, Success",
    level: "Beginner to Advance",
    rating: "rating",
  },
  {
    name: "interview",
    img: interview,
    sub: "Ace the Interview: Tech Edition",
    level: "Beginner to Advance",
    rating: "rating",
  },
];

const CourseCard = () => {
  return (
    <div className="">
      <h1 className="text-center text-3xl font-semibold sm:text-4xl">Course</h1>
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-2 sm:mx-4 md:mx-6 lg:mx-8 gap-2">
        {items.map((card, index) => (
          <NavLink
            to={`/course/${card.name}`}
            key={index}
            className="shadow-2xl rounded-xl mx-1 md:mx-2 lg:mx-3 pb-2 hover:bg-blue-100"
          >
            <img
              src={card.img}
              alt=""
              className="rounded-tl-xl rounded-tr-xl"
            />
            <h1 className="text-xl font-semibold px-3">{card.sub}</h1>
            <div className="flex px-3 items-center text-gray-800 gap-1">
              <GiProgression />
              <p className="">{card.level}</p>
            </div>
            <p className="px-3">{card.rating}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default CourseCard;
