import React, { useState } from 'react';
import { Gamedata } from '../pages/Gamedata'; // Assuming Gamedata is imported from another file

const GameSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGame, setSelectedGame] = useState(null);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);

    // Find the game based on the search term
    const game = Gamedata.find((game) =>
      game.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    
    // Set the selected game
    setSelectedGame(game);
  };

  return (
    <div className=''>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearch}
        className='bg-secondary p-2 rounded-lg outline-none placeholder:font-normal placeholder:text-sm'
      />
      {/* {selectedGame ? (
        <div className='flex flex-col gap-5'>
          <h2>{selectedGame.title}</h2>
          <img src={selectedGame.image} alt={selectedGame.alt} style={{ width: '200px', height: '200px' }} />
          <p><strong>Release Date:</strong> {selectedGame.release}</p>
          <p><strong>Company:</strong> {selectedGame.company}</p>
          <p>{selectedGame.info}</p>
        </div>
      ) : (
        <p></p>
      )} */}
    </div>
  );
};

export default GameSearch;