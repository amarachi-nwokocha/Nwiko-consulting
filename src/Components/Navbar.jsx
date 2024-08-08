import { Link } from "react-scroll";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import logo from "../assets/logo1.png";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <div className="flex flex-row justify-between p-5 md:px-32 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
        <div>
          <Link
            to="/"
            className="font-semtext-blue text-[20px] hover:text-yellowsor-pointer"
          >
            <img src={logo} alt="" />
          </Link>
        </div>
        <nav className="hidden mt-7 md:flex gap-5 font-medium p-1 cursor-pointer">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="text-blue text-[20px] hover:text-yellow transition-all "
          >
            Home
          </Link>
          <Link
            to="objectives"
            spy={true}
            smooth={true}
            duration={500}
            className="text-blue text-[20px] hover:text-yellow transition-all "
          >
            Objectives
          </Link>
          <Link
            to="values"
            spy={true}
            smooth={true}
            duration={500}
            className="text-blue text-[20px] hover:text-yellow transition-all "
          >
            Values
          </Link>
          {/* <Link
            to="Mission"
            spy={true}
            smooth={true}
            duration={500}
            className="text-blue text-[20px] hover:text-yellow transition-all"
          >
            Mission
          </Link> */}
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="text-blue text-[20px] hover:text-yellow transition-all"
          >
            Contact
          </Link>
        </nav>
        <div className="flex md:hidden " onClick={handleNav}>
          <div className="p-2 ">
            <AiOutlineMenu size={30} />
          </div>
        </div>
      </div>
      <div
        className={`${
          nav ? "translate-x-0" : "hidden"
        } md:hidden flex flex-col absolute bg-white left-0 top-24 text-center text-blue text-[20px] hover:text-yellow pb-4 gap-8 w-full h-fit transition-transform duration-300 font-semibold`}
      >
        {/* mobile nav */}
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className="text-blue text-[20px] hover:text-yellow transition-all "
        >
          Home
        </Link>
        <Link
          to="objectives"
          spy={true}
          smooth={true}
          duration={500}
          className="text-blue text-[20px] hover:text-yellow transition-all "
        >
          Objectives
        </Link>
        <Link
          to="values"
          spy={true}
          smooth={true}
          duration={500}
          className="text-blue text-[20px] hover:text-yellow transition-all "
        >
          Values
        </Link>
        <Link
          to="Mission"
          spy={true}
          smooth={true}
          duration={500}
          className="text-blue text-[20px] hover:text-yellow transition-all"
        >
          Mission
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          className="text-blue text-[20px] hover:text-yellow transition-all"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
