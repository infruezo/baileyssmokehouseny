import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import * as Scroll from "react-scroll";

const Slider = ({ slider }) => {
  let SmoothLink = Scroll.Link;
  return (
    <div className="slide-container ">
      <Slide>
        {slider.map((slideImage, idx) => (
          <div
            className="each-fade xl:h-[600px] lg:h-[500px] h-[400px] w-full"
            key={idx}
          >
            <div className="relative h-full w-full">
              <div className="absolute top-1/2 -translate-y-1/2 lg:left-1/4 lg:-translate-x-1/4 left-1/2 -translate-x-1/2">
                <div className="h-full w-full flex flex-col space-y-6 items-center lg:items-start justify-start max-w-md text-white text-center lg:text-start">
                  <h2 className=" font-bold lg:text-6xl text-lg">
                    {slideImage.title}
                  </h2>
                  <p className="font-semibold lg:text-2xl text-sm">
                    {slideImage.text}
                  </p>

                  <SmoothLink
                    className="shadow-md font-semibold px-6 py-4 bg-primary-eateryBrown rounded-full cursor-pointer"
                    to="menus"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Our Menu
                  </SmoothLink>
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
  );
};

export default Slider;
