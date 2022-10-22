import React from "react";
import SectionTitle from "./SectionTitle";
import { formatUrl } from "../../utils/urlUtils";

const About = ({ data }) => {
  console.log(formatUrl(data.aboutImage));
  console.log(formatUrl(data.logo));

  return (
    <div
      className="lg:h-[550px] h-auto w-full pt-2  bg-primary-eateryLightBrown"
      id="about"
    >
      <SectionTitle title="About Us" />

      <div className="flex flex-col space-y-6 lg:space-y-0 lg:flex-row w-full h-full lg:pb-12 pb-16">
        {/* About us text section */}
        <div className="flex-1 h-[85%] w-full py-6 lg:py-0">
          <div className="h-full w-full flex flex-col justify-center lg:items-start items-center lg:px-24 space-y-4 px-6">
            <h1 className="text-primary-eateryBrown text-xl font-semibold">
              Welcome to the Bailey’s Eatery.
            </h1>
            <p className="text-primary-eateryBrown/70">{data.aboutText}</p>
          </div>
        </div>

        {/* right side image */}
        <div className="flex-1 h-[85%] w-full py-6 lg:py-0">
          <div className="h-full w-full flex items-center justify-center px-6">
            <img
              src={formatUrl(data.aboutImage)}
              className="h-full w-full lg:w-[500px] lg:h-[320px] object-cover shadow-md"
              alt=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
