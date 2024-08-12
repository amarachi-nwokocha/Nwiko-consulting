import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";

const ObjCard = (prop) => {
  return (
    <div className="max-h-fit max-w-fit   border-4 border-yellow rounded-bl-lg rounded-tr-lg text-white font-semibold">
      <img src={prop.img} alt="" width={70} height={70} />
      <div className="p-2">
       <h2 className="text-2xl  ">{prop.name}</h2>
      <p className="font-bold text-yellow mb-4">{prop.title}</p>
      <p className="text-sm">{prop.text}</p>
      </div>
    </div>
  );
};

export default ObjCard;
