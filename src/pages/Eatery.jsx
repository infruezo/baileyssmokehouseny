import React from "react";
import About from "../components/eatery/About";
import Navbar from "../components/eatery/Navbar";
import Slider from "../components/eatery/Slider";
import Events from "../components/eatery/Events";
import Menus from "../components/eatery/Menus";
import OpenTimes from "../components/eatery/OpenTimes";
import EateryGallery from "../components/eatery/EateryGallery";
import Testimonials from "../components/eatery/Testimonials";
import Contact from "../components/eatery/Contact";
import Footer from "../components/eatery/Footer";

const Eatery = () => {
  return (
    <div className="font-poppins">
      <Navbar />
      <Slider />
      <About />
      <Events />
      <Menus />
      <OpenTimes />
      <EateryGallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Eatery;
