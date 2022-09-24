import React from "react";
import { Link } from "react-router-dom";
import EateryLogo from "../../images/eaterylogo.png";

const Footer = () => {
  return (
    <footer className="lg:mt-32 mt-16 text-primary-eateryLightBrown relative">
      {/* wrapper */}
      <div className="bg-[#111111] w-full ">
        <div className="lg:max-w-screen-2xl w-full flex flex-col space-y-10 items-center lg:space-y-0 lg:flex-row lg:justify-between lg:space-x-4 lg:items-start py-24 mx-auto h-full lg:px-8">
          {/* logo */}
          <Link to="/eatery" className=" flex-1">
            <img src={EateryLogo} className="h-36 w-36 object-contain" alt="" />
          </Link>

          {/* about */}
          <div className="flex flex-col space-y-4 max-w-md text-center lg:text-start flex-1">
            <h1 className="text-primary-eateryBrown text-2xl font-semibold">
              About Us
            </h1>
            <p className="text-sm px-4 lg:text-base lg:px-0 text-primary-eateryLightBrown">
              At Baileys we take all reservations and also have a private party
              room available. Contact us by email or phone to make a reservation
              today.
            </p>
          </div>

          {/* newsletter */}
          <div className="h-full w-full flex-1 flex flex-col space-y-4 items-center lg:items-end">
            <h1 className="text-primary-eateryBrown text-2xl font-semibold">
              Join our Newsletter
            </h1>
            <div className="flex flex-col space-y-2">
              <p className="text-sm px-4 lg:text-base lg:px-0 text-primary-eateryLightBrown">
                Submit your Email to receive all the latest News.
              </p>
              <form className="w-full relative px-4">
                <input
                  type="email"
                  required
                  className="py-2 px-4 rounded-full w-full outline-none bg-primary-eateryLightBrown text-primary-eateryBrown placeholder:text-gray-400 pr-20"
                  placeholder="enter your email address..."
                />

                <button
                  type="submit"
                  className="h-full px-4 absolute right-0 top-0 text-white bg-primary-eateryBrown font-semibold rounded-r-full"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* smaller bottom footer */}
      <div className="absolute w-full left-0 bottom-0 py-3 border-t border-primary-eateryLightBrown text-xs flex items-center justify-center text-center">
        <p className="tracking-wider">
          Copyright © {new Date().getFullYear()} Bailey’s Smokehouse. All Rights
          Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
