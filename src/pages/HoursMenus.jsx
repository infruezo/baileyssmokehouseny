import React, { useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../components/smokehouse/Banner";
import EventCard from "../components/smokehouse/EventCard";
import Footer from "../components/smokehouse/Footer";
import Navbar from "../components/smokehouse/Navbar";
import OrderAppGiftCards from "../components/smokehouse/OrderAppGiftCards";
import SectionTitle from "../components/smokehouse/SectionTitle";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { getUpcomingEvents } from "../utils/eventData";
import { SmokehouseTakeoutMenu } from "../utils/data";

const HoursMenus = () => {
  const [events, setEvents] = useState(getUpcomingEvents(4));

  return (
    <div>
      <Navbar />
      <Banner title="HOURS AND MENUS" />

      {/* main section */}
      <div className="bg-primary-eateryLightBrown lg:pb-72 pb-20 pt-0 w-full lg:pt-0 -mt-12">
        <OrderAppGiftCards />
        {/* wrapper */}
        <div className="xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md px-4 mx-auto min-h-screen">
          <SectionTitle title="NEWS" />

          {/* News section */}
          <div className="w-full h-full mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-16 gap-4">
            {/* one news item */}
            <div className="col-span-1 flex flex-col space-y-2">
              <img src="/news/image-1.jpeg" alt="" />
              <p className="font-medium text-sm lg:text-lg">
                Ocktoberfest special serving at the main smokehouse from
                Thursday to Sunday 9/29 to 10/2
              </p>
            </div>

            {/* one news item */}
            <div className="col-span-1 flex flex-col space-y-1">
              <img src="/news/image-2.png" className="lg:h-96 " alt="" />
              <Link to="/new-city-now-hiring">
                <img src="/news/image-3.png" className="lg:h-96" alt="" />
              </Link>
              <p className="font-medium text-sm lg:text-lg text-primary-smokehouseDarkRed">
                191-194 S. Main Street, New City NY 10956
              </p>
              <p className="font-medium text-sm lg:text-lg">
                Baileys is opening a second location in New City and is hiring
                for all positions. Interested in working with us? Please click{" "}
                <Link
                  to="/new-city-now-hiring"
                  className="text-primary-smokehouseDarkRed underline underline-offset-2 font-bold"
                >
                  here
                </Link>{" "}
                to submit an application.
              </p>
            </div>

            {/* one news item */}
            <div className="col-span-1 flex flex-col space-y-2">
              <img src="/news/image-4.jpg" className="h-full" alt="" />
            </div>

            {/* one news item */}
            <div className="col-span-1 flex flex-col space-y-2">
              <img src="/news/image-6.jpg" alt="" />
            </div>

            {/* one news item */}
            <div className="col-span-1 flex flex-col space-y-2">
              <img src="/news/image-5.jpeg" alt="" />
            </div>
          </div>

          {/* Events */}
          <SectionTitle title="EVENTS" />
          <div className="w-full mt-16 h-auto py-8">
            <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-8 xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md px-4 mx-auto ">
              {events.map((event, idx) => (
                <Link key={idx} to={`/event/${event.id}`}>
                  <EventCard event={event} />
                </Link>
              ))}
            </div>

            <Link
              to="/event-calendar"
              className="block px-8 py-2 bg-transparent ring-1 ring-primary-smokehouseBrown w-fit rounded-full text-primary-smokehouseBrown hover:bg-primary-smokehouseBrown hover:text-primary-eateryLightBrown duration-300 shadow-md mx-auto mt-16"
            >
              View All Events
            </Link>
          </div>

          {/* indoor/outdoor dining hours */}
          <SectionTitle title="INDOOR/OUTDOOR DINING HOURS" />
          <div className="w-full h-full pt-8 flex flex-col space-y-8">
            <div>
              <p className="text-center font-medium text-lg lg:text-xl">
                Kitchen:{" "}
                <span className="text-primary-smokehouseDarkRed">11:30am</span>{" "}
                to <span className="text-primary-smokehouseDarkRed">10pm</span>{" "}
                Daily
              </p>
              <p className="text-center font-medium text-lg lg:text-xl">
                Bar:{" "}
                <span className="text-primary-smokehouseDarkRed">11:30am</span>{" "}
                to <span className="text-primary-smokehouseDarkRed">2am</span>{" "}
                Daily
              </p>
            </div>
            <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 lg:gap-12 gap-4">
              <img src="/indoor-outdoor/image-1.jpeg" alt="" />
              <img src="/indoor-outdoor/image-2.jpeg" alt="" />
            </div>
          </div>

          {/* takeout hours */}
          <SectionTitle title="TAKEOUT HOURS" />
          <div className="w-full h-full mx-auto lg:max-w-screen-md">
            <p className="text-center font-medium text-lg lg:text-xl">
              Sunday to Thursday:{" "}
              <span className="text-primary-smokehouseDarkRed font-bold">
                11am to 9:30pm
              </span>{" "}
              • Friday and Saturday{" "}
              <span className="text-primary-smokehouseDarkRed font-bold">
                11am to 10pm
              </span>
            </p>

            <img
              src="/eatery-catering-takeout/image-5.jpg"
              className="pt-4 mx-auto"
              alt=""
            />
          </div>

          {/* Menu */}
          <SectionTitle title="MENU" />
          <ImageGallery
            items={SmokehouseTakeoutMenu}
            showPlayButton={true}
            showBullets={true}
          />

          {/* Special Hours */}
          <SectionTitle title="SPECIAL HOURS" />
          <div className="w-full h-full mx-auto lg:max-w-screen-md ">
            <img
              src="/special-hours/image-1.jpg"
              className="pt-4 mx-auto"
              alt=""
            />
          </div>

          {/* Pizza and wings */}
          <SectionTitle title="TAKEOUT HOURS" />
          <div className="w-full h-full mx-auto lg:max-w-screen-lg">
            <p className="text-center font-medium text-lg lg:text-xl">
              Weekdays: Starting{" "}
              <span className="font-bold text-primary-smokehouseDarkRed">
                4pm
              </span>{" "}
              • Weekends: Starting{" "}
              <span className="font-bold text-primary-smokehouseDarkRed">
                12pm
              </span>
            </p>

            <div className="grid grid-cols-1 w-full h-full lg:grid-cols-3 gap-12">
              <img
                src="/pizza-and-wings/image-1.jpeg"
                className="pt-4 mx-auto h-full w-64"
                alt=""
              />
              <img
                src="/pizza-and-wings/image-2.jpg"
                className="pt-4 mx-auto h-full w-64"
                alt=""
              />
              <img
                src="/pizza-and-wings/image-3.jpeg"
                className="pt-4 mx-auto h-full w-64"
                alt=""
              />
            </div>
          </div>

          {/* Craft Beers for Sale */}
          <SectionTitle title="CRAFT BEERS FOR SALE" />
          <div className="w-full h-full mx-auto lg:max-w-screen-md ">
            <img
              src="/craft-beers/image-1.jpg"
              className="pt-4 mx-auto"
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HoursMenus;
