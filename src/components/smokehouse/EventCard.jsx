import React from "react";
import { format, parseISO } from "date-fns";

const EventCard = ({ event }) => {
  console.log(format(new Date(event.event.startDate), "MMMM dd, yyyy"));

  return (
    <div className="w-full col-span-1 h-96 shadow-lg rounded-lg overflow-hidden ring-1 ring-primary-smokehouseBrown/10  hover:ring-primary-smokehouseBrown duration-300 cursor-pointer">
      <img
        src={event.event.image}
        className="h-3/4 w-full object-cover object-top"
        alt=""
        loading="lazy"
      />

      <div className="flex flex-col space-y-1 p-4">
        <h5 className="font-medium">{event?.event.title}</h5>
        <h5 className="font-bold text-primary-smokehouseBrown">
          {format(new Date(event.event.startDate), "MMMM dd, yyyy")}
          {/* {format(parseISO(new Date(event.event.startDate)), "MMMM dd, yyyy")} */}
        </h5>
      </div>
    </div>
  );
};

export default EventCard;
