import React from "react";
// import ObjCard from "../Layout/ObjCard";
import value1 from "../assets/icon1.png";
import value2 from "../assets/icon2.svg";
import value3 from "../assets/icon3.png";
import value4 from "../assets/icon4.svg";
import value5 from "../assets/icon5.svg";
const Values = () => {
  return (
    <div className="min-h-[70vh] bg-blue md:px-20 px-5 pt-10 pb-10">
        <div className="text-center my-5 md:mb-20 text-white text-5xl">
            <h2>Our Values</h2>
        </div> 
      <div className="flex flex-col gap-6 md:flex-row md:justify-between md:items-center">
        <div className="md:w-2/4 md:pr-3 text-white">
          <div>
            <div className="w-20 h-20">
              <img src={value1} alt="" />
            </div>
            <h2 className="text-yellow text-3xl">Excellence</h2>
            <p>We strive to be excellent in all that we do</p>
          </div>
        </div>
        <div className="md:w-3/4 text-white">
          <div>
            <div className="w-20 h-20">
              <img src={value2} alt="" className="h-30 w-40" />
            </div>
            <h2 className="text-yellow text-3xl">Integrity</h2>
            <p>
              We conduct our business with the highest standards of ethics and
              transparency
            </p>
          </div>
        </div>
        <div className="md:w-[70vw] text-white">
          <div>
            <div className="w-20 h-20">
              <img src={value3} alt="" />
            </div>
            <h2 className="text-yellow text-3xl">Customer</h2>
            <p>
              We place them at the heart of our business & relentlessly meet
              their expectations
            </p>
          </div>
        </div>
        <div className="md:w-2/4 text-white">
          <div>
            <div className="w-20 h-20">
              <img src={value4} alt="" className="h-30 w-40" />
            </div>
            <h2 className="text-yellow text-3xl">Humility</h2>
            <p className="md:w-[20vw]">
              We approach our work and relationships with humility,
               open
              to learning and improvement.
            </p>
          </div>
        </div>
        <div className="md:w-3/4 text-white">
          <div>
            <div className="w-20 h-20">
              <img src={value5} alt="" className="h-30 w-40" />
            </div>
            <h2 className="text-yellow text-3xl">Timeliness</h2>
            <p>We deliver our services and products on time, every time.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
