import { useState } from "react";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import GamePage from "./pages/GamePage";
import RegisterPage from "./pages/RegisterPage";
import Loginpage from "./pages/Loginpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StatsCard from './components/StatsCard';
import PlatformButtons from './components/PlatformButtons';
import { FaWindows, FaPlaystation, FaXbox } from 'react-icons/fa';
import ContactPage from "./pages/ContactPage";
import SideNavbar from "./components/SideNavbar";
import GameDetails from "./pages/GameDetails";
import Navbar from "./components/Navbar";
const platforms = [
  {
    name: 'Windows PC',
    url: 'https://www.microsoft.com/en-us/windows',
    icon: <FaWindows />, // Windows icon
  },
  {
    name: 'PlayStation 4',
    url: 'https://www.playstation.com/en-us/ps4/',
    icon: <FaPlaystation />, // PlayStation icon
  },
  {
    name: 'Xbox One',
    url: 'https://www.xbox.com/en-US/consoles/xbox-one',
    icon: <FaXbox />, // Xbox icon
  },
  {
    name: 'PlayStation 5',
    url: 'https://www.playstation.com/en-us/ps5/',
    icon: <FaPlaystation />, // PlayStation icon (same as PS4)
  },
  {
    name: 'Xbox Series',
    url: 'https://www.xbox.com/en-US/consoles/xbox-series-x',
    icon: <FaXbox />, // Xbox icon (same as Xbox One)
  },
];

function App() {
  const initialRatings = [1, 1, 2, 4, 10]; // Example initial distribution
  const initialAvgRating = 4.5;
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/test" element={<Navbar />} />
          <Route exact path="/" element={<HomePage />} />
          <Route path="/GamePage" element={<GamePage/>} />
          <Route path="/RegisterPage" element={<RegisterPage />} />
          <Route path="/Loginpage" element={<Loginpage />} />
          <Route path="/ContactPage" element={<ContactPage />} />
          <Route path="/SideNavbar" element={<SideNavbar />} />
          <Route
            path="/game/:id"
            element={
              <div className="">
                <GameDetails />
                {/* <div className="flex justify-center items-center h-screen bg-primary">
                  <StatsCard
                    initialAvgRating={initialAvgRating}
                    initialRatings={initialRatings}
                    plays="56K"
                    playing="9K"
                    backlogs="14K"
                    wishlist="11K"
                  />
                </div> */}
              </div>
            }
          />
        </Routes>
      </Router>

    </>
  );
}

export default App;
