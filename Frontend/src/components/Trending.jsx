import React from 'react';

const Trending = ({ imglink, name }) => {
  return (
    <div className="relative h-[25vh] w-[10vw] flex justify-center bg-red-300 overflow-hidden group cursor-pointer">
      <img
        src={imglink}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-200 transform group-hover:scale-110"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white text-sm text-center">{name}</p>
      </div>
    </div>
  );
}

export default Trending;
