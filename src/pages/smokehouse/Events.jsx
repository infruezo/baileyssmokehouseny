import React from "react";
import Banner from "../../components/smokehouse/Banner";
import Footer from "../../components/smokehouse/Footer";
import Navbar from "../../components/smokehouse/Navbar";

const Events = () => {
  return (
    <div>
      <Navbar />
      <Banner title="EVENT CALENDAR" />
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <Footer />
    </div>
  );
};

export default Events;
