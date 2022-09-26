import React from "react";
import LoadingGif from "../../images/smokehouse/loader.gif";

const Loader = () => {
  return (
    <div className="h-[600px] bg-primary-eateryLightBrown w-full">
      <div className="flex items-center justify-center text-center h-full w-full">
        <img src={LoadingGif} alt="" />
      </div>
    </div>
  );
};

export default Loader;
