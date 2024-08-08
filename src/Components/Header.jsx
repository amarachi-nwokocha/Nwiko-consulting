import React from "react";
import values from "../assets/values.png";
const Header = () => {
  return (
    <div className="min-h-[70vh] bg-blue flex flex-col md:flex-row md:justify-between md:items-center md:px-20 px-5 pt-10">
      <div className="md:w-2/4 text-white md:mr-8  ">
        <h2 className="text-4xl mb-5 hover:cursor-pointer w-fit hover:border-b-4 hover:border-b-yellow font-semibold">What is <span className="text-yellow">NWIKO</span> Consulting?</h2>
        <p className="text-start text-lg">
          At NWIKO Consulting Limited, we drive innovation and optimize
          processes through our comprehensive services. Our Business Advisory
          supports strategic planning, operational efficiency, financial
          management, market research, risk management, and mergers and
          acquisitions.
        </p>
      </div>
      <div className="w-full md:w-2/4">
        <img src={values} alt="" />
      </div>
    </div>
  );
};

export default Header;
