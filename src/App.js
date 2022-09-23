import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Eatery from "./pages/Eatery";
import HoursMenus from "./pages/HoursMenus";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/eatery" element={<Eatery />} />
        <Route path="/hours-and-menus" element={<HoursMenus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
