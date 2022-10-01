import React, { useEffect, useState } from "react";
import Banner from "../../components/smokehouse/Banner";
import Footer from "../../components/smokehouse/Footer";
import Navbar from "../../components/smokehouse/Navbar";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";
import { getEventsForMonth } from "../../utils/eventData";
import MiniEventDisplayCard from "../../components/smokehouse/MiniEventDisplayCard";
import SocialsWidget from "../../components/SocialsWidget";
import { format } from "date-fns";

const Events = () => {
  const [eventsDetailsList, setEventsDetailsList] = useState([]);

  // getting the current month + year to set the default value of the calendar
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(parseInt(new Date().getMonth() + 1));

  const [events, setEvents] = useState(getEventsForMonth(year, month));

  const handleNavigate = (e) => {
    setYear(format(e, "yyyy"));
    setMonth(format(e, "MM"));
  };

  const handleClick = () => {
    console.log("Year: " + year);
    console.log("Month: " + month);
  };

  useEffect(() => {
    events.map((event) =>
      setEventsDetailsList((prevArray) => [...prevArray, event])
    );
  }, [month]);

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
            startAccessor="instanceDate"
            endAccessor="instanceDate"
            onNavigate={(e) => handleNavigate(e)}
            events={eventsDetailsList}
            style={{ height: "100vh" }}
            className="bg-white"
          />

          <button
            onClick={handleClick}
            className="px-8 py-2 text-white bg-black"
          >
            click to get month and year value
          </button>

          {/* events */}
          <div className="pt-16 w-full h-full">
            <div className="flex flex-col space-y-4">
              {events.map((item, idx) => (
                <MiniEventDisplayCard event={item} key={idx} />
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
