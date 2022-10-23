import React from "react";
import Banner from "../../components/smokehouse/Banner";
import EventPopup from "../../components/smokehouse/EventPopup";
import Footer from "../../components/smokehouse/Footer";
import Navbar from "../../components/smokehouse/Navbar";
import { formatUrl } from "../../utils/urlUtils";

const RestaurantBars = () => {
  return (
    <div className="font-poppins">
      <Navbar />
      <Banner title="RESTAURANT & BARS" />
      <EventPopup />

      <div className="bg-primary-eateryLightBrown lg:pb-72 py-20 w-full lg:pt-16 -mt-12">
        <div className="xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md px-4 mx-auto">
          {/* title and text*/}
          <div className="flex flex-col space-y-4">
            <h1 className="font-semibold text-primary-smokehouseDarkRed lg:text-3xl text-xl">
              Downstairs Bar
            </h1>
            <p className="font-medium">
              Our downstairs bar is available for private parties. Call for more
              information –{" "}
              <span className="font-bold text-primary-smokehouseDarkRed">
                845-398-1454
              </span>
              .
            </p>
          </div>

          {/* images section */}
          <div className="w-full h-full py-8 space-y-4">
            <img
              src={formatUrl(
                `images/smokehouse/restaurant-and-bars/image-1.jpg`
              )}
              className="w-full lg:h-[700px] object-cover"
              alt=""
            />

            {/* title and text*/}
            <div className="flex flex-col space-y-4">
              <h1 className="font-semibold text-primary-smokehouseDarkRed lg:text-3xl text-xl">
                Downstairs Dining
              </h1>
              <p className="font-medium">
                Our downstairs dining area is also available for private
                parties. Call for more information -{" "}
                <span className="font-bold text-primary-smokehouseDarkRed">
                  845-398-1454
                </span>
                .
              </p>
            </div>

            {/* images section */}
            <img
              src={formatUrl(
                `images/smokehouse/restaurant-and-bars/image-2.jpg`
              )}
              className="w-full lg:h-[700px] object-cover"
              alt=""
            />
            <img
              src={formatUrl(
                `images/smokehouse/restaurant-and-bars/image-3.jpg`
              )}
              className="w-full lg:h-[700px] object-cover"
              alt=""
            />

            {/* title and text*/}
            <div className="flex flex-col space-y-4">
              <h1 className="font-semibold text-primary-smokehouseDarkRed lg:text-3xl text-xl">
                Upstairs Main Restaurant & Bar
              </h1>
              <p className="font-medium">
                Our main dining area is also available for reservations,
                take-in. We have 16 HDTVs with an 82” TV – great for watching
                sports and other events. Call for more information –{" "}
                <span className="font-bold text-primary-smokehouseDarkRed">
                  845-398-1454
                </span>
                .
              </p>
            </div>

            {/* images section */}
            <img
              src={formatUrl(
                `images/smokehouse/restaurant-and-bars/image-4.jpg`
              )}
              className="w-full lg:h-[700px] object-cover"
              alt=""
            />
            <img
              src={formatUrl(
                `images/smokehouse/restaurant-and-bars/image-5.jpg`
              )}
              className="w-full lg:h-[700px] object-cover"
              alt=""
            />
            <img
              src={formatUrl(
                `images/smokehouse/restaurant-and-bars/image-6.jpg`
              )}
              className="w-full lg:h-[700px] object-cover"
              alt=""
            />
            <img
              src={formatUrl(
                `images/smokehouse/restaurant-and-bars/image-7.jpg`
              )}
              className="w-full lg:h-[700px] object-cover"
              alt=""
            />
            <img
              src={formatUrl(
                `images/smokehouse/restaurant-and-bars/image-8.jpg`
              )}
              className="w-full lg:h-[700px] object-cover"
              alt=""
            />
            <img
              src={formatUrl(
                `images/smokehouse/restaurant-and-bars/image-9.jpg`
              )}
              className="w-full lg:h-[700px] object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RestaurantBars;
