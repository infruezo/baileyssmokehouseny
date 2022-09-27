import React from "react";
import { Slide } from "react-slideshow-image";
import TestimonialBg from "../../images/testimonial-bg.jpg";
import { EateryTestimonials } from "../../utils/data";
import "react-slideshow-image/dist/styles.css";

const Testimonials = () => {
  return (
    <div className="lg:my-32 my-16 w-full xl:h-[600px] lg:h-[500px] h-[400px]">
      <div
        className="h-full w-full relative lg:bg-fixed bg-no-repeat bg-cover bg-black bg-opacity-50"
        style={{ backgroundImage: `url(${TestimonialBg})` }}
      >
        <div className="slide-container w-full h-full relative">
          <div className="w-full h-full text-white xl:max-w-screen-xl lg:max-w-screen-lg max-w-screen-sm mx-auto lg:translate-y-[40%] translate-y-[25%]">
            <Slide>
              {EateryTestimonials.map((Testimonial, index) => (
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
  );
};

export default Testimonials;
