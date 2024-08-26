import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GameGrid from "./GameGrid";
import GameDetails from "./GameDetails";
import StatsCard from "../components/StatsCard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const GamePage = () => {
  const initialRatings = [1, 1, 2, 4, 10]; // Example initial distribution
  const initialAvgRating = 4.0;
  return (
    <div className="bg-primary">
      <Navbar />
        <Routes>
          <Route path="/" element={<GameGrid />} />
          
        </Routes>
      <Footer />
    </div>
  );
};

export default GamePage;
