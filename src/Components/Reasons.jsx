import React from "react";
import person from "../assets/sec6.jpg";
import why1 from "../assets/why1.png";
import why2 from "../assets/why2.png";
import why3 from "../assets/why3.png";
const Reasons = () => {
  return (
    <div className="min-h-[70vh] md:px-10 px-5 pt-10 bg-brightBackGround">
      <div className="md:px-20 px-5  py-10">
        <h2 className="text-4xl mb-5 hover:cursor-pointer w-fit hover:border-b-4 hover:border-b-blue font-semibold">
          Why <span className="text-yellow">NWIKO</span> Consulting ?
        </h2>
        <p className="text-start text-lg leading-tight">
          We believe that our clients' success is our success; we believe in
          professionalism, we consistently maintain high standards for service
          and consultants to always be able to bring the best team of senior
          consultants to bear on every single project. Other reasons include:
        </p>
      </div>
      <section className=" flex flex-col md:flex-row md:justify-between  md:px-20 px-5 pt-10">
        <div>
          <div className="md:flex-row w-full md:w-[40vw]">
            <div className="flex gap-3 md:flex-row">
              <img src={why1} alt=""  className="w-14 h-14" />
              <h2 className=" font-bold text-blue text-2xl mb-4">
                Save 40 % of your project schedule before you start!!
              </h2>
            </div>
            <div>
              <p className="text-lg leading-tight">
                Through our diverged geographical presence, and as we operate in
                two different continents with two different time zones; our
                consultants are there for you during 56 hours/ week while most
                service providers normally operate only 40 hours/ week.
              </p>
            </div>
          </div>
          <div className=" w-full md:w-[40vw] mt-14">
            <div className="flex gap-3 md:flex-row">
              <img src={why2} alt=""  className="w-14 h-18" />
              <h2 className=" font-bold text-blue text-2xl mb-4">
                Multilingual Consultants
              </h2>
            </div>
            <div>
              <p className="text-lg leading-tight">
                Our multilingual consultants are a definite asset in
                communicating with the project stakeholders; minimizing the gap
                that usually occurs due to language and culture barriers.
              </p>
            </div>
          </div>
          <div className="w-full md:w-[40vw] mt-14">
            <div className="flex gap-3 md:flex-row justify-center">
              <img src={why3} alt="" className="w-14 h-14"/>
              <h2 className=" font-bold text-blue text-2xl pb-2 ">
                World Class Project Management
              </h2>
            </div>
            <div>
              <p className="text-lg leading-tight">
                NWIKO Consulting outsources experienced Project Manager to many
                worldwide elite enterprises. Experience our Project Management
                Services that shall be embedded in our proposed
              </p>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <img src={person} alt="" className="h-fit" />
        </div>
      </section>
    </div>
  );
};

export default Reasons;
