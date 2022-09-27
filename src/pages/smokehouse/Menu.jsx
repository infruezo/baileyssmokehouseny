import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Banner from "../../components/smokehouse/Banner";
import Footer from "../../components/smokehouse/Footer";
import Navbar from "../../components/smokehouse/Navbar";
import { SmokehouseMenutabs } from "../../utils/data";

const Menu = () => {
  const [currentTab, setCurrentTab] = useState("1");

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };

  return (
    <div>
      <Navbar />
      <Banner title="MENU" />

      {/* menus section */}
      <div className="min-h-screen w-full bg-primary-eateryLightBrown py-16 lg:py-32 -mt-12">
        <div className="w-full h-full px-4 xl:max-w-screen-2xl lg:max-w-screen-xl md:max-w-screen-lg mx-auto">
          {/* tabs */}
          <div className="w-full h-full">
            <div className="tabs w-full flex items-center flex-wrap gap-4 lg:gap-x-0 lg:justify-center lg:space-x-4 pb-12">
              {SmokehouseMenutabs.map((tab, i) => (
                <button
                  key={i}
                  id={tab.id}
                  disabled={currentTab === `${tab.id}`}
                  onClick={handleTabClick}
                  className="font-title tracking-tight text-xs md:text-sm bg-transparent text-primary-smokehouseDarkRed p-3 disabled:bg-primary-smokehouseDarkRed border-2 border-primary-smokehouseDarkRed disabled:text-white shadow-md"
                >
                  {tab.tabTitle}
                </button>
              ))}
            </div>
            <div className="content mx-auto w-full">
              {SmokehouseMenutabs.map((tab, i) => (
                <div key={i}>
                  {currentTab === `${tab.id}` && (
                    <div>
                      {tab.content.length > 1 ? (
                        <div>
                          <ImageGallery
                            items={tab.content}
                            showBullets={true}
                            showNav={true}
                          />
                        </div>
                      ) : (
                        <div>
                          <img
                            src={tab?.content?.original}
                            className="h-full lg:max-w-[800px] w-full object-cover mx-auto"
                            alt=""
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Menu;
