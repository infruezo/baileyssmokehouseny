import React, { useState } from "react";
import Banner from "../../components/smokehouse/Banner";
import Footer from "../../components/smokehouse/Footer";
import Navbar from "../../components/smokehouse/Navbar";

// import { SmokehouseUpcomingEvents } from "../../utils/data";

const Events = () => {
  return (
    <div className="font-poppins h-full w-full">
      <Navbar />
      <Banner title="EVENT CALENDAR" />
      <div className="w-full h-full py-12 bg-primary-eateryLightBrown -mt-12">
        <div className="h-full w-full mx-auto px-4 xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md "></div>
      </div>
      <Footer />
    </div>
  );
};

export default Events;
