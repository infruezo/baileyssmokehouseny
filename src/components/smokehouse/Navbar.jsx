import React, { useState } from "react";

import { GiHamburgerMenu, GiRotaryPhone } from "react-icons/gi";
import { RiNavigationLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  return (
    <div className="w-full relative lg:h-[425px] h-[350px] font-poppins z-10">
      {/* small fixed top menu for mobile */}
      <div className="top-0 left-0 w-full bg-black lg:hidden h-12 fixed z-40">
        <div className="flex flex-row-reverse items-center px-4 justify-between h-full">
          {/* mobile toggler */}
          <GiHamburgerMenu
            onClick={() => setActiveMenu(true)}
            className="fill-current text-white h-8 w-8 cursor-pointer hover:text-red-500 duration-300"
          />

          {/* tel and order online buttons */}
          <div className="flex items-center space-x-2 text-xs">
            <a
              href="tel:845-398-1454"
              rel="noreferrer"
              className="px-4 py-1 rounded-full bg-white text-red-500 hover:bg-red-500 hover:text-white duration-300"
            >
              <div className="flex items-center space-x-1">
                <GiRotaryPhone className="h-4 w-4" />
                <span className="font-semibold tracking-wide">
                  845-398-1454
                </span>
              </div>
            </a>

            <a
              href="https://ordering.chownow.com/order/3877/locations"
              rel="noreferrer"
              target="_blank"
              className="px-4 py-1 rounded-full text-white bg-red-500 hover:bg-white hover:text-red-500 duration-300"
            >
              <div className="flex items-center space-x-1">
                <RiNavigationLine className="h-4 w-4" />
                <span className="font-semibold tracking-wide">
                  Order Online
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* main navbar (logo + desktop links) */}
      <div className="w-full py-6 mt-12 lg:mt-0 bg-transparent text-white">
        <div className="flex items-center justify-center lg:justify-between px-2 w-full xl:max-w-screen-xl lg:max-w-screen-lg mx-auto">
          <Link to="/hours-and-menus">
            <img
              src="images/landing/smokehouselogo.png"
              loading="lazy"
              className="h-[h-107px] w-[200px] scale-75 lg:scale-100"
              alt=""
            />
          </Link>

          <div className="hidden lg:flex lg:flex-col lg:space-y-6">
            {/* number and order buttons */}
            <div className="flex items-center space-x-2 text-xs justify-end">
              <a
                href="tel:845-398-1454"
                rel="noreferrer"
                className="px-7 py-3 rounded-full bg-white text-red-500 hover:bg-red-500 hover:text-white shadow-md duration-300"
              >
                <div className="flex items-center space-x-1">
                  <GiRotaryPhone className="h-4 w-4" />
                  <span className="font-semibold tracking-wide">
                    845-398-1454
                  </span>
                </div>
              </a>

              <a
                href="https://ordering.chownow.com/order/3877/locations"
                rel="noreferrer"
                target="_blank"
                className="px-7 py-3 rounded-full text-white bg-red-500 hover:bg-white hover:text-red-500 shadow-md duration-300"
              >
                <div className="flex items-center space-x-1">
                  <RiNavigationLine className="h-4 w-4" />
                  <span className="font-semibold tracking-wide">
                    Order Online
                  </span>
                </div>
              </a>
            </div>

            {/* navigation links */}
            <nav className="flex items-center xl:space-x-12 lg:space-x-4 uppercase font-semibold tracking-wide text-lg">
              <Link className="hover:text-red-400 duration-300" to="/home">
                Home
              </Link>
              <Link className="hover:text-red-400 duration-300" to="/about">
                About
              </Link>
              <Link className="hover:text-red-400 duration-300" to="/menu">
                Menu
              </Link>
              <Link className="hover:text-red-400 duration-300" to="/catering">
                Catering
              </Link>
              <Link
                className="hover:text-red-400 duration-300"
                to="/event-calendar"
              >
                Event Calendar
              </Link>
              <Link className="hover:text-red-400 duration-300" to="/gallery">
                Gallery
              </Link>
              <Link
                className="hover:text-red-400 duration-300"
                to="/contact-us"
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* mobile menu */}
      {activeMenu && (
        <div className="fixed top-0 z-50 left-0 flex flex-col items-center w-full h-screen max-h-screen px-20 pt-3 pb-12 overflow-y-hidden bg-[#161616] text-red-50 lg:hidden">
          <div className="absolute top-4 right-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 hover:text-red-500 transform duration-300 cursor-pointer fill-current"
              onClick={() => setActiveMenu(false)}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <Link to="/hours-and-menus" className="w-full">
            <img
              src="images/landing/smokehouselogo.png"
              alt="logo"
              loading="lazy"
              className="object-cover h-[h-107px] w-[200px] scale-75  mx-auto"
            />
          </Link>
          <div className="flex flex-col text-xl font-medium items-center justify-center mt-12 space-y-6 ">
            <Link
              to="/home"
              className="hover:text-red-500 duration-200 cursor-pointer"
              onClick={() => setActiveMenu(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-red-500 duration-200 cursor-pointer"
              onClick={() => setActiveMenu(false)}
            >
              About Us
            </Link>
            <Link
              to="/menu"
              className="hover:text-red-500 duration-200 cursor-pointer"
              onClick={() => setActiveMenu(false)}
            >
              Menu
            </Link>
            <Link
              to="/catering"
              className="hover:text-red-500 duration-200 cursor-pointer"
              onClick={() => setActiveMenu(false)}
            >
              Catering
            </Link>
            <Link
              to="/event-calendar"
              className="hover:text-red-500 duration-200 cursor-pointer"
              onClick={() => setActiveMenu(false)}
            >
              Event Calendar
            </Link>
            <Link
              to="/gallery"
              className="hover:text-red-500 duration-200 cursor-pointer"
              onClick={() => setActiveMenu(false)}
            >
              Gallery
            </Link>
            <Link
              to="/contact-us"
              className="hover:text-red-500 duration-200 cursor-pointer"
              onClick={() => setActiveMenu(false)}
            >
              Contact Us
            </Link>

            <a
              href="tel:845-398-1454"
              rel="noreferrer"
              className="w-full py-2 px-4 rounded-full bg-white text-red-500 hover:bg-red-500 hover:text-white shadow-md duration-300"
            >
              <div className="flex items-center space-x-1">
                <GiRotaryPhone className="h-4 w-4" />
                <span className="font-semibold tracking-wide">
                  845-398-1454
                </span>
              </div>
            </a>

            <a
              href="https://ordering.chownow.com/order/3877/locations"
              rel="noreferrer"
              target="_blank"
              className="w-full py-2 px-4 rounded-full text-white bg-red-500 hover:bg-white hover:text-red-500 shadow-md duration-300"
            >
              <div className="flex items-center space-x-1">
                <RiNavigationLine className="h-4 w-4" />
                <span className="font-semibold tracking-wide">
                  Order Online
                </span>
              </div>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
