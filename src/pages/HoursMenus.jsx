import React from "react";
import Banner from "../components/smokehouse/Banner";
import Footer from "../components/smokehouse/Footer";
import Navbar from "../components/smokehouse/Navbar";

const HoursMenus = () => {
  return (
    <div>
      <Navbar />
      <Banner title="HOURS AND MENUS" />
      <div className="h-screen"></div>
      <Footer />
    </div>
  );
};

export default HoursMenus;
