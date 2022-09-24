import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
import SectionTitle from "./SectionTitle";
import { photos } from "../../utils/data";

const EateryGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div className="z-[9999999]">
      <SectionTitle title="Gallery" />
      <div className="xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md max-w-screen-sm mx-auto flex items-center justify-center gap-1 flex-wrap">
        {photos.map((src, index) => (
          <img
            src={src}
            onClick={() => openImageViewer(index)}
            className="object-cover w-48 h-32 cursor-pointer"
            key={index}
            alt=""
          />
        ))}

        {isViewerOpen && (
          <ImageViewer
            src={photos}
            currentIndex={currentImage}
            disableScroll={false}
            closeOnClickOutside={true}
            onClose={closeImageViewer}
            className="z-50"
          />
        )}
      </div>
    </div>
  );
};

export default EateryGallery;
