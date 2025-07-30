// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const ViewPage = () => {
//   const { name } = useParams();
//   const [courseData, setCourseData] = useState([]);
//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   useEffect(() => {
//     const loadContent = async () => {
//       try {
//         const content = await import(
//           `../courses/${name}/${
//             name.charAt(0).toUpperCase() + name.slice(1)
//           }Contents.jsx`
//         );
//         setCourseData(content.default);
//       } catch (error) {
//         console.error("Content not found:", error);
//         setCourseData([]);
//       }
//     };

//     loadContent();
//   }, [name]);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   // Handles topic selection from the sidebar.
//   const handleTopicSelect = (index) => {
//     setSelectedIndex(index);
//     setIsSidebarOpen(false);
//   };

//   return (
//     <div className="flex  flex-col md:flex-row border border-gray-200 shadow-lg rounded-lg bg-white font-sans overflow-hidden">
//       <div className="md:hidden fixed top-6 left-0 right-0 z-50 bg-gray-800 text-white p-4 flex items-center justify-between rounded-t-lg border border-t-0">
//         <h2 className="text-xl font-bold text-green-400">
//           {name.toUpperCase()} Tutorial
//         </h2>
//         <button
//           onClick={toggleSidebar}
//           className="text-white focus:outline-none focus:ring-2 focus:ring-green-400 rounded"
//           aria-label="Toggle menu"
//         >
//           {/* Hamburger/Close Icon based on sidebar state */}
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             {isSidebarOpen ? (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             ) : (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             )}
//           </svg>
//         </button>
//       </div>

//       {/* Sidebar Navigation */}

//       <nav
//         className={`
//           ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
//           md:translate-x-0 md:relative
//           top-16 md:top-auto  
//           left-0 md:left-auto
//           z-40 md:z-auto /* Lower z-index than header but higher than content */
//           w-64 md:w-64
//           max-h-[calc(100vh-theme(spacing.16))] md:h-auto /* Adjusted height for mobile to fill remaining space */
//           bg-gray-800 text-white p-6
//           overflow-y-auto flex-shrink-0
//           transition-transform duration-300 ease-in-out
//           md:transition-none
//           border-2 border-red-600 md:border-t-0 rounded-b-lg md:rounded-lg
//         `}
//       >
//         {/* Desktop Title (hidden on mobile as it's in the header) */}
//         <h2 className="hidden md:block text-2xl font-bold text-green-400 text-center ">
//           {name.toUpperCase()} Tutorial
//         </h2>

//         <ul className="space-y-1">
//           {courseData?.map((ele, ind) => (
//             <li
//               key={ele.key || ind} // Use key from data or index as fallback
//               className={`px-2 py-1 cursor-pointer text-lg rounded-md transition-all duration-200 ease-in-out
//                 ${
//                   ind === selectedIndex
//                     ? "bg-blue-600 border-l-4 border-green-400 font-semibold text-white"
//                     : "hover:bg-gray-700 hover:text-white border-l-4 border-transparent"
//                 }
//               `}
//               onClick={() => handleTopicSelect(ind)}
//             >
//               {ele.key}
//             </li>
//           ))}
//         </ul>
//       </nav>

//       {/* Overlay for mobile when sidebar is open */}
//       {isSidebarOpen && (
//         <div
//           className="md:hidden fixed inset-0 bg-opacity-50 z-30"
//           onClick={() => setIsSidebarOpen(false)}
//         />
//       )}

//       {/* Main Content Area */}
//       <main className="flex-1 overflow-y-auto p-4 md:p-6 pt-20 md:pt-6">
//         {" "}
//         {courseData.length > 0 ? (
//           <div>{courseData[selectedIndex]?.data}</div>
//         ) : (
//           <div className="text-center text-gray-500">Content not found.</div>
//         )}
//       </main>
//     </div>
//   );
// };
// export default ViewPage;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewPage = () => {
  const { name } = useParams();
  const [courseData, setCourseData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const content = await import(
          `../courses/${name}/${
            name.charAt(0).toUpperCase() + name.slice(1)
          }Contents.jsx`
        );
        setCourseData(content.default);
      } catch (error) {
        console.error("Content not found:", error);
        setCourseData([]);
      }
    };

    loadContent();
  }, [name]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Handles topic selection from the sidebar.
  const handleTopicSelect = (index) => {
    setSelectedIndex(index);
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex min-h-screen md:h-screen flex-col md:flex-row border border-gray-200 shadow-lg rounded-lg bg-white font-sans overflow-hidden">
      {/* Mobile Header (fixed at top) */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-gray-800 text-white p-4 flex items-center justify-between border-b border-gray-700">
        <h2 className="text-xl font-bold text-green-400">
          {name.toUpperCase()} Tutorial
        </h2>
        <button
          onClick={toggleSidebar}
          className="text-white focus:outline-none focus:ring-2 focus:ring-green-400 rounded"
          aria-label="Toggle menu"
        >
          {/* Hamburger/Close Icon based on sidebar state */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isSidebarOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Sidebar Navigation */}

      <nav
        className={`
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:relative
          fixed md:static
          top-0 md:top-auto
          left-0 md:left-auto
          z-40 md:z-auto
          w-64 md:w-64
          h-full md:h-auto
          bg-gray-800 text-white p-6
          overflow-y-auto flex-shrink-0
          transition-transform duration-300 ease-in-out
          md:transition-none
          border-2 border-red-600 md:border-t-0 rounded-b-lg md:rounded-lg
        `}
        style={{ maxHeight: '100vh' }}
      >
        {/* Desktop Title (hidden on mobile as it's in the header) */}
        <h2 className="hidden md:block text-2xl font-bold text-green-400 text-center ">
          {name.toUpperCase()} Tutorial
        </h2>

        <ul className="space-y-1">
          {courseData?.map((ele, ind) => (
            <li
              key={ele.key || ind} // Use key from data or index as fallback
              className={`px-2 py-1 cursor-pointer text-lg rounded-md transition-all duration-200 ease-in-out
                ${
                  ind === selectedIndex
                    ? "bg-blue-600 border-l-4 border-green-400 font-semibold text-white"
                    : "hover:bg-gray-700 hover:text-white border-l-4 border-transparent"
                }
              `}
              onClick={() => handleTopicSelect(ind)}
            >
              {ele.key}
            </li>
          ))}
        </ul>
      </nav>

      {/* Overlay for mobile when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-opacity-50 z-30"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-4 md:p-6 pt-16 md:pt-6">
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
