import React from 'react'
import { Link } from "react-scroll"
import logo from "../assets/logo2.png";
const Footer = () => {
  return (
    <div>
    <div className=" flex flex-col md:flex-row justify-between bg-white border-b-4 border-lightText  md:px-32 p-5">
      <div className="flex flex-col md:flex-row gap-5 font-medium p-1 text-lg">
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className=" hover:text-yellow transition-all cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="objectives"
          spy={true}
          smooth={true}
          duration={500}
          className=" hover:text-yellow transition-all cursor-pointer"
        >
          Objectives
        </Link>
        <Link
          to="values"
          spy={true}
          smooth={true}
          duration={500}
          className=" hover:text-yellow transition-all cursor-pointer"
        >
          Values
        </Link>

        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          className=" hover:text-yellow transition-all cursor-pointer"
        >
          Contact
        </Link>
      </div>

      <div className=" mt-4 md:mt-0">
        <Link to="/" className="text-yellow font-semibold text-2xl p-1 cursor-pointer">
            Nwiko consulting
        </Link>
      </div>
    </div>
  </div>
  )
}

export default Footer