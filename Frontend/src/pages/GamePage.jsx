import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GameGrid from "./GameGrid";
import GameDetails from "./GameDetails";
import StatsCard from "../components/StatsCard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Button from "../components/Button";
import axios from "axios";
const GamePage = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //   useEffect(() => {
  //   const apiKey = 'dc202478931a4e4286070e34f9b923ce';
  //   const url=`https://api.rawg.io/api/games?key=${apiKey}`;
  //   fetch(url)
  //   .then(response => response.json())
  //   .then(data => {
  //     setGames(data.results);
  //     setLoading(false);
  //     // Step 2: Destructure the data
  //     // const { results } = data; // Destructure the `results` array from the response
  //     // // Example: Destructure the first game from the results
  //     // const firstGame = results[5];
  //     // const { name, released, background_image, rating } = firstGame;

  //     // console.log(`Name: ${name}`);
  //     // console.log(`Released: ${released}`);
  //     // console.log(`Background Image: ${background_image}`);
  //     // console.log(`Rating: ${rating}`);
  //   })
  //   .catch(error => {
  //     console.error('Error fetching data:', error);
  //     setLoading(false);
  //   });
  // }, []);
  useEffect(() => {
    const fetchGames = async () => {
      const apiKey = "dc202478931a4e4286070e34f9b923ce";
      const url = `https://api.rawg.io/api/games?key=${apiKey}`;

      try {
        const response = await axios.get(url);
        const data = response.data;
        setGames(data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchGames();
  }, []);
  console.log(games[0]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="bg-primary">
      {/* <Navbar  /> */}
      <p>{games[0].added}</p>
      <p>{games[0].name}</p>
      {/* <p>{games}</p> */}
      {/* <Routes>
          <Route path="/" element={<GameGrid />} />
        </Routes> */}
    </div>
  );
};

export default GamePage;
