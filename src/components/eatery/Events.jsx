import React from "react";
import SectionTitle from "./SectionTitle";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { EateryEventSlideImages } from "../../utils/data";

const Events = () => {
  return (
    <div id="events">
      <SectionTitle title="Events and Specials" />
      <div className="py-16">
        <ImageGallery
          items={EateryEventSlideImages}
          thumbnailPosition="bottom"
        />
      </div>
    </div>
  );
};

export default Events;
