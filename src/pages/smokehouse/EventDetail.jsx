import { format, getDay } from "date-fns";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Banner from "../../components/smokehouse/Banner";
import EventCard from "../../components/smokehouse/EventCard";
import Footer from "../../components/smokehouse/Footer";
import Navbar from "../../components/smokehouse/Navbar";
import SocialsWidget from "../../components/SocialsWidget";
import { getUpcomingEvents } from "../../utils/eventData";

const EventDetail = () => {
  let id = useParams().id;
  const [eventsList, setEventsList] = useState(getUpcomingEvents(4));
  const [event, setEvent] = useState(null);

  useEffect(() => {
    eventsList.map((event) => {
      if (event.event.id === id) {
        setEvent(event);
        return 1;
      }

      return 0;
    });
  }, [eventsList, id]);

  return (
    <div className="font-poppins">
      <Navbar />
      <SocialsWidget direction="vertical" />
      <Banner title="" />

      {/* event detail */}
      <div className="bg-primary-eateryLightBrown lg:pb-72 py-20 w-full lg:pt-16 -mt-12">
        <div className="xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md px-4 mx-auto">
          {event ? (
            // EVENT FOUND SCREEN
            <div className="w-full h-full flex flex-col space-y-4">
              <h1 className="font-title tracking-tight lg:text-3xl text-lg text-primary-smokehouseDarkRed">
                {event.event.title}
              </h1>

              <div className="w-full flex flex-col space-y-4 lg:flex-row lg:space-x-8 lg:space-y-0">
                <img
                  src={event.event.image}
                  className="lg:w-fit w-full h-[600px]"
                  alt=""
                />

                {/* event details */}
                <div className="flex flex-col space-y-4">
                  <h1 className="lg:text-2xl text-lg tracking-tight text-primary-smokehouseDarkRed font-title">
                    Event Details
                  </h1>
                  <h3 className="text-xl">
                    <span className="text-primary-smokehouseDarkRed font-medium">
                      Event Name:{" "}
                    </span>
                    {event.event.title}
                  </h3>
                  {event.event.category && (
                    <h3 className="text-xl">
                      <span className="text-primary-smokehouseDarkRed font-medium">
                        Event Category:{" "}
                      </span>
                      {event.event.category}
                    </h3>
                  )}
                  {event.event.text && <h3>description: {event.event.text}</h3>}
                  <h3>
                    <h3 className="text-xl">
                      <span className="text-primary-smokehouseDarkRed font-medium">
                        Date:{" "}
                      </span>
                      {format(event.event.startDate, "MMMM dd, yyyy")}
                    </h3>
                  </h3>
                </div>
              </div>
            </div>
          ) : (
            // EVENT NOT FOUND SCREEN
            <div>
              <h1 className="font-title tracking-tight lg:text-4xl text-lg text-primary-smokehouseDarkRed">
                Event not found
              </h1>
              <h5 className="lg:text-lg text-base font-medium">
                Check all available events here:
              </h5>

              {/* events display */}
              <div className="w-full bg-primary-eateryLightBrown">
                <div className="w-full mt-8 h-auto py-8">
                  <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-8 xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md px-4 mx-auto ">
                    {eventsList.map((event, idx) => (
                      <Link key={idx} to={`/event/${event.event.id}`}>
                        <EventCard event={event} />
                      </Link>
                    ))}
                  </div>

                  <Link
                    to="/event-calendar"
                    className="block px-8 py-2 bg-transparent ring-1 ring-primary-smokehouseBrown w-fit rounded-full text-primary-smokehouseBrown hover:bg-primary-smokehouseBrown hover:text-primary-eateryLightBrown duration-300 shadow-md mx-auto mt-16"
                  >
                    View All Events
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EventDetail;
