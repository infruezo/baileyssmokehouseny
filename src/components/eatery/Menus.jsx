import React from "react";
import SectionTitle from "./SectionTitle";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Menus = ({ menus }) => {
  return (
    <div id="menus">
      <SectionTitle title="Our Menus" />
      <div className="py-16 lg:max-w-screen-xl mx-auto">
        <ImageGallery
          items={menus}
          thumbnailPosition="bottom"
          showPlayButton={false}
        />
      </div>
    </div>
  );
};

export default Menus;
