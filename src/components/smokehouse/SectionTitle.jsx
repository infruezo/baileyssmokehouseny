import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <h1 className="bg-primary-smokehouseBrown w-fit px-4 py-3 lg:text-3xl text-xl font-bold text-white mx-auto lg:my-8 my-4 shadow-md">
      {title}
    </h1>
  );
};

export default SectionTitle;
