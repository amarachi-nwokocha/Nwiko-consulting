import React from "react";
import ValueCard from "./ValueCard";
// import ObjCard from "../Layout/ObjCard";

const Values = () => {
  return (
    <div className="min-h-[10vh] bg-blue md:px-10 px-5 pt-10 pb-10">
      <div className="text-center  md:mb-20 text-white text-5xl">
        <h2>Our Values</h2>
      </div>

      <div>
    <ValueCard />
      </div>
    </div>
  );
};

export default Values;
