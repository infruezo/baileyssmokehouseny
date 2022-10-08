import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Main from "./pages/Main";
import Eatery from "./pages/Eatery";
import HoursMenus from "./pages/HoursMenus";

import Home from "./pages/smokehouse/Home";
import About from "./pages/smokehouse/About";
import Menu from "./pages/smokehouse/Menu";
import Catering from "./pages/smokehouse/Catering";
import Events from "./pages/smokehouse/Events";
import SmokehouseGallery from "./pages/smokehouse/SmokehouseGallery";
import Contact from "./pages/smokehouse/Contact";
import ScrollToTop from "./components/ScrollToTop";
import RestaurantBars from "./pages/smokehouse/RestaurantBars";
import EventDetail from "./pages/smokehouse/EventDetail";
import EateryCateringTakout from "./pages/smokehouse/EateryCateringTakout";
import SmokehouseHiring from "./pages/smokehouse/SmokehouseHiring";
// import JsonTest from "./pages/JsonTest";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* <Route path="/" element={<JsonTest />} /> */}
        <Route path="/" element={<Main />} />
        <Route path="/eatery" element={<Eatery />} />
        <Route path="/hours-and-menus" element={<HoursMenus />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/catering" element={<Catering />} />
        <Route path="/event-calendar" element={<Events />} />
        <Route path="/gallery" element={<SmokehouseGallery />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/restaurant-bars" element={<RestaurantBars />} />
        <Route
          path="/eatery-catering-takeout"
          element={<EateryCateringTakout />}
        />
        <Route path="/new-city-now-hiring" element={<SmokehouseHiring />} />
        <Route path="/event/:id" element={<EventDetail />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
