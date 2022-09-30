import React from "react";
import { RiNavigationLine } from "react-icons/ri";
import { GiSmartphone } from "react-icons/gi";
import { MdOutlineCardGiftcard } from "react-icons/md";

const OrderAppGiftCards = () => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-3 lg:h-48 h-auto gap-y-8 lg:gap-y-0 border border-primary-smokehouseBrown shadow-md  lg:py-0">
      {/* one element */}
      <div className="col-span-1 h-full py-8 lg:py-0 flex flex-col space-y-6 items-center justify-center w-full bg-primary-smokehouseBrown">
        <RiNavigationLine className="h-12 w-12 fill-current text-primary-eateryLightBrown" />
        <a
          href="https://direct.chownow.com/order/3877/locations/5030"
          rel="noreferrer"
          target="_blank"
          className="w-fit px-4 py-2 border border-primary-eateryLightBrown rounded-full shadow-sm text-primary-eateryLightBrown font-medium hover:bg-primary-eateryLightBrown hover:text-primary-smokehouseBrown duration-300"
        >
          Order Online
        </a>
      </div>
      {/* one element */}

      <div className="col-span-1 h-full py-8 lg:py-0 flex flex-col space-y-6 items-center justify-center w-full">
        <GiSmartphone className="h-12 w-12 fill-current text-primary-smokehouseBrown" />
        <a
          href="https://apps.apple.com/us/app/baileys-smokehouse/id1071489928"
          rel="noreferrer"
          target="_blank"
          className="w-fit px-4 py-2 border border-primary-smokehouseBrown rounded-full shadow-sm text-primary-smokehouseBrown font-medium hover:bg-primary-smokehouseBrown hover:text-primary-eateryLightBrown duration-300"
        >
          Get The App
        </a>
      </div>

      {/* one element */}
      <div className="col-span-1 h-full py-8 lg:py-0 flex flex-col space-y-6 items-center justify-center w-full bg-primary-smokehouseBrown">
        <MdOutlineCardGiftcard className="h-12 w-12 fill-current text-primary-eateryLightBrown" />
        <a
          href="https://baileysandnanuetny.instagift.com/"
          rel="noreferrer"
          target="_blank"
          className="w-fit px-4 py-2 border border-primary-eateryLightBrown rounded-full shadow-sm text-primary-eateryLightBrown font-medium hover:bg-primary-eateryLightBrown hover:text-primary-smokehouseBrown duration-300"
        >
          Order a Gift Card
        </a>
      </div>
    </div>
  );
};

export default OrderAppGiftCards;
