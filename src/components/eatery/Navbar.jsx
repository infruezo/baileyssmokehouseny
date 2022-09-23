import React from "react";
import { BsFillTelephoneFill, BsFillClockFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { GrFacebook } from "react-icons/gr";
import { FaTwitterSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";

import EateryLogo from "../../images/eaterylogo.png";

const Navbar = () => {
  return (
    <nav className="w-full h-32 font-poppins text-sm">
      {/* top navbar */}
      <div className="w-full h-12 bg-[#7F4726] text-white flex items-center px-4">
        <div className="w-full xl:max-w-screen-2xl lg:max-w-screen-xl md:max-w-screen-lg h-full mx-auto flex items-center lg:justify-between justify-center">
          {/* right side */}
          <div className="items-center xl:space-x-12 lg:space-x-8 hidden lg:flex">
            {/* one icon */}
            <div className="flex items-center space-x-2">
              <BsFillTelephoneFill className="h-5 w-5" />
              <p>845-398-1454</p>
            </div>

            {/* one icon */}
            <div className="flex items-center space-x-2">
              <MdLocationOn className="h-6 w-6" />
              <p>135 East Erie St. Blauvelt, NY 10913</p>
            </div>

            {/* one icon */}
            <div className="flex items-center space-x-2">
              <BsFillClockFill className="h-5 w-5" />
              <p>7am to 10pm</p>
            </div>
          </div>

          {/* left side */}
          <div className="flex items-center xl:space-x-4 lg:space-x-2 space-x-4">
            <a
              href="https://www.facebook.com/baileyssmokehouse/"
              rel="noreferrer"
              target="_blank"
            >
              <GrFacebook className="h-4 w-4 lg:h-6 lg:w-6" />
            </a>
            <a
              href="https://twitter.com/baileysblauvelt"
              rel="noreferrer"
              target="_blank"
            >
              <FaTwitterSquare className="h-5 w-5 lg:h-7 lg:w-7" />
            </a>
            <a
              href="https://www.instagram.com/baileysmokehouse/"
              rel="noreferrer"
              target="_blank"
            >
              <AiFillInstagram className="h-5 w-5 lg:h-8 lg:w-8" />
            </a>
          </div>
        </div>
      </div>

      {/* main navbar */}
      <div className="h-full px-4">
        <div className="w-full xl:max-w-screen-2xl lg:max-w-screen-xl md:max-w-screen-lg h-full mx-auto flex items-center justify-between ">
          {/* logo */}
          <img src={EateryLogo} className="h-36 w-36 object-contain" alt="" />

          {/* links */}
          <div className="lg:flex items-center xl:space-x-14 lg:space-x-8 font-semibold text-lg hidden text-[#7F4726]">
            <a href="/">About Us</a>
            <a href="/">Events</a>
            <a href="/">Menus</a>
            <a href="/">Gallery</a>
            <a href="/">Contact Us</a>
          </div>

          {/* mobile toggler */}
          <div className="block lg:hidden">
            <FiMenu className="h-8 w-8 cursor-pointer fill-current text-[#7F4726]" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
