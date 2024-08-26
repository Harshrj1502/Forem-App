import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { PiBooksFill } from "react-icons/pi";
import { FaBoxOpen } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa";

const StatsCard = ({
  initialAvgRating,
  initialRatings = [],
  plays,
  playing,
  backlogs,
  wishlist
}) => {
  const [ratings, setRatings] = useState(initialRatings);
  const [totalRatings, setTotalRatings] = useState(initialRatings.reduce((a, b) => a + b, 0));
  const [avgRating, setAvgRating] = useState(initialAvgRating);

  const handleRating = (rating) => {
    const newRatings = [...ratings];
    newRatings[rating - 1] += 1; // Update the selected rating count
    const newTotalRatings = totalRatings + 1;

    // Calculate new average rating
    const newAvgRating = newRatings.reduce((sum, count, index) => sum + count * (index + 1), 0) / newTotalRatings;

    setRatings(newRatings);
    setTotalRatings(newTotalRatings);
    setAvgRating(newAvgRating.toFixed(1)); // Update average rating
  };

  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg shadow-md w-64 mx-auto">
      <div className="text-center">
        <h2 className="text-xl font-bold">Avg. Rating</h2>
        <p className="text-4xl font-bold mt-2">{avgRating}</p>
      </div>

      {/* Set a fixed height for the graph container to prevent layout shifting */}
      <div className="flex justify-between mt-4 h-20">
        {ratings.map((rating, index) => (
          <div key={index} className="flex flex-col items-center mx-1">
            <div
              className="bg-pink-500 rounded-full"
              // style={{ width: '20px', height: `${rating * 2}px` }}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        {[1, 2, 3, 4, 5].map((value) => (
          <button
            key={value}
            onClick={() => handleRating(value)}
            className="bg-pink-500 hover:bg-pink-600 text-white py-1 px-3 rounded-full mx-1"
          >
            {value}★
          </button>
        ))}
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between">
          <span className="text-pink-400"><FaGamepad /> Plays</span>
          <span>{plays}</span>
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="text-pink-400"><FaGooglePlay /> Playing</span>
          <span>{playing}</span>
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="text-pink-400"><PiBooksFill /> Backlogs</span>
          <span>{backlogs}</span>
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="text-pink-400"><FaBoxOpen /> Wishlist</span>
          <span>{wishlist}</span>
        </div>
      </div>
    </div>
  );
};

StatsCard.propTypes = {
  initialAvgRating: PropTypes.number.isRequired,
  initialRatings: PropTypes.arrayOf(PropTypes.number), // Array to hold initial ratings
  plays: PropTypes.string.isRequired,
  playing: PropTypes.string.isRequired,
  backlogs: PropTypes.string.isRequired,
  wishlist: PropTypes.string.isRequired,
};

export default StatsCard;
