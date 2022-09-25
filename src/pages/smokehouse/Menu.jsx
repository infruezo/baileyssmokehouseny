import React from "react";
import Banner from "../../components/smokehouse/Banner";
import Footer from "../../components/smokehouse/Footer";
import Navbar from "../../components/smokehouse/Navbar";

const Menu = () => {
  return (
    <div>
      <Navbar />
      <Banner title="MENU" />
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <Footer />
    </div>
  );
};

export default Menu;
