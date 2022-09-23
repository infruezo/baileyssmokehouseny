import React from "react";
import SectionTitle from "./SectionTitle";
import AboutUs from "../../images/about.jpg";

const About = () => {
  return (
    <div
      className="lg:h-[550px] h-auto w-full lg:py-12 py-16 bg-primary-eateryLightBrown"
      id="about"
    >
      <SectionTitle title="About Us" />

      <div className="flex flex-col space-y-6 lg:space-y-0 lg:flex-row w-full h-full">
        <div className="flex-1 h-[85%] w-full py-6 lg:py-0">
          <div className="h-full w-full flex flex-col justify-center lg:items-start items-center lg:px-24 space-y-4 px-6">
            <h1 className="text-primary-eateryBrown text-xl font-semibold">
              Welcome to the Bailey’s Eatery.
            </h1>
            <p className="text-primary-eateryBrown/80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur corporis totam quidem voluptatibus velit? Facilis
              labore in unde sapiente quidem explicabo itaque ullam, recusandae
              culpa quas, vel cum sit enim? Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Magnam distinctio ut qui nesciunt
              quaerat beatae officia a doloremque necessitatibus odit voluptate
              dolorum soluta consequatur provident molestiae recusandae iure,
              temporibus deserunt.
            </p>
          </div>
        </div>
        <div className="flex-1 h-[85%] w-full py-6 lg:py-0">
          <div className="h-full w-full flex items-center justify-center px-6">
            <img
              src={AboutUs}
              className="h-full w-full lg:w-[500px] lg:h-[320px] object-cover shadow-md"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
