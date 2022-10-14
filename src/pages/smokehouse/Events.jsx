import React, { useEffect, useState } from "react";
import Banner from "../../components/smokehouse/Banner";
import Footer from "../../components/smokehouse/Footer";
import Navbar from "../../components/smokehouse/Navbar";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";
import { Site, getEventsForMonth } from "../../utils/eventUtils";
import MiniEventDisplayCard from "../../components/smokehouse/MiniEventDisplayCard";
import SocialsWidget from "../../components/SocialsWidget";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import EventPopup from "../../components/smokehouse/EventPopup";

const Events = () => {
  const navigate = useNavigate();

  // getting the current month + year to set the default value of the calendar
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(parseInt(new Date().getMonth() + 1));
  const [loading, setLoading] = useState(true);

  const [events, setEvents] = useState([]);

  const handleNavigate = (e) => {
    setYear(format(e, "yyyy"));
    setMonth(format(e, "MM"));
  };

  const handleSelect = (e) => {
    navigate(`/event/${e.id}`);
  };
  useEffect(() => {
    const fetchMonthData = async () => {
      setLoading(true);
      const eventData = await getEventsForMonth(Site.Smokehouse, year, month);
      setEvents(eventData);
      setLoading(false);
    };

    fetchMonthData();
  }, [year, month]);

  moment.locale("en-US");
  const localizer = momentLocalizer(moment);

  return (
    <>
      {!loading && (
        <div className="font-poppins h-full w-full">
          <Navbar />
          <Banner title="EVENT CALENDAR" />
          <SocialsWidget direction="vertical" />
          <EventPopup />

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
                onSelectEvent={(e) => handleSelect(e)}
                events={events}
                style={{ height: "100vh" }}
                className="bg-white"
              />

              {/* events */}
              <div className="pt-16 w-full h-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-x-10">
                  {events.map((item, idx) => (
                    <MiniEventDisplayCard event={item} key={idx} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Events;
