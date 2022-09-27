import React from "react";
import BannerImg from "../../images/smokehouse/banner.jpg";

const Banner = ({ title }) => {
  return (
    <div className="lg:h-[425px] h-[350px] absolute left-0 top-0 w-full -z-50">
      {/* Banner Image */}
      <div className="absolute h-full w-full left-0 top-0  bg-black -z-10">
        <img
          src={BannerImg}
          className="h-full w-full object-cover"
          alt="banner"
          loading="lazy"
        />
      </div>

      {/* page title */}
      <h1 className="absolute font-title w-full left-1/2 -translate-x-1/2 lg:top-3/4 top-[70%] -translate-y-1/2 xl:text-4xl lg:text-3xl text-lg text-white mx-auto text-center px-4 tracking-tight">
        {title}
      </h1>
    </div>
  );
};

export default Banner;
