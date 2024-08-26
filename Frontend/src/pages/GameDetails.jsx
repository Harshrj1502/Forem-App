import React from 'react';
import { useParams } from 'react-router-dom';
import { Gamedata } from './Gamedata'; // Adjust the import path
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CommentSection from '../components/CommentSection';

const GameDetails = () => {
  const { id } = useParams();
  const game = Gamedata.find((g) => g.id === parseInt(id));

  if (!game) {
    return <div className="container mx-auto p-4 text-center text-white">Game not found!</div>;
  }

  return (
    <>
    <Navbar/>
    <div className=" mx-auto p-10 text-white bg-primary ">
      <h1 className="text-4xl font-bold mb-6">{game.title}</h1>
      <img src={game.image} alt={game.alt} className=" object-cover rounded-md mb-6 " />
      <p className="text-lg">{game.info}</p>
    </div>
    <CommentSection/>
    <Footer/>
    </>
  );
};

export default GameDetails;
