import React from "react";
import vector1 from "../../vector1.png";

function Resolved({ resolvedCount }) {
  return (
    <div className="flex-1 flex text-white bg-gradient-to-r from-[#54cf68] to-[#00827a]">
      <img className="w-1/3" src={vector1} alt="" />
      <div className="w-1/3 flex flex-col justify-center items-center">
        <p className="text-xl">Resolved</p>
        <p className="text-4xl font-bold">{resolvedCount}</p>
      </div>
      <img className="w-1/3 transform scale-x-[-1]" src={vector1} alt="" />
    </div>
  );
}

export default Resolved;
