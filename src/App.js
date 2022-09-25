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

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
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
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
