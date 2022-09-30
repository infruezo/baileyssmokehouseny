import React, { useEffect, useState } from "react";
import Banner from "../../components/smokehouse/Banner";
import Footer from "../../components/smokehouse/Footer";
import Navbar from "../../components/smokehouse/Navbar";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";
import { getUpcomingEvents } from "../../utils/eventData";
import MiniEventDisplayCard from "../../components/smokehouse/MiniEventDisplayCard";
import SocialsWidget from "../../components/SocialsWidget";

const Events = () => {
  const [events, setEvents] = useState(getUpcomingEvents(4));
  const [eventsDetailsList, setEventsDetailsList] = useState([]);

  useEffect(() => {
    events.map((event) =>
      setEventsDetailsList((prevArray) => [...prevArray, event.event])
    );
  }, []);

  moment.locale("en-US");
  const localizer = momentLocalizer(moment);

  return (
    <div className="font-poppins h-full w-full">
      <Navbar />
      <Banner title="EVENT CALENDAR" />
      <SocialsWidget direction="vertical" />
      <div className="w-full h-full py-12 bg-primary-eateryLightBrown -mt-12">
        <div className="h-full w-full mx-auto px-4 xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md ">
          {/* calendar */}
          <Calendar
            views={["day", "work_week", "month"]}
            selectable
            localizer={localizer}
            defaultDate={new Date()}
            defaultView="month"
            startAccessor="startDate"
            endAccessor="endDate"
            events={eventsDetailsList}
            style={{ height: "100vh" }}
            className="bg-white"
          />

          {/* events */}
          <div className="pt-16 w-full h-full">
            <div className="flex flex-col space-y-4">
              {events.map((item, idx) => (
                <MiniEventDisplayCard event={item.event} key={idx} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events;
