import React from "react";
import Banner from "../../components/smokehouse/Banner";
import Footer from "../../components/smokehouse/Footer";
import Navbar from "../../components/smokehouse/Navbar";
import Testimonials from "../../components/smokehouse/Testimonials";

import HomeAbout from "../../images/smokehouse/home-about.png";
import brownDivider from "../../images/smokehouse/title-brown.png";

const About = () => {
  return (
    <div>
      <Navbar />
      <Banner title="ABOUT US" />
      {/* About Us */}
      <div className="bg-primary-eateryLightBrown lg:pb-72 py-20 w-full lg:pt-32 -mt-12 lg:mt-0">
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
          </div>
        </div>
      </div>

      <Testimonials />
      <Footer />
    </div>
  );
};

export default About;
