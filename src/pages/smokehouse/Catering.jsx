import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import Banner from "../../components/smokehouse/Banner";
import EventPopup from "../../components/smokehouse/EventPopup";
import Footer from "../../components/smokehouse/Footer";
import Navbar from "../../components/smokehouse/Navbar";
import SocialsWidget from "../../components/SocialsWidget";
import { SmokehouseCateringMenus } from "../../utils/data";
import ReCAPTCHA from "react-google-recaptcha";

const Catering = () => {
  const [currentTab, setCurrentTab] = useState("1");

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  return (
    <div className="font-poppins">
      <Navbar />
      <Banner title="CATERING" />
      <SocialsWidget direction="vertical" />
      <EventPopup />

      <div className="w-full min-h-screen bg-primary-eateryLightBrown -mt-12 py-8 lg:py-12">
        <div className="xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md px-4 mx-auto">
          <h1 className="lg:text-3xl text-xl text-primary-smokehouseBrown font-medium">
            Let us know about your catering needs!
          </h1>

          {/* form div */}
          <div className="w-full h-full pt-6">
            <form className="w-full h-full flex flex-col space-y-4">
              {/* name + phone */}
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
                  placeholder="Phone *"
                  required
                />
              </div>

              {/* Email + calendar date */}
              <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row items-center justify-center lg:items-center lg:justify-between lg:space-x-8">
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-600 placeholder:text-gray-400 outline-none focus:ring-1 focus:ring-primary-smokehouseBrown duration-300 text-primary-smokehouseBrown font-medium bg-transparent rounded-sm shadow-md placeholder:font-light"
                  placeholder="Email *"
                  required
                />
                <input
                  type="date"
                  placeholder="jj/mm/aaaa"
                  className="w-full px-4 py-2 border border-gray-600 !placeholder:text-gray-400 outline-none focus:ring-1 focus:ring-primary-smokehouseBrown duration-300 text-primary-smokehouseBrown font-medium bg-transparent rounded-sm shadow-md placeholder:font-light"
                />
              </div>

              {/* event type + time of event */}
              <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row items-center justify-center lg:items-center lg:justify-between lg:space-x-8">
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-600 placeholder:text-gray-400 outline-none focus:ring-1 focus:ring-primary-smokehouseBrown duration-300 text-primary-smokehouseBrown font-medium bg-transparent rounded-sm shadow-md placeholder:font-light"
                  placeholder="Type of Event *"
                  required
                />
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-600 placeholder:text-gray-400 outline-none focus:ring-1 focus:ring-primary-smokehouseBrown duration-300 text-primary-smokehouseBrown font-medium bg-transparent rounded-sm shadow-md placeholder:font-light"
                  placeholder="Time of Event *"
                  required
                />
              </div>

              {/* message */}
              <textarea
                name=""
                className="px-4 py-2 border border-gray-600 placeholder:text-gray-400 outline-none focus:ring-1 focus:ring-primary-smokehouseBrown duration-300 text-primary-smokehouseBrown font-medium bg-transparent rounded-sm shadow-md placeholder:font-light"
                id=""
                cols="30"
                rows="10"
                placeholder="Message"
              ></textarea>

              {/* google captcha */}
              <ReCAPTCHA
                sitekey={process.env.REACT_APP_GOOGLE_CAPTCHA_SITE_KEY}
                onChange={onChange}
              />

              {/* submit button */}
              <button
                type="submit"
                className="w-full lg:w-48 px-4 py-2 text-white bg-primary-smokehouseDarkRed shadow-md font-medium rounded-sm hover:bg-transparent hover:text-primary-smokehouseDarkRed duration-300 border border-primary-smokehouseDarkRed"
              >
                SUBMIT
              </button>
            </form>
          </div>

          {/* Catering menus div */}
          {/* tabs */}
          <div className="w-full h-full mt-12">
            <div className="tabs w-full flex items-center flex-wrap gap-4 lg:gap-x-0 lg:space-x-4 pb-12">
              {SmokehouseCateringMenus.map((tab, i) => (
                <button
                  key={i}
                  id={tab.id}
                  disabled={currentTab === `${tab.id}`}
                  onClick={handleTabClick}
                  className="font-title tracking-tight text-xs md:text-sm bg-transparent text-primary-smokehouseDarkRed p-3 disabled:bg-primary-smokehouseDarkRed border-2 border-primary-smokehouseDarkRed disabled:text-white shadow-md"
                >
                  {tab.tabTitle}
                </button>
              ))}
            </div>
            <div className="content mx-auto w-full">
              {SmokehouseCateringMenus.map((tab, i) => (
                <div key={i}>
                  {currentTab === `${tab.id}` && (
                    <div>
                      {tab.content.length > 1 ? (
                        <div>
                          <ImageGallery
                            items={tab.content}
                            showBullets={true}
                            showNav={true}
                          />
                        </div>
                      ) : (
                        <div>
                          <img
                            src={tab?.content?.original}
                            className="h-full lg:max-w-[800px] w-full object-cover"
                            alt=""
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Catering;
