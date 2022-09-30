import React from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const MiniEventDisplayCard = ({ event }) => {
  return (
    <div className="w-full h-full flex items-center space-x-4">
      {/* image */}
      <div className="relative h-24 w-24 rounded-md shadow-sm overflow-hidden cursor-pointer">
        <Link to={`/event/${event.id}`}>
          <img src={event.image} className="w-full h-full" alt="" />
          <div className="h-full w-full absolute left-0 top-0 bg-primary-smokehouseDarkRed/80 flex items-center justify-center flex-col space-y-2 text-white font-bold">
            <p className="font-normal">{format(event.startDate, "MMM")}</p>
            <p className="text-3xl">{format(event.startDate, "dd")}</p>
          </div>
        </Link>
      </div>

      {/* informations */}
      <p className="text-lg font-medium">{event.title}</p>
    </div>
  );
};

export default MiniEventDisplayCard;
