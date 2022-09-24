import React from "react";
import storefront from "../../images/storefront.jpg";
import { BsFillTelephoneFill } from "react-icons/bs";

const OpenTimes = () => {
  return (
    <div className="mt-8 mb-16 lg:mt-16 lg:mb-32 w-full h-[500px]">
      <div
        className="h-full w-full relative bg-fixed bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${storefront})` }}
      >
        {/* black overlay */}
        <div className="absolute left-0 top-0 h-full w-full bg-black bg-opacity-20 z-10"></div>

        {/* Informations overlay */}
        <div className="absolute z-20 h-[80%] w-9/12 left-[15px] lg:w-[600px] bg-primary-eateryLightBrown lg:left-1/4 lg:-translate-x-1/4 top-1/2 -translate-y-1/2 rounded-md shadow-md ">
          <div className="h-full w-full flex flex-col justify-around lg:justify-start lg:p-8 p-4 text-primary-eateryBrown font-semibold text-sm lg:text-2xl lg:space-y-4">
            <p>Opens at 7am</p>
            <p>Serving breakfast and lunch 7am to 2pm</p>
            <p>Evening menu 2pm – 10pm</p>
            <p>Serving beer and wine & dine to go</p>
            <p>Eatery and Deli phone:</p>
            <div className="flex items-center space-x-2">
              <BsFillTelephoneFill className="fill-current text-gray-900 h-7 w-7" />
              <p className="text-gray-900 font-bold">845-398-1454</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenTimes;
