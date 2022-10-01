import React from "react";
import { format } from "date-fns";

const EventCard = ({ event }) => {
  return (
    <div className="w-full col-span-1 h-96 shadow-lg rounded-lg overflow-hidden ring-1 ring-primary-smokehouseBrown/10  hover:ring-primary-smokehouseBrown duration-300 cursor-pointer">
      <img
        src={event.image}
        className="h-3/4 w-full object-cover object-top"
        alt=""
        loading="lazy"
      />

      <div className="flex flex-col space-y-1 p-4">
        <h5 className="font-medium">{event.title}</h5>
        <h5 className="font-bold text-primary-smokehouseBrown">
          {format(event.instanceDate, "MMMM dd, yyyy")}
          {/* {format(parseISO(new Date(event.event.startDate)), "MMMM dd, yyyy")} */}
        </h5>
      </div>
    </div>
  );
};

export default EventCard;
