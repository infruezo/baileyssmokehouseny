import React, { useState, useEffect } from "react";
import axios from "axios";
import Banner from "../../components/smokehouse/Banner";
import Footer from "../../components/smokehouse/Footer";
import Navbar from "../../components/smokehouse/Navbar";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import EventPopup from "../../components/smokehouse/EventPopup";
import { formatUrl } from "../../utils/urlUtils";

const EateryCateringTakout = () => {
  const [currentTab, setCurrentTab] = useState("1");

  const [menus, setMenus] = useState([]);
  const [alternativeMenu, setAlternativeMenu] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        formatUrl(`data/smokehouse/eateryCateringTakeoutMenu.json`)
      );

      setMenus(response.data);
    };

    fetchData();
  }, []);

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };

  console.log(menus);

  return (
    <div className="font-poppins">
      <Navbar />
      <Banner title="EATERY, CATERING & TAKEOUT" />
      <EventPopup />

      {/* main section */}
      <div className="bg-primary-eateryLightBrown lg:pb-72 py-20 w-full lg:pt-24 -mt-12">
        <div className="xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md px-4 mx-auto">
          <h1 className="font-light">
            Takeout and eatery right across the street. Serving the same great
            menu. Call to place your catering or takeout order –{" "}
            <span className="font-semibold text-primary-smokehouseBrown">
              845 680-0100
            </span>{" "}
            or order online here:
          </h1>

          {/* order online button */}
          <div className="w-full text-start lg:mx-auto lg:text-center pt-6">
            <a
              href="https://ordering.chownow.com/order/3877/locations"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 w-fit bg-primary-smokehouseDarkRed text-white shadow-md border border-primary-smokehouseDarkRed hover:bg-transparent hover:text-primary-smokehouseDarkRed duration-300 rounded-sm font-semibold"
            >
              ORDER ONLINE
            </a>
          </div>

          {/* images section */}
          <div className="w-full h-full py-8 space-y-4">
            <img
              src={formatUrl(
                `images/smokehouse/eatery-catering-takeout/image-1.jpg`
              )}
              className="w-full lg:h-[700px] object-cover"
              alt=""
            />
            <img
              src={formatUrl(
                `images/smokehouse/eatery-catering-takeout/image-2.jpg`
              )}
              className="w-full lg:h-[700px] object-cover"
              alt=""
            />
            <img
              src={formatUrl(
                `images/smokehouse/eatery-catering-takeout/image-3.jpg`
              )}
              className="w-full lg:h-[700px] object-cover"
              alt=""
            />
            <img
              src={formatUrl(
                `images/smokehouse/eatery-catering-takeout/image-4.jpg`
              )}
              className="w-full lg:h-[700px] object-cover"
              alt=""
            />
            <img
              src={formatUrl(
                `images/smokehouse/eatery-catering-takeout/image-5.jpg`
              )}
              className="w-full lg:h-[700px] object-cover"
              alt=""
            />
            <img
              src={formatUrl(
                `images/smokehouse/eatery-catering-takeout/image-6.jpg`
              )}
              className="w-full lg:h-[700px] object-cover"
              alt=""
            />

            <h1 className="lg:text-3xl text-xl text-primary-smokehouseDarkRed font-semibold">
              Checkout our awesome selections:{" "}
            </h1>

            <img
              src={formatUrl(
                `images/smokehouse/eatery-catering-takeout/image-7.jpg`
              )}
              className="w-full lg:h-[700px] object-cover"
              alt=""
            />
            <img
              src={formatUrl(
                `images/smokehouse/eatery-catering-takeout/image-8.jpg`
              )}
              className="w-full lg:h-[700px] object-cover"
              alt=""
            />
            <img
              src={formatUrl(
                `images/smokehouse/eatery-catering-takeout/image-9.jpg`
              )}
              className="w-full lg:h-[700px] object-cover"
              alt=""
            />
            <img
              src={formatUrl(
                `images/smokehouse/eatery-catering-takeout/image-10.jpg`
              )}
              className="w-full lg:h-[700px] object-cover"
              alt=""
            />
          </div>

          {/* menus display + tabs */}
          {/* tabs */}
          <div className="w-full h-full mt-8">
            <div className="tabs w-full flex items-center flex-wrap gap-4 lg:gap-x-0 lg:justify-center lg:space-x-4 pb-12">
              {menus.map((tab, i) => (
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
              {menus.map((tab, i) => (
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
                            src={formatUrl(tab?.content?.original)}
                            className="h-full lg:max-w-[800px] w-full object-cover mx-auto"
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

export default EateryCateringTakout;
