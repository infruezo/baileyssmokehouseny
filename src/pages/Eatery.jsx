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
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [slider, setSlider] = useState([]);
  const [events, setEvents] = useState([]);
  const [menus, setMenus] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [galleryPhotos, setGalleryPhotos] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    const response = await axios.get("data/eatery/main.json", {
      "Content-Type": "application/json",
      Accept: "application/json",
    });
    setData(response.data);
    setSlider(response.data.EaterySlideImages);
    setEvents(response.data.EateryEventSlideImages);
    setMenus(response.data.EateryMenuSlideImages);
    setTestimonials(response.data.EateryTestimonials);
    setGalleryPhotos(response.data.GalleryPhotos);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {!loading && (
        <div className="font-poppins">
          <Navbar data={data} />
          <Slider slider={slider} />
          <About data={data} />
          <Events events={events} />
          <Menus menus={menus} />
          <OpenTimes data={data} />
          <EateryGallery galleryPhotos={galleryPhotos} />
          <Testimonials testimonials={testimonials} />
          <Contact data={data} />
          <Footer data={data} />
        </div>
      )}
    </>
  );
};

export default Eatery;
