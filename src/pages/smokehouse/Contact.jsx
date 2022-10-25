import React, { useRef, useState } from "react";
import Banner from "../../components/smokehouse/Banner";
import Footer from "../../components/smokehouse/Footer";
import Navbar from "../../components/smokehouse/Navbar";

import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { MdLocationOn } from "react-icons/md";
import SocialsWidget from "../../components/SocialsWidget";
import EventPopup from "../../components/smokehouse/EventPopup";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const form = useRef();
  const [value, setValue] = useState(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function onChange(value) {
    setValue(value);
    setError("");
  }

  const clearFields = () => {
    setName("");
    setEmail("");
    setMessage("");
    setError("");
    setValue(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // check for captcha first
    if (value) {
      // check for form values
      if (name !== "" && email !== "" && message !== "") {
        setError("");

        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: JSON.stringify({
            subject: `Message from ${name}`,
            email: email,
            message: `<b>${message}</b>`,
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
    <div className="font-poppins">
      <Navbar />
      <Banner title="CONTACT US" />
      <SocialsWidget direction="vertical" />
      <EventPopup />

      <div className="w-full h-full bg-primary-eateryLightBrown py-12 -mt-12">
        <div className="xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md px-4 mx-auto">
          <h1 className="lg:text-3xl text-xl text-primary-smokehouseBrown font-medium">
            Feel free to get in touch with us
          </h1>

          {/* contact form */}
          <div className="py-4 w-full flex flex-col space-y-8 lg:flex-row lg:space-y-0 lg:space-x-8">
            {/* form section */}
            <form
              ref={form}
              onSubmit={handleSubmit}
              className="lg:flex-1 w-full flex flex-col lg:space-y-8 space-y-4"
            >
              <input
                type="text"
                required
                name="from_name"
                placeholder="Name *"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-600 placeholder:text-gray-400 outline-none focus:ring-1 focus:ring-primary-smokehouseBrown duration-300 text-primary-smokehouseBrown font-medium bg-transparent rounded-sm shadow-md placeholder:font-light"
              />
              <input
                type="email"
                required
                name="user_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email *"
                className="w-full px-4 py-2 border border-gray-600 placeholder:text-gray-400 outline-none focus:ring-1 focus:ring-primary-smokehouseBrown duration-300 text-primary-smokehouseBrown font-medium bg-transparent rounded-sm shadow-md placeholder:font-light"
              />

              <textarea
                name="message"
                className="px-4 py-2 border border-gray-600 placeholder:text-gray-400 outline-none focus:ring-1 focus:ring-primary-smokehouseBrown duration-300 text-primary-smokehouseBrown font-medium bg-transparent rounded-sm shadow-md placeholder:font-light"
                id=""
                cols="30"
                rows="11"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="Message"
              ></textarea>

              {/* google captcha */}
              <ReCAPTCHA
                sitekey={process.env.REACT_APP_GOOGLE_CAPTCHA_SITE_KEY}
                onChange={onChange}
              />

              {error && (
                <p className="text-red-500 font-medium text-sm border p-2 border-red-500 w-fit rounded-md shadow-sm">
                  {error}
                </p>
              )}

              {/* submit button */}
              <button
                type="submit"
                className="w-full lg:w-48 px-4 py-2 text-white bg-primary-smokehouseDarkRed shadow-md font-medium rounded-sm hover:bg-transparent hover:text-primary-smokehouseDarkRed duration-300 border border-primary-smokehouseDarkRed"
              >
                SUBMIT
              </button>
            </form>

            {/* information + map section */}
            <div className="lg:flex-1 w-full flex flex-col space-y-6">
              {/* informations */}
              <div className="flex flex-col space-y-4">
                {/* location */}
                <div className="flex items-center space-x-4 font-medium">
                  <MdLocationOn className="h-6 w-6 text-primary-smokehouseDarkRed fill-current" />
                  <div className="space-y-0.5">
                    <p>136 East Erie St.</p>
                    <p>Blauvelt, NY 10913</p>
                  </div>
                </div>

                {/* phone */}
                <div className="flex items-center space-x-4 font-medium">
                  <BsFillTelephoneFill className="h-6 w-6 text-primary-smokehouseDarkRed fill-current" />
                  <div className="space-y-0.5">
                    <p>845-398-1454</p>
                    <p>BBQ Takeout, Catering & Reservations</p>
                  </div>
                </div>

                {/* email */}
                <div className="flex items-center space-x-4 font-medium">
                  <GrMail className="h-6 w-6 text-primary-smokehouseDarkRed fill-current" />
                  <p>info@baileysny.com</p>
                </div>

                {/* test constant contact form  */}
                {/* <!-- Begin Constant Contact Inline Form Code --> */}
                <div
                  className="ctct-inline-form"
                  data-form-id="81076f1d-04cf-4b02-92ea-49b1bef406e3"
                ></div>
                {/* <!-- End Constant Contact Inline Form Code --> */}
              </div>

              {/* map */}
              <iframe
                title="maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.407774311031!2d-73.95466282369989!3d41.063978575929625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2e976597026ad%3A0x94a160cfd5663de0!2sBailey's+Smokehouse!5e0!3m2!1sen!2sus!4v1500048828881"
                frameBorder="0"
                className="w-full lg:h-[250px] h-[300px] border border-gray-600 shadow-md"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
