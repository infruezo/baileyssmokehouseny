import React from "react";
import Banner from "../../components/smokehouse/Banner";
import Footer from "../../components/smokehouse/Footer";
import Navbar from "../../components/smokehouse/Navbar";

const RestaurantBars = () => {
  return (
    <div>
      <div>
        <Navbar />
        <Banner title="RESTAURANT & BARS" />
        <div className="h-screen"></div>
        <div className="h-screen"></div>
        <div className="h-screen"></div>
        <Footer />
      </div>
    </div>
  );
};

export default RestaurantBars;
