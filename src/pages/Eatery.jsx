import React from "react";
import About from "../components/eatery/About";
import Navbar from "../components/eatery/Navbar";
import Slider from "../components/eatery/Slider";

const Eatery = () => {
  return (
    <div className="font-poppins">
      <Navbar />
      <Slider />
      <About />
    </div>
  );
};

export default Eatery;
