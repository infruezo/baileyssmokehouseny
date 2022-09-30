import React, { useState } from "react";
import Banner from "../../components/smokehouse/Banner";
import Footer from "../../components/smokehouse/Footer";
import Navbar from "../../components/smokehouse/Navbar";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import events from "../../utils/events";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { SmokehouseEvents } from "../../utils/eventData";

// import { SmokehouseUpcomingEvents } from "../../utils/data";

const Events = () => {
  moment.locale("en-US");
  const localizer = momentLocalizer(moment);
  const [eventsData, setEventsData] = useState(SmokehouseEvents);
  return (
    <div className="font-poppins h-full w-full">
      <Navbar />
      <Banner title="EVENT CALENDAR" />
      <div className="w-full h-full py-12 bg-primary-eateryLightBrown -mt-12">
        <div className="h-full w-full mx-auto px-4 xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md ">
          <Calendar
            views={["day", "agenda", "work_week", "month"]}
            selectable
            localizer={localizer}
            defaultDate={new Date()}
            defaultView="month"
            startAccessor="startDate"
            endAccessor="endDate"
            events={eventsData}
            style={{ height: "100vh" }}
            onSelectEvent={(event) => alert(event.title)}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events;
