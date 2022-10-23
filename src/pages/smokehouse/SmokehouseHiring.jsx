import React from "react";

import Banner from "../../components/smokehouse/Banner";
import EventPopup from "../../components/smokehouse/EventPopup";
import Footer from "../../components/smokehouse/Footer";
import Navbar from "../../components/smokehouse/Navbar";
import SocialsWidget from "../../components/SocialsWidget";
import { formatUrl } from "../../utils/urlUtils";

const SmokehouseHiring = () => {
  return (
    <div className="font-poppins">
      <Navbar />
      <Banner title="BAILEY'S SMOKEHOUSE 2" />
      <SocialsWidget direction="vertical" />
      <EventPopup />

      <div className="w-full min-h-screen bg-primary-eateryLightBrown -mt-12 py-8 lg:py-12">
        <div className="xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md px-4 mx-auto text-center">
          <div className="w-full h-full mx-auto text-center flex flex-col space-y-3">
            <img
              src={formatUrl(`/news/image-3.png`)}
              className="w-full lg:w-72 mx-auto"
              alt=""
            />
            <p className="lg:text-3xl text-xl text-primary-smokehouseDarkRed font-medium">
              Bailey’s Smokehouse 2
            </p>
            <p className="font-medium text-primary-smokehouseDarkRed">
              191-194 S. Main Street, New City NY 10956
            </p>
            <p className="text-sm lg:text-base">
              Baileys is opening a second location in New City and is hiring for
              all positions. Please fill out the form below and we’ll be in
              touch shortly to setup an interview.
            </p>
          </div>

          {/* form div */}
          <div className="w-full h-full pt-6">
            <form className="w-full h-full flex flex-col space-y-4">
              {/* name + position */}
              <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row items-center justify-center lg:items-center lg:justify-between lg:space-x-8">
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-600 placeholder:text-gray-400 outline-none focus:ring-1 focus:ring-primary-smokehouseBrown duration-300 text-primary-smokehouseBrown font-medium bg-transparent rounded-sm shadow-md placeholder:font-light"
                  placeholder="Name *"
                  required
                />
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-600 placeholder:text-gray-400 outline-none focus:ring-1 focus:ring-primary-smokehouseBrown duration-300 text-primary-smokehouseBrown font-medium bg-transparent rounded-sm shadow-md placeholder:font-light"
                  placeholder="Position applying for *"
                  required
                />
              </div>

              {/* Email + phone */}
              <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row items-center justify-center lg:items-center lg:justify-between lg:space-x-8">
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-600 placeholder:text-gray-400 outline-none focus:ring-1 focus:ring-primary-smokehouseBrown duration-300 text-primary-smokehouseBrown font-medium bg-transparent rounded-sm shadow-md placeholder:font-light"
                  placeholder="Email *"
                  required
                />
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-600 placeholder:text-gray-400 outline-none focus:ring-1 focus:ring-primary-smokehouseBrown duration-300 text-primary-smokehouseBrown font-medium bg-transparent rounded-sm shadow-md placeholder:font-light"
                  placeholder="Phone *"
                  required
                />
              </div>

              {/* work availability */}
              <div className="w-full grid grid-cols-1 lg:grid-cols-5 text-start mx-0">
                <p className="text-lg text-primary-smokehouseDarkRed font-medium">
                  Work Availability:{" "}
                </p>
                {/* one checkbox */}
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="weekdays"
                    name="weekdays"
                    value="weekdays"
                    className="checked:accent-primary-smokehouseBrown"
                  />
                  <label htmlFor="weekdays">Weekdays</label>
                </div>

                {/* one checkbox */}
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="weeknights"
                    name="weeknights"
                    value="weeknights"
                    className="checked:accent-primary-smokehouseBrown"
                  />
                  <label htmlFor="weeknights">Weeknights</label>
                </div>

                {/* one checkbox */}
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="weekendDays"
                    name="weekendDays"
                    value="weekendDays"
                    className="checked:accent-primary-smokehouseBrown"
                  />
                  <label htmlFor="weekendDays">Weekend Days</label>
                </div>

                {/* one checkbox */}
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="weekendNights"
                    name="weekendNights"
                    value="weekendNights"
                    className="checked:accent-primary-smokehouseBrown"
                  />
                  <label htmlFor="weekendNights">Weekend Nights</label>
                </div>
              </div>

              {/* work experience */}
              <textarea
                name="experience"
                className="px-4 py-2 border border-gray-600 placeholder:text-gray-400 outline-none focus:ring-1 focus:ring-primary-smokehouseBrown duration-300 text-primary-smokehouseBrown font-medium bg-transparent rounded-sm shadow-md placeholder:font-light"
                id="experience"
                cols="30"
                rows="7"
                placeholder="Please provide any relavant work experience"
              ></textarea>

              {/* additional message */}
              <textarea
                name="message"
                className="px-4 py-2 border border-gray-600 placeholder:text-gray-400 outline-none focus:ring-1 focus:ring-primary-smokehouseBrown duration-300 text-primary-smokehouseBrown font-medium bg-transparent rounded-sm shadow-md placeholder:font-light"
                id="message"
                cols="30"
                rows="7"
                placeholder="Is there anything else you want us to know?"
              ></textarea>

              {/* submit button */}
              <button
                type="submit"
                className="w-full lg:w-48 px-4 py-2 text-white bg-primary-smokehouseDarkRed shadow-md font-medium rounded-sm hover:bg-transparent hover:text-primary-smokehouseDarkRed duration-300 border border-primary-smokehouseDarkRed"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SmokehouseHiring;
