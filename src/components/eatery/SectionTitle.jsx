import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <h1 className="bg-primary-eateryBrown w-fit px-4 py-3 lg:text-5xl text-2xl font-bold text-white mx-auto mt-4 shadow-md">
      {title}
    </h1>
  );
};

export default SectionTitle;
