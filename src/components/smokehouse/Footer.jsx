import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import SocialsWidget from "../SocialsWidget";
import { MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="font-poppins relative h-full w-full pt-16 pb-24 bg-[#161616] text-white">
      <div className="h-full w-full  xl:max-w-screen-2xl lg:max-w-screen-xl md:max-w-lg px-4 mx-auto flex flex-col space-y-14 lg:space-y-0 lg:flex-row lg:space-x-8 ">
        {/* left side of the footer */}
        <div className="flex-1 w-full h-auto flex flex-col space-y-8">
          {/* about us */}
          <div className="space-y-4">
            <h1 className="text-2xl font-semibold text-red-700">About Us</h1>
            <p className="text-xs lg:text-sm">
              At Baileys we take all reservations and also have a private party
              room available. Contact us by email or phone to make a reservation
              today.
            </p>
          </div>

          {/* be social */}
          <div className="flex flex-col space-y-4">
            <h1 className="text-xl font-semibold text-red-700">Be Social</h1>

            <SocialsWidget direction="horizontal" />
          </div>
        </div>

        {/* center section of the footer */}
        <div className="flex-1 w-full h-auto flex flex-col space-y-4">
          <h1 className="text-2xl font-semibold text-red-700">Contact Us</h1>
          <div className="flex flex-col space-y-6">
            {/* one contact item */}
            <div className="flex items-center space-x-4 text-sm">
              <BsFillTelephoneFill className="fill-current h-6 w-6 text-red-700" />
              <div className="flex flex-col space-y-1">
                <p>845-398-1454</p>
                <p>BBQ Takeout, Catering & Reservations</p>
              </div>
            </div>

            {/* one contact item */}
            <div className="flex items-center space-x-4 text-sm">
              <GrMail className="fill-current h-6 w-6 text-red-700" />
              <a href="mailto:info@baileysny.com">info@baileysny.com</a>
            </div>

            {/* one contact item */}
            <div className="flex items-center space-x-4 text-sm">
              <MdLocationOn className="fill-current h-6 w-6 text-red-700" />
              <div className="flex flex-col space-y-1">
                <p>136 East Erie St.</p>
                <p>Blauvelt, NY 10913</p>
              </div>
            </div>
          </div>
        </div>

        {/* right side of the footer */}
        <div className="flex-1 w-full h-auto flex flex-col lg:space-y-4 space-y-6 mb-12 lg:mb-0">
          <h1 className="text-2xl font-semibold text-red-700">
            Our Newsletter
          </h1>
          <p className="text-xs">To receive the latest news from us please</p>

          <form className="w-full flex flex-col lg:space-y-4 space-y-6">
            <input
              type="email"
              required
              className="py-1.5 px-3 rounded-lg shadow-md text-sm outline-none text-gray-900 w-[80%] lg:w-72 focus:ring focus:ring-red-700 duration-300"
              placeholder="Email Address..."
            />

            <div className="w-full text-xs flex flex-row space-x-4">
              <input
                type="checkbox"
                id="termsCheckbox"
                className="inline-block checked:accent-red-700"
              />

              <label
                htmlFor="termsCheckbox"
                className="inline-block cursor-pointer max-w-sm"
              >
                Yes, I would like to receive emails from Baileys Smokehouse.
                (You can unsubscribe anytime)
              </label>
            </div>

            <button className="bg-red-700 w-24 text-white py-1 rounded-md font-semibold hover:bg-white hover:text-red-700 duration-300">
              Send
            </button>
          </form>

          <div className="border-t border-white text-[10px] mt-6 pt-2">
            <p>
              By submitting this form, you are consenting to receive marketing
              emails from: Baileys smokehouse, 136 Erie street , Blauvelt , NY,
              10913, http://www.baileysny.com. You can revoke your consent to
              receive emails at any time by using the SafeUnsubscribe® link,
              found at the bottom of every email.{" "}
              <a
                href="https://www.constantcontact.com/legal/service-provider"
                rel="noreferrer"
                target="_blank"
                className="text-red-700"
              >
                Emails are serviced by Constant Contact
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* bottom footer for copyrights */}
      <div className="absolute bottom-0 left-0 flex items-center justify-center w-full h-12 bg-black  text-white font-semibold text-xs text-center">
        <p className="tracking-wide">
          Copyright © {new Date().getFullYear()} Bailey’s Smokehouse. All Rights
          Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
