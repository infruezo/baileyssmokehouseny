import React from "react";
import { Link } from "react-router-dom";
import SocialsWidget from "../components/SocialsWidget";

import Smokehouse from "../images/smokehouselogo.png";
import Eaterylogo from "../images/eaterylogo.png";
import SmokehouseBg from "../images/smokehouse-bg.jpg";
import EateryBg from "../images/eatery-bg.jpg";

const Main = () => {
  return (
    <>
      <SocialsWidget direction="vertical" />

      <div className="min-h-screen w-full flex flex-col lg:flex-row font-poppins relative">
        {/* Left Image */}
        <div className="lg:flex-1 min-h-screen relative flex items-center justify-center">
          {/* background image and overlay */}
          <div className="absolute w-full h-full top-0 left-0 -z-10">
            <img
              src={SmokehouseBg}
              className="w-full h-full object-cover "
              alt=""
            />

            {/* overlay */}
            <div className="bg-black w-full h-full absolute left-0 top-0 bg-opacity-30"></div>
          </div>

          <Link to="/hours-and-menus">
            <div className="w-full h-full flex flex-col space-y-4 p-4 items-center">
              <img
                src={Smokehouse}
                className="lg:h-48 lg:w-56 w-32 h-28"
                alt="logo"
              />
              <h1 className="text-white font-bold lg:text-4xl text-2xl px-4 text-center">
                Smokehouse, Takeout & Catering
              </h1>
            </div>
          </Link>
        </div>

        {/* Right Image */}
        <div className="lg:flex-1 min-h-screen relative flex items-center justify-center">
          {/* background image and overlay */}
          <div className="absolute w-full h-full top-0 left-0 -z-10">
            <img src={EateryBg} className="w-full h-full object-cover" alt="" />

            {/* overlay */}
            <div className="bg-black w-full h-full absolute left-0 top-0 bg-opacity-30"></div>
          </div>

          <Link to="/eatery">
            <div className="w-full h-full flex flex-col space-y-4 p-4 items-center">
              <img
                src={Eaterylogo}
                className="lg:h-48 lg:w-56 w-32 h-28"
                alt="logo"
              />
              <h1 className="text-white font-bold lg:text-4xl text-2xl px-4 text-center">
                Bailey’s Eatery, Breakfast bar & Bistro
              </h1>
            </div>
          </Link>
        </div>

        {/* Small Footer at the end of the page */}
        <div className="lg:absolute bottom-0 left-0 flex items-center justify-center w-full h-12 bg-black  text-white font-semibold lg:text-sm text-xs">
          <p className="tracking-wider">
            Copyright © {new Date().getFullYear()} Bailey’s Smokehouse. All
            Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Main;
