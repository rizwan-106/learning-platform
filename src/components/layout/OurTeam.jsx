import React from "react";
import rizz from "../../assets/team/rizz.jpg";
import ahmad from "../../assets/team/ahmad.jpg";
const OurTeam = () => {
  const teams = [
    {
      img: rizz,
      name: "Rizwan",
      roleHead: "Java Content Writer",
      roleContent:
        "Write about java. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, eaque? Sapiente maxime fuga illo, repellat rem labore voluptates dignissimos modi.",
    },
    {
      img: ahmad,
      name: "Ahmad",
      roleHead: "React Content Writer",
      roleContent:
        "Write about python. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, eaque? Sapiente maxime fuga illo, repellat rem labore voluptates dignissimos modi.",
    },
    {
      img: rizz,
      name: "Amit",
      roleHead: "NodeJs Content Writer",
      roleContent:
        "Write about node. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, eaque? Sapiente maxime fuga illo, repellat rem labore voluptates dignissimos modi.",
    },
    {
      img: ahmad,
      name: "Roushan",
      roleHead: "Java Content Writer",
      roleContent:
        "Write about python. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, eaque? Sapiente maxime fuga illo, repellat rem labore voluptates dignissimos modi.",
    },
  ];

  const TeamDetails = ({ teams }) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-6 px-4 sm:px-6 md:px-12 lg:px-24 py-10">
        {teams.map((team, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row bg-white shadow-2xl rounded-2xl overflow-hidden"
          >
            {/* Left: Image */}
            <div className="w-full sm:w-1/3 flex justify-center items-center">
              <img
                src={team.img}
                alt={team.name}
                className="w-3/5 sm:w-full  rounded-2xl sm:rounded-none sm:rounded-l-2xl md:rounded-2xl"
              />
            </div>

            {/* Right: Content */}
            <div className="w-full sm:w-2/3 p-6 sm:p-8 text-center ">
              <div className="text-2xl font-semibold text-gray-800">
                {team.name}
              </div>
              <div className="text-lg text-gray-600 mt-1">{team.roleHead}</div>
              <p className="text-base text-slate-700 mt-3 text-justify">
                {team.roleContent}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  return <TeamDetails teams={teams} />;
};

export default OurTeam;
