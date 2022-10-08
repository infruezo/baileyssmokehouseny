import React, { useEffect, useState } from "react";
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
import axios from "axios";

const Eatery = () => {
  const [data, setData] = useState([]);
  const [slider, setSlider] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("eatery.json", {
      "Content-Type": "application/json",
      Accept: "application/json",
    });
    setData(response.data);
    setSlider(response.data.EaterySlideImages);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="font-poppins">
      <Navbar data={data} />
      <Slider slider={slider} />
      <About />
      <Events />
      <Menus />
      <OpenTimes />
      <EateryGallery />
      <Testimonials />
      <Contact />
      <Footer data={data} />
    </div>
  );
};

export default Eatery;
