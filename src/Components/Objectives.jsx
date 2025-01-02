import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { RiCalendarEventFill } from "react-icons/ri";
import { FaUserGear } from "react-icons/fa6";
import integration from '../assets/integration.png'
import strategy from '../assets/strategy.png'
import research from '../assets/research.png'
import tracking from '../assets/tracking.png'
const Objectives = () => {
  return (
    <div className="min-h-[70vh] w-fit pb-10 md:px-10 px-5 pt-10 bg-brightBackGround">
      <div>
        <h2 className="text-5xl mb-5 hover:cursor-pointer text-bold text-center">
          Our Objectives{" "}
        </h2>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-4   px-5 pt-10">

      <div className=" w-fit h-fit bg-white border-2 border-lightText md:border-none rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all">
          <div className="text-white bg-blue p-2 w-16 h-16 rounded-lg">
           <img src={strategy} className="" /> 
           </div>
          <div className="p-5 flex-1">
            <h2 className="text-blue font-bold text-2xl">
            Strategy and Policy Development
            {" "}
            </h2>
            <p className=" text-lightText">
            Short Write-up: We assist organizations in crafting evidence-based strategies, developing policies, and ensuring alignment with global and local objectives to drive sustainable impact.

            </p>
          </div>
        </div>
        <div className=" w-fit h-fit bg-white border-2 border-lightText md:border-none rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all">
          <div className=" text-white bg-yellow p-2 w-16 h-16 rounded-lg ">
          <img src={integration} className="" /> 
          </div>
          <div className="p-5 flex-1">
            <h2 className="text-yellow font-bold text-2xl">
            Program Implementation
            {" "}
            </h2>
            <p className=" text-lightText">
            We deliver end-to-end program implementation services, ensuring efficiency, effectiveness, and alignment with organizational goals.


            </p>
          </div>
        </div>
        <div className=" w-fit h-fit bg-white border-2 border-lightText md:border-none rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all">
          <div className=" bg-blue p-2 w-16 h-16 rounded-lg ">
          <img src={research} className="" /> 
          </div>
          <div className="p-5 flex-1">
            <h2 className="text-blue font-bold text-2xl">
            Research and Data Management
            {" "}
            </h2>
            <p className=" text-lightText">
            We provide cutting-edge research, data collection, and management solutions to empower decision-making and generate actionable insights.

            </p>
          </div>
        </div>
        <div className=" w-fit h-fit bg-white border-2 border-lightText md:border-none rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all">
        <div className=" bg-yellow p-2 w-16 h-16 rounded-lg ">
        <img src={tracking} className="" /> 
          </div>
          <div className="p-5 flex-1">
            <h2 className="text-yellow font-bold text-2xl">
            Monitoring, Evaluation, and Learning
            {" "}
            </h2>
            <p className=" text-lightText">
            We specialize in designing and implementing robust MEL frameworks to track progress, evaluate impact, and integrate learning for continuous improvement.
            </p>
          </div>
        </div>

        <div className=" w-fit h-fit bg-white border-2 border-lightText md:border-none rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all">
          <div className="  ">
            <FaChalkboardTeacher
              size={30}
              className="text-white bg-blue p-2 w-16 h-16 rounded-lg"
            />
          </div>
          <div className="p-5 flex-1">
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
        <div className=" w-fit h-fit bg-white border-2 border-lightText md:border-none rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all">
          <div className="  ">
            <FaLaptopCode
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
        <div className=" w-fit h-fit bg-white border-2 border-lightText md:border-none rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all">
          <div className="  ">
            <MdManageAccounts
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
        <div className=" w-fit h-fit bg-white border-2 border-lightText md:border-none rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all">
          <div className="  ">
            <RiCalendarEventFill
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
