import React from "react";
import SectionTitle from "./SectionTitle";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Events = ({ events }) => {
  return (
    <div id="events">
      <SectionTitle title="Events and Specials" />
      <div className="py-2 lg:max-w-screen-xl mx-auto">
        <ImageGallery
          items={events}
          thumbnailPosition="bottom"
          showPlayButton={false}
          lazyLoad={true}
        />
      </div>
    </div>
  );
};

export default Events;
