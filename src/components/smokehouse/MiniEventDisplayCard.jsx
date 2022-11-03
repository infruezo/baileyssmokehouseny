import React from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { formatUrl } from "../../utils/urlUtils";

const MiniEventDisplayCard = ({ event }) => {
  return (
    <div className="w-full h-full flex items-center space-x-4 col-span-1">
      {/* image */}
      <div className="relative h-24 w-24 lg:h-28 lg:w-28 aspect-square rounded-md shadow-sm cursor-pointer">
        <a href={`/event/${event.id}`}>
          <img
            src={formatUrl(event.image)}
            className="w-full h-full rounded-md"
            alt=""
          />
          <div className="h-full w-full rounded-md absolute left-0 top-0 bg-primary-smokehouseDarkRed/80 flex items-center justify-center flex-col space-y-2 text-white font-bold">
            <p className="font-normal">{format(event.instanceDate, "MMM")}</p>
            <p className="text-3xl">{format(event.instanceDate, "dd")}</p>
          </div>
        </a>
      </div>

      {/* informations */}
      <p className="text-lg font-medium">{event.title}</p>
    </div>
  );
};

export default MiniEventDisplayCard;
