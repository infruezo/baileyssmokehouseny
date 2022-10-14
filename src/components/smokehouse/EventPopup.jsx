import { format } from "date-fns";
import React, { useState, useEffect } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { getSitePopup } from "../../utils/eventUtils";

const EventPopup = () => {
  const navigate = useNavigate();

  const [featuredEvent, setFeaturedEvent] = useState([]);
  const [visible, setVisible] = useState(false);

  const handleNavigate = () => {
    navigate(`/event/${featuredEvent[0].id}`);
    setVisible(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSitePopup();
      setFeaturedEvent(data);
    };

    fetchData();

    console.log(featuredEvent[0]);

    let pop_status = sessionStorage.getItem("pop_status");
    if (!pop_status) {
      setVisible(true);
      sessionStorage.setItem("pop_status", 1);
    }
  }, []);
  if (!visible) return null;
  if (featuredEvent === null || featuredEvent.length === 0) return null;

  return (
    <>
      {visible ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[100] outline-none focus:outline-none bg-black/50 "
            id="modal"
          >
            <div className="relative w-full my-6 mx-auto lg:w-[600px] px-2 lg:px-0 animate-popup">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-primary-eateryLightBrown outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-between p-5 border-b border-solid border-primary-smokehouseDarkRed/25 rounded-t">
                  <h3 className="text-lg lg:text-2xl font-bold text-primary-smokehouseDarkRed">
                    {featuredEvent[0].title}
                  </h3>
                  <button
                    className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setVisible(false)}
                  >
                    <span className="text-red-500 focus:outline-none">
                      <IoIosCloseCircleOutline className="h-8 w-8" />
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative flex flex-col w-full">
                  <img
                    src={featuredEvent[0].image}
                    alt="eventImage"
                    className="w-full h-80 object-cover"
                  />

                  <div className="w-full h-auto p-4 font-medium flex flex-col space-y-4">
                    <h1>{featuredEvent[0].text}</h1>
                    <h1>
                      Event Starts:{" "}
                      <span className="font-bold text-primary-smokehouseDarkRed">
                        {format(
                          new Date(featuredEvent[0].startDate),
                          "MMMM dd, yyyy"
                        )}
                      </span>
                    </h1>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center space-x-4 justify-end p-6 border-t border-solid border-primary-smokehouseDarkRed/25 rounded-b">
                  <button
                    className="bg-red-500 text-white hover:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setVisible(false)}
                  >
                    Dismiss
                  </button>
                  <button
                    className="bg-primary-eateryBrown/90 text-white hover:bg-primary-eateryBrown font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleNavigate}
                  >
                    Check Event Page
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default EventPopup;
