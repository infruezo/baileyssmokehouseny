import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Banner from "../../components/smokehouse/Banner";
import Footer from "../../components/smokehouse/Footer";
import Navbar from "../../components/smokehouse/Navbar";
import SocialsWidget from "../../components/SocialsWidget";
import EventPopup from "../../components/smokehouse/EventPopup";
import axios from "axios";
import { formatUrl } from "../../utils/urlUtils";

const Menu = () => {
  const [currentTab, setCurrentTab] = useState("1");

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };

  const [menus, setMenus] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(formatUrl(`data/smokehouse/menus.json`));
      setMenus(response.data);
    };

    fetchData();
  }, []);

  return (
    <div className="font-poppins">
      <Navbar />
      <Banner title="MENU" />
      <SocialsWidget direction="vertical" />
      <EventPopup />

      {/* menus section */}
      <div className="min-h-screen w-full bg-primary-eateryLightBrown py-16 lg:py-20 -mt-12">
        {/* disclaimer / fee image */}
        <div className="w-full flex justify-center pb-12 lg:-mt-14 -mt-12">
          <img
            src={formatUrl(`images/smokehouse/menus/disclaimer.jpeg`)}
            className="h-32 w-48 object-cover "
            alt=""
          />
        </div>

        <div className="w-full h-full xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md px-4 mx-auto">
          {/* tabs */}
          <div className="w-full h-full">
            <div className="tabs w-full flex items-center flex-wrap gap-4 lg:gap-x-0 lg:justify-center lg:space-x-4 pb-12">
              {menus.map((tab, i) => (
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
              {menus.map((tab, i) => (
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
                            src={formatUrl(tab?.content?.original)}
                            className="lg:max-h-[855px] h-auto w-auto object-cover mx-auto"
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
