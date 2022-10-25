import React, { useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { MdLocationOn } from "react-icons/md";

import SectionTitle from "./SectionTitle";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = ({ data }) => {
  const [value, setValue] = useState(null);
  const [error, setError] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [guests, setGuests] = useState(1);
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  function onChange(value) {
    setValue(value);
    setError("");
  }

  const clearFields = () => {
    setName("");
    setEmail("");
    setGuests(1);
    setDate("");
    setMessage("");
    setError("");
    setValue(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // check for captcha first
    if (value) {
      // check for form values
      if (
        name !== "" &&
        email !== "" &&
        guests !== "" &&
        guests >= 1 &&
        date !== ""
      ) {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: JSON.stringify({
            subject: `Reservation request from ${name}`,
            email: email,
            message: `<h3>Received a reservation request from <b>${name}</b> for <b>${guests}</b> person(s).</h3>
            <p>Reservation Date: <b>${date}</b></p>
            <br/>            
            <br/>            
            <p>Additional infromations (if any): ${message}</p>
            `,
          }),
        };
        fetch("http://www.gomobilehawk.com/api/index.php", requestOptions)
          .then((response) => response.json())
          .then((data) => clearFields());
      } else {
        setError("Please fill out all the fields.");
      }
    } else {
      setError("Please check the captcha first.");
    }
  };

  return (
    <div id="contact" className="">
      <SectionTitle title="Contact Us" />

      <div className="w-full h-auto pb-12 lg:py-0 mt-8 lg:mt-12">
        <div className="w-full h-full flex flex-col space-y-8 lg:flex-row lg:space-y-0">
          {/* contact form */}
          <div className="flex-1 h-full w-full">
            {/* form wrapper */}
            <div className="p-12 bg-primary-eateryLightBrown lg:max-w-xl max-w-lg mx-auto h-full rounded-md shadow-md">
              <div className="h-full w-full">
                <h1 className="text-3xl font-bold text-primary-eateryBrown text-center">
                  Reservation
                </h1>

                <form
                  onSubmit={handleSubmit}
                  className="px-0 lg:px-4 mt-4 space-y-6"
                >
                  {/* one form item */}
                  <div>
                    <label htmlFor="name" className="text-lg font-semibold">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      required
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-2 py-2 rounded-md shadow-sm focus:ring focus:ring-primary-eateryBrown duration-300 outline-none"
                    />
                  </div>

                  {/* one form item */}
                  <div>
                    <label htmlFor="email" className="text-lg font-semibold">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-2 py-2 rounded-md shadow-sm focus:ring focus:ring-primary-eateryBrown duration-300 outline-none"
                    />
                  </div>

                  {/* one form item */}
                  <div>
                    <label htmlFor="guests" className="text-lg font-semibold">
                      Number of Guests
                    </label>
                    <input
                      type="number"
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      min={1}
                      id="guests"
                      required
                      className="w-full px-2 py-2 rounded-md shadow-sm focus:ring focus:ring-primary-eateryBrown duration-300 outline-none"
                    />
                  </div>

                  {/* one form item */}
                  <div>
                    <label htmlFor="date" className="text-lg font-semibold">
                      Date and Time
                    </label>
                    <input
                      type="date"
                      id="date"
                      value={date}
                      required
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-2 py-2 rounded-md shadow-sm focus:ring focus:ring-primary-eateryBrown duration-300 outline-none"
                    />
                  </div>

                  {/* one form item */}
                  <div>
                    <label htmlFor="message" className="text-lg font-semibold">
                      Your message (Optional)
                    </label>
                    <textarea
                      type=""
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-2 py-2 rounded-md shadow-sm focus:ring focus:ring-primary-eateryBrown duration-300 outline-none"
                    ></textarea>
                  </div>

                  {/* google captcha */}
                  <ReCAPTCHA
                    sitekey={process.env.REACT_APP_GOOGLE_CAPTCHA_SITE_KEY}
                    onChange={onChange}
                  />

                  {error && (
                    <div className="w-full p-3 bg-red-500/80 text-white rounded-md shadow-sm font-medium text-sm">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="bg-primary-eateryBrown text-white font-semibold w-full py-3 rounded-md shadow-md cursor-pointer"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* informations and map */}
          <div className="xl:flex-1 lg:flex-1 h-full w-full pb-12 px-8">
            <h1 className="text-3xl font-bold text-primary-eateryBrown text-center mb-8">
              Contact Us Today
            </h1>

            <div className="flex flex-col-reverse w-full">
              {/* informations */}
              <div className="flex-1 h-48">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-2">
                    <BsFillTelephoneFill className="fill-current text-primary-eateryBrown h-6 w-6" />
                    <p className="font-semibold text-lg">{data.phone}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <GrMail className="fill-current text-primary-eateryBrown h-6 w-6" />
                    <p className="font-semibold text-lg">{data.email}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MdLocationOn className="fill-current text-primary-eateryBrown h-6 w-6" />
                    <p className="font-semibold text-lg">{data.location}</p>
                  </div>
                </div>
              </div>

              {/* google maps */}
              <div className="flex-1 h-48 pb-6">
                <iframe
                  title="maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.2850333382767!2d-73.95369258458426!3d41.0627617792952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2e976f0f80357%3A0x243575d2acb12b82!2s135%20E%20Erie%20St%2C%20Blauvelt%2C%20NY%2010913!5e0!3m2!1sen!2sus!4v1649131559552!5m2!1sen!2sus"
                  frameBorder="0"
                  className="w-full lg:h-[480px] h-[300px] ring-1 ring-primary-eateryLightBrown shadow-md"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
