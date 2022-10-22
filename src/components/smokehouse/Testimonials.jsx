import axios from "axios";
import React, { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      setLoading(true);
      const response = await axios.get("data/testimonials.json");
      setTestimonials(response.data);
      setLoading(false);
    };

    fetchTestimonials();
  }, []);

  return (
    <>
      {!loading && (
        <div className="w-full xl:h-[600px] lg:h-[500px] h-[400px] text-white">
          <div className="h-full w-full relative lg:bg-fixed bg-no-repeat bg-cover bg-primary-smokehouseDarkRed">
            <div className="slide-container w-full h-full relative">
              {/* title section */}
              <div className="flex flex-col lg:space-y-2 space-y-1 absolute left-1/2 -translate-x-1/2 top-[10%] text-center">
                <h4 className="lg:text-xl font-light tracking-tight">
                  WHAT OUR CUSTOMER SAY
                </h4>
                <h1 className="font-title lg:text-3xl text-lg">TESTIMONIALS</h1>
                <img
                  src="images/smokehouse/white-underline.png"
                  loading="lazy"
                  alt=""
                />
              </div>

              <div className="w-full h-full  xl:max-w-screen-xl lg:max-w-screen-lg max-w-screen-sm mx-auto lg:translate-y-[40%] translate-y-[30%]">
                <Slide>
                  {testimonials.map((Testimonial, index) => (
                    <div
                      className="text-xs lg:text-lg xl:text-base px-16 text-center mx-auto space-y-4"
                      key={index}
                    >
                      <p>“{Testimonial.testimonial}”</p>
                      <p className="font-bold lg:text-lg text-base tracking-wide text-primary-eateryLightBrown">
                        - {Testimonial.author}
                      </p>
                    </div>
                  ))}
                </Slide>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Testimonials;
