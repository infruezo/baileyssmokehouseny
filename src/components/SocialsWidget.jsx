import React from "react";
import { ImFacebook, ImTwitter, ImInstagram } from "react-icons/im";
import { BsGiftFill } from "react-icons/bs";

const SocialsWidget = () => {
  return (
    <div className="absolute left-[5px] top-1/2 -translate-y-1/2 hidden lg:block z-50">
      <div className="px-2 py-6 flex flex-col space-y-4">
        <a
          href="https://www.facebook.com/baileyssmokehouse/"
          target="_blank"
          rel="noreferrer"
          className="!cursor-pointer"
        >
          <div className="border-2 border-white p-2 ">
            <ImFacebook className="fill-current text-white" />
          </div>
        </a>

        <a
          href="https://twitter.com/baileysblauvelt"
          rel="noreferrer"
          target="_blank"
          className="!cursor-pointer"
        >
          <div className="border-2 border-white p-2 ">
            <ImTwitter className="fill-current text-white" />
          </div>
        </a>

        <a
          href="https://www.instagram.com/baileysmokehouse/"
          rel="noreferrer"
          target="_blank"
          className="!cursor-pointer"
        >
          <div className="border-2 border-white p-2 ">
            <ImInstagram className="fill-current text-white" />
          </div>
        </a>

        <a
          href="https://baileysandnanuetny.instagift.com/"
          rel="noreferrer"
          target="_blank"
          className="!cursor-pointer"
        >
          <div className="border-2 border-white p-2 ">
            <BsGiftFill className="fill-current text-white" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default SocialsWidget;
