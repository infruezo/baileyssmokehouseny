import React from "react";
import SectionTitle from "./SectionTitle";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { EateryEventSlideImages } from "../../utils/data";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

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
