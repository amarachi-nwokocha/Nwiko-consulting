import React from "react";
import ObjCard from "../Layout/ObjCard";
import ceo from "../assets/person1.jpg";
import coo from "../assets/person2.jpg";
import cto from "../assets/cto.jpg";
import cmo from "../assets/mau.jpg";
import cfo from '../assets/alex.jpg'
import sco from '../assets/sunny.png'
const Team = () => {
  return (
    <div className="min-h-[70vh]  bg-blue flex flex-col  md:items-center md:px-20 px-5 py-10">
      <div className="text-center my-5 md:mb-20 text-white text-5xl">
        <h2>
          Meet the <span className="text-yellow">Team</span>
        </h2>
      </div>
      <div className="grid gap-10 snap-x mt-14 md:mt-0  md:grid-cols-3 pb-10">
        <ObjCard
          img={ceo}
          name="Precious NWIKO"
          title="Chief Executive Officer"
          text="Precious NWIKO is a seasoned expert in digital health, vaccine cold chain logistics, and health information systems, holding advanced credentials from Harvard University, the University of Essex, the University of Greenwich, and the American University of Nigeria,with over 14 years of experience.
"
        />
        <ObjCard
          img={cmo}
          name="Maureen Dede"
          title="Chief Marketing Officer (CMO)"
          text="Maureen Dede is a dynamic marketing professional with over five years of experience. She specializes in brand strategy, digital marketing, and customer relationship management, passionately amplifying brand voices and connecting people to modern solutions."
        />
        <ObjCard
          img={cto}
          name="Idahtonye Toby"
          title="Chief Technical Officer (CTO)"
          text="Idahtonye Toby is a skilled IT professional with 10 years of experience in technical support, adept at resolving hardware, software, and networking issues efficiently while ensuring excellent customer service and effective "
        />
        <ObjCard
          img={coo}
          name="Nnamdi Nwamaghinna"
          title="Chief Operations & Asset Integrity Officer (COO)"
          text="Nnamdi Nwamaghinna is a dedicated Corrosion & Inspection Engineer in the Nigerian Oil and Gas Industry with over nine years of experience, specializing in offshore asset integrity management and innovative inspection technologies."
        />
        <ObjCard
          img={cfo}
          name="Alexandra Omavuohrerhe"
          title="Chief Financial Officer (CFO)"
          text="Alexandra is an accomplished financial executive with extensive experience in auditing, risk management, and financial analysis. With over eight years of expertise in public accounting, specializing in compliance with financial regulations, developing robust internal controls, and leading teams toward achieving financial efficiency."
        />
        <ObjCard
          img={sco}
          name="Sunny Idoko"
          title="Brand Strategy and Communications Officer (BSCO)"
          text="Sunny Idoko is a seasoned brand communication specialist and business strategist with over eight years of experience. He excels in performance marketing, brand strategy, and communications, driving business growth and enhancing brand visibility through innovative campaigns."
        />
      </div>
    </div>
  );
};
export default Team;
