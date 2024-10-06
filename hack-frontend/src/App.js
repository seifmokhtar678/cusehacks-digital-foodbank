// parent page, houses *links*
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./EVNpages/Land";
import EVBenefits from "./EVNpages/EVBenefits";
import Terms from "./EVNpages/Terms";
import Charging from "./EVNpages/Charging";
import ShopEvs from "./EVNpages/ShopEvs";
import News from "./EVNpages/News";
import AboutUs from "./EVNpages/AboutUs";
import NavFootPage from "./Components/NavFootPages";

function App() {
  return (
    <div className="App">
      {/* paths to the actual pages end user would see */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavFootPage />}>
            <Route path="/" element={<Home />} />
            <Route path="/EVBenefits" element={<EVBenefits />} />
            <Route path="/Terms" element={<Terms />} />
            <Route path="/Charging" element={<Charging />} />
            <Route path="/ShopEvs" element={<ShopEvs />} />
            <Route path="/News" element={<News />} />
            <Route path="/AboutUs" element={<AboutUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// API call so front n back can connect Evncapstone-env.eba-2tvimhmy.us-east-1.elasticbeanstalk.com
