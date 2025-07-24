import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewPage = () => {
  const { name } = useParams();
  const [courseData, setCourseData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const content = await import(
          `../courses/${name}/${
            name.charAt(0).toUpperCase() + name.slice(1)
          }Contents.jsx`
        );
        setCourseData(content.default); // since we are using export default
      } catch (error) {
        console.error("Content not found:", error);
        setCourseData([]); // fallback
      }
    };

    loadContent();
  }, [name]);
  return (
    <div className="flex h-screen flex-col md:flex-row border border-gray-200 shadow-lg rounded-lg bg-white font-sans overflow-hidden">
      {/* Sidebar */}
      <nav className="w-full md:w-64 bg-gray-800 text-white p-6 overflow-y-auto flex-shrink-0">
        <h2 className="text-2xl font-bold text-green-400 mb-6 text-center">
          {name.toUpperCase()} Tutorial
        </h2>
        <ul className="space-y-1">
          {courseData?.map((ele, ind) => (
            <li
              key={ele.key || ind}
              className={`px-2 py-1 cursor-pointer text-lg rounded-md transition-all duration-200 ease-in-out
            ${
              ind === selectedIndex
                ? "bg-blue-600 border-l-4 border-green-400 font-semibold text-white"
                : "hover:bg-gray-700 hover:text-white border-l-4 border-transparent"
            }
          `}
              onClick={() => setSelectedIndex(ind)}
            >
              {ele.key}
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6">
        {courseData.length > 0 ? (
          <div>{courseData[selectedIndex]?.data}</div>
        ) : (
          <div className="text-center text-gray-500">Content not found.</div>
        )}
      </main>
    </div>
  );
};

export default ViewPage;
