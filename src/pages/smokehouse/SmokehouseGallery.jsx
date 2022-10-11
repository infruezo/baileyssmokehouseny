import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
import Banner from "../../components/smokehouse/Banner";
import EventPopup from "../../components/smokehouse/EventPopup";
import Footer from "../../components/smokehouse/Footer";
import Navbar from "../../components/smokehouse/Navbar";
import SocialsWidget from "../../components/SocialsWidget";
import { smokehousePhotos } from "../../utils/data";

const SmokehouseGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);

  const openImageViewer = useCallback((index) => {
    setShowNav(false);
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setShowNav(true);
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  return (
    <div className="font-poppins">
      {showNav && <Navbar />}
      <Banner title="GALLERY" />
      <SocialsWidget direction="vertical" />
      <EventPopup />

      <div
        className="py-2 lg:py-24 bg-primary-eateryLightBrown -mt-12 lg:-mt-12"
        id="gallery"
      >
        <div className="xl:max-w-screen-2xl lg:max-w-screen-xl md:max-w-screen-lg  gap-0.5 max-w-screen-sm mx-auto flex items-center  justify-center flex-wrap">
          {smokehousePhotos.map((src, index) => (
            <img
              src={src}
              onClick={() => openImageViewer(index)}
              className="object-cover w-48 h-32 lg:w-80 lg:h-56 cursor-pointer ring-4 ring-black"
              key={index}
              loading="lazy"
              alt=""
            />
          ))}

          {isViewerOpen && (
            <ImageViewer
              src={smokehousePhotos}
              currentIndex={currentImage}
              disableScroll={false}
              closeOnClickOutside={true}
              onClose={closeImageViewer}
              className="z-50"
            />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SmokehouseGallery;
