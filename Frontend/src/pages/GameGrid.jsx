import React from 'react';
import { Link } from 'react-router-dom';
// import { Gamedata } from './Gamedata'; // Adjust the import path

const GameGrid = () => {
  return (
    <div className=" ">
      <h1 className="text-3xl font-bold text-white px-36 py-5">Game Gallery</h1>
      <div className="grid grid-cols-2 gap-10 px-32 py-5">
        {Gamedata.map((game) => (
          <Link
            key={game.id}
            to={`/game/${game.id}`}
            className="group"
          >
            <div className="bg-primary p-2 rounded-lg shadow-lg relative overflow-hidden">
              <img
                src={game.image}
                alt={game.alt}
                className="w-full h-auto object-cover rounded-md transition-transform duration-300 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h2 className="text-white text-lg font-normal">{game.title}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GameGrid;
