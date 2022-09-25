import React from "react";
import Banner from "../../components/smokehouse/Banner";
import Footer from "../../components/smokehouse/Footer";
import Navbar from "../../components/smokehouse/Navbar";

const SmokehouseGallery = () => {
  return (
    <div>
      <Navbar />
      <Banner title="GALLERY" />
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <Footer />
    </div>
  );
};

export default SmokehouseGallery;
