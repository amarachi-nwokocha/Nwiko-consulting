import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
const Objectives = () => {
  return (
    <div className="min-h-[70vh] md:px-10 px-5 pt-10 bg-brightBackGround mb-10">
      <div>
        <h2 className="text-5xl mb-5 hover:cursor-pointer text-bold text-center">
          Our objectives{" "}
        </h2>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between gap-4 md:items-center  px-5 pt-10">
        <div className=" w-full md:w-1/3 bg-white border-2 border-lightText md:border-none rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all">
          <div className="  ">
            <FaChalkboardTeacher
              size={30}
              className="text-white bg-blue p-2 w-16 h-16 rounded-lg"
            />
          </div>
          <div className="p-5">
            <h2 className="text-blue font-bold text-2xl">
              Learning And Performance Academy{" "}
            </h2>
            <p className=" text-lightText">
              We provide Instructor-led Training, E-Learning, International
              Training, Knowledge management, Performance support
            </p>
          </div>
        </div>
        {/* card 2 */}
        <div className=" w-full md:w-1/3 bg-white border-2 border-lightText md:border-none rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all">
          <div className="  ">
            <FaChalkboardTeacher
              size={30}
              className="text-white bg-yellow p-2 w-16 h-16 rounded-lg"
            />
          </div>
          <div className="p-5">
            <h2 className="text-yellow font-bold text-2xl">IT Services</h2>
            <p className=" text-lightText">
              We provide a range of IT services and consulting. Data Science,
              Data Analytics & Data infrastructure, Artificial Intelligence
              (AI), Information Security Management, IT Infrastructure
              Procurement,
            </p>
          </div>
        </div>
        {/* card 3 */}
        <div className=" w-full md:w-1/3 bg-white border-2 border-lightText md:border-none rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all">
          <div className="  ">
            <FaChalkboardTeacher
              size={30}
              className="text-white bg-blue p-2 w-16 h-16 rounded-lg"
            />
          </div>
          <div className="p-5">
            <h2 className="text-blue font-bold text-2xl">
              Human Capital Management
            </h2>
            <p className=" text-lightText">
              We provide Talent Acquisition Services, HR Support Services, HR
              Audit/Organisational Diagnostics, HR Strategy and Talent
              Management,Etc.
            </p>
          </div>
        </div>
        {/* card 4 */}
        <div className=" w-full md:w-1/3 bg-white border-2 border-lightText md:border-none rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all">
          <div className="  ">
            <FaChalkboardTeacher
              size={30}
              className="text-white bg-yellow p-2 w-16 h-16 rounded-lg"
            />
          </div>
          <div className="p-5">
            <h2 className="text-yellow font-bold text-2xl">Event Management </h2>
            <p className=" text-lightText">
              We provide Online Ticketing Platforms, Invitation Distribution
              Service, Event Advertising and Publicity, and Product Advertising
              and Publicity (PR and Media).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Objectives;
