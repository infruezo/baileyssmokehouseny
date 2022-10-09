import React from "react";
import { ImFacebook, ImTwitter, ImInstagram } from "react-icons/im";
import { BsGiftFill } from "react-icons/bs";

const SocialsWidget = ({ direction }) => {
  return (
    <div
      className={`mix-blend-difference ${
        direction === "vertical"
          ? "fixed left-[5px] top-1/2 -translate-y-1/2 hidden lg:block z-50"
          : "absolute"
      }`}
    >
      <div
        className={`${
          direction === "vertical"
            ? "px-2 py-6 flex flex-col space-y-4"
            : "absolute flex flex-row items-center space-x-4 mt-5"
        }`}
      >
        <a
          href="https://www.facebook.com/baileyssmokehouse/"
          target="_blank"
          rel="noreferrer"
          className="!cursor-pointer group"
        >
          <div className="border-2 border-white p-2 group-hover:border-blue-600 duration-300  ">
            <ImFacebook className="fill-current text-white group-hover:text-blue-600 duration-300 " />
          </div>
        </a>

        <a
          href="https://twitter.com/baileysblauvelt"
          rel="noreferrer"
          target="_blank"
          className="!cursor-pointer group"
        >
          <div className="border-2 border-white p-2 group-hover:border-sky-500 duration-300 ">
            <ImTwitter className="fill-current text-white group-hover:text-sky-500 duration-300 " />
          </div>
        </a>

        <a
          href="https://www.instagram.com/baileysmokehouse/"
          rel="noreferrer"
          target="_blank"
          className="!cursor-pointer group"
        >
          <div className="border-2 border-white p-2 group-hover:border-orange-500 duration-300  ">
            <ImInstagram className="fill-current text-white group-hover:text-orange-500 duration-300 " />
          </div>
        </a>

        {direction === "vertical" && (
          <a
            href="https://baileysandnanuetny.instagift.com/"
            rel="noreferrer"
            target="_blank"
            className="!cursor-pointer group"
          >
            <div className="border-2 border-white p-2 group-hover:border-purple-500 duration-300  ">
              <BsGiftFill className="fill-current text-white group-hover:text-purple-500 duration-300 " />
            </div>
          </a>
        )}
      </div>
    </div>
  );
};

export default SocialsWidget;
