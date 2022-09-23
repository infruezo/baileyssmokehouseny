import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import { EaterySlideImages } from "../../utils/data";

import img from "../../images/slider-1.png";

const Slider = () => {
  console.log(EaterySlideImages);

  return (
    <div className="mt-12">
      <div className="slide-container">
        <Slide>
          {EaterySlideImages.map((slideImage, index) => (
            <div
              className="each-fade xl:h-[600px] lg:h-[500px] h-[400px] w-full "
              key={index}
            >
              <div className="relative h-full w-full">
                <div className="absolute top-1/2 -translate-y-1/2 lg:left-1/4 lg:-translate-x-1/4 left-1/2 -translate-x-1/2">
                  <div className="h-full w-full flex flex-col space-y-6 items-center lg:items-start justify-start max-w-md text-white text-center lg:text-start">
                    <h2 className=" font-bold lg:text-6xl text-lg ">
                      {slideImage.title}
                    </h2>
                    <p className="font-semibold lg:text-2xl text-sm">
                      {slideImage.text}
                    </p>
                    <button className="shadow-md font-semibold px-6 py-4 bg-[#7F4726] rounded-full">
                      Our Menu
                    </button>
                  </div>
                </div>

                <img
                  src={slideImage.image}
                  className="h-full w-full object-cover z-10"
                  alt=""
                />
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default Slider;
