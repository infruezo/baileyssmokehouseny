import React from "react";
import Banner from "../components/smokehouse/Banner";
import Footer from "../components/smokehouse/Footer";
import Navbar from "../components/smokehouse/Navbar";
import OrderAppGiftCards from "../components/smokehouse/OrderAppGiftCards";
import SectionTitle from "../components/smokehouse/SectionTitle";

const HoursMenus = () => {
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HoursMenus;
