import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Footer from "../../components/smokehouse/Footer";
import Navbar from "../../components/smokehouse/Navbar";
import SocialsWidget from "../../components/SocialsWidget";
import Banner from "../../images/smokehouse/main-banner.png";
import brownDivider from "../../images/smokehouse/title-brown.png";

import Card1 from "../../images/smokehouse/home-card-1.png";
import Card2 from "../../images/smokehouse/home-card-2.png";
import Card3 from "../../images/smokehouse/home-card-3.png";
import HomeAbout from "../../images/smokehouse/home-about.png";
import Loader from "../../components/smokehouse/Loader";
import EventCard from "../../components/smokehouse/EventCard";

const Home = () => {
  const [events, setEvents] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getEvents = async () => {
      setLoading(true);
      const response = await axios.get(
        "http://www.baileyssmokehouseny.com/wp-json/mobile-hawk/v1/events-upcoming?num=6"
      );

      if (response) {
        setEvents(response.data);
      }

      setLoading(false);
    };

    getEvents();
  }, []);

  console.log(events);

  return (
    <div className="relative font-poppins">
      <Navbar />
      <SocialsWidget direction="vertical" />
      {/* special banner for home page */}
      <div className="w-full lg:h-[700px] h-[500px] absolute top-0 left-0 z-0">
        <img
          src={Banner}
          className="h-full w-full absolute top-0 left-0 object-cover"
          alt="bannerImage"
          loading="lazy"
        />

        {/* hero section text */}
        <div className="mx-auto text-white absolute left-1/2 -translate-x-1/2 top-[60%] -translate-y-1/2 flex flex-col space-y-8 text-center z-0 w-full px-8 lg:px-0">
          <div>
            <h1 className="xl:text-4xl lg:text-3xl text-lg font-title">
              WELCOME TO
            </h1>
            <h1 className="xl:text-4xl lg:text-3xl text-lg font-title">
              BAILEY'S SMOKEHOUSE
            </h1>
          </div>
          <h5 className="xl:text-2xl lg:text-xl text-base text-center">
            Full service restaurant and bars, catering and takeout.
          </h5>
          <Link
            to="/contact-us"
            className="px-6 py-2.5 bg-red-500 text-white mx-auto font-semibold rounded-md shadow-md hover:bg-white hover:text-red-500 duration-300 w-fit"
          >
            CONTACT US
          </Link>
        </div>
      </div>

      {/* 3 image divs with link under banner */}
      <div className="w-full lg:h-[300px] lg:mt-[275px] mt-[150px] border-t-8 border-red-800">
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-3">
          {/* one span */}
          <div className="col-span-1 lg:h-full h-64 relative">
            <div className="h-full w-full flex items-center justify-center">
              <Link
                to="/restaurant-bars"
                className="font-title tracking-tighter text-white text-center px-4 lg:px-0"
              >
                RESTAURANT & BARS
              </Link>
            </div>

            {/* bg image */}
            <div className="absolute w-full h-full left-0 top-0 -z-10">
              <img
                src={Card1}
                loading="lazy"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
          </div>

          {/* one span */}
          <div className="col-span-1 lg:h-full h-64 relative">
            <div className="h-full w-full flex items-center justify-center">
              <Link
                to="/menu"
                className="font-title tracking-tighter text-white text-center px-4 lg:px-0"
              >
                OUR MENUS
              </Link>
            </div>

            {/* bg image */}
            <div className="absolute w-full h-full left-0 top-0 -z-10">
              <img
                src={Card2}
                loading="lazy"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
          </div>

          {/* one span */}
          <div className="col-span-1 lg:h-full h-64 relative">
            <div className="h-full w-full flex items-center justify-center">
              <Link
                to="/eatery-catering-takeout/"
                className="font-title tracking-tighter text-white text-center px-4 lg:px-0"
              >
                EATERY, CATERING & TAKEOUT
              </Link>
            </div>

            {/* bg image */}
            <div className="absolute w-full h-full left-0 top-0 -z-10">
              <img
                src={Card3}
                loading="lazy"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* About Us */}
      <div className="bg-primary-eateryLightBrown lg:pb-72 py-20 w-full lg:pt-32">
        {/* wrapper */}
        <div className="xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md px-4 mx-auto">
          <img
            src={HomeAbout}
            className="float-right object-cover xl:h-auto xl:w-auto lg:w-[400px] lg:h-[400px] md:w-[325px] md:h-[325px] w-[200px] h-[200px]"
            alt=""
            loading="lazy"
          />

          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-1">
                <h1 className="font-title lg:text-3xl md:text-2xl text-xl text-primary-smokehouseBrown">
                  ABOUT US
                </h1>

                <img
                  src={brownDivider}
                  className="w-[100px] md:w-[200px] lg:w-auto"
                  alt=""
                  loading="lazy"
                />
              </div>
              <p className="font-medium">
                Welcome to Baileys Smokehouse where owner Paul Bailey has
                brought his famed BBQ to Rockland and has added a twist. Here
                you can find some of the best BBQ East of the Mississippi. Our
                smoking process starts with our own BBQ spice marinated
                overnight. Then they are slow smoked for up to 12 hours using
                local hard woods until tender, moist, and full of flavor
              </p>
            </div>

            <div className="space-y-2">
              <h1 className="font-title lg:text-2xl md:text-xl text-lg text-primary-smokehouseBrown">
                THE SMOKE RING
              </h1>
              <p className="font-normal text-sm">
                This unique cooking process creates what’s known as a “Smoke
                Ring” which develops along the outside of the meat and around
                the bones in our products. You can be assured that despite this
                red ring all of our meats are smoked to well done and that the
                “Smoke Ring” you see is a sign of outstanding authentic BBQ!!!
              </p>
            </div>

            <Link
              to="/about"
              className="block px-8 py-2 bg-transparent ring-1 ring-primary-smokehouseBrown w-fit rounded-full text-primary-smokehouseBrown hover:bg-primary-smokehouseBrown hover:text-primary-eateryLightBrown duration-300 shadow-md"
            >
              READ MORE
            </Link>
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      {loading ? (
        <Loader />
      ) : (
        events && (
          <div className="w-full py-16  bg-primary-eateryLightBrown">
            <div className="w-full px-4 text-center">
              <div className="flex flex-col space-y-2">
                <div>
                  <h3 className="uppercase font-extralight text-xl text-center tracking-wide">
                    Join our party
                  </h3>
                  <h1 className="font-title text-primary-smokehouseBrown text-3xl">
                    UPCOMING EVENTS
                  </h1>
                </div>

                <img
                  src={brownDivider}
                  className="w-[100px] md:w-[200px] lg:w-[400px] object-cover mx-auto"
                  alt=""
                  loading="lazy"
                />
              </div>
            </div>

            {/* events display */}
            <div className="w-full mt-16 h-auto py-8">
              <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md px-4 mx-auto ">
                {events.map((event) => (
                  <EventCard event={event} />
                ))}
              </div>

              <Link
                to="/event-calendar"
                className="block px-8 py-2 bg-transparent ring-1 ring-primary-smokehouseBrown w-fit rounded-full text-primary-smokehouseBrown hover:bg-primary-smokehouseBrown hover:text-primary-eateryLightBrown duration-300 shadow-md mx-auto mt-16"
              >
                View All Events
              </Link>
            </div>
          </div>
        )
      )}

      <Footer />
    </div>
  );
};

export default Home;
