import React from "react";
import About from "../components/eatery/About";
import Navbar from "../components/eatery/Navbar";
import Slider from "../components/eatery/Slider";
import Events from "../components/eatery/Events";
import Menus from "../components/eatery/Menus";
import Gallery from "../components/eatery/Gallery";
import Contact from "../components/eatery/Contact";

const Eatery = () => {
  return (
    <div className="font-poppins">
      <Navbar />
      <Slider />
      <About />
      <div className="h-screen">
        <Events />
      </div>
      <div className="h-screen">
        <Menus />
      </div>
      <div className="h-screen">
        <Gallery />
      </div>
      <div className="h-screen">
        <Contact />
      </div>
    </div>
  );
};

export default Eatery;
