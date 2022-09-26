import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/smokehouse/Footer";
import Navbar from "../../components/smokehouse/Navbar";
import Banner from "../../images/smokehouse/main-banner.png";

const Home = () => {
  return (
    <div className="relative">
      <Navbar />
      {/* special banner for home page */}
      <div className="w-full lg:h-[700px] h-[500px] absolute top-0 left-0 z-0">
        <img
          src={Banner}
          className="h-full w-full absolute top-0 left-0 object-cover"
          alt="bannerImage"
        />

        {/* hero section text */}
        <div className="mx-auto text-white absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col space-y-8 text-center z-0 w-full px-8 lg:px-0">
          <div>
            <h1 className="xl:text-4xl lg:text-3xl text-lg font-title">
              WELCOME TO
            </h1>
            <h1 className="xl:text-4xl lg:text-3xl text-lg font-title">
              BAILEY'S SMOKEHOUSE
            </h1>
          </div>
          <h5 className="xl:text-2xl lg:text-xl text-base text-center">
            Full service restaurant and bars, catering and takeout.
          </h5>
          <Link
            to="/contact-us"
            className="px-6 py-2.5 bg-red-500 text-white w-36 mx-auto font-semibold rounded-md shadow-md hover:bg-white hover:text-red-500 duration-300"
          >
            CONTACT US
          </Link>
        </div>
      </div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <Footer />
    </div>
  );
};

export default Home;
