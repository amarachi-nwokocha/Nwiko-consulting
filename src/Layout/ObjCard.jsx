import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";

const ObjCard = (prop) => {
  return (
    <div className="flex flex-col  justify-between  border-lightText md:border-none
      md:w-2/5  cursor-pointer  transition-all">
        <div className="w-20 text-white rounded">
            <FaChalkboardTeacher size={70} className="rounded" />
        </div>
        <div>
        <h3 className="font-semibold text-2xl items-center text-center text-white">
          {prop.title}
        </h3>
        <p className="text-lightText text-center p-5 md:text-start">
         {prop.body}
        </p>
        </div>
    </div>
  );
};

export default ObjCard;
