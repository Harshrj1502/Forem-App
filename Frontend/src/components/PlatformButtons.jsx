import React from "react";
import { FaWindows, FaPlaystation, FaXbox } from "react-icons/fa"; // Importing icons from react-icons

const PlatformButtons = ({ platforms }) => {
  const handleRedirect = (url) => {
    window.location.href = url;
  };
  return (
    <div className="text-center mt-2">
      <h3 className="text-sm font-medium text-gray-300 mb-2">Released on</h3>
      <div className="flex flex-wrap justify-center gap-2 items-center">
        {platforms.map((platform) => (
          <button
            key={platform.name}
            onClick={() => handleRedirect(platform.url)}
            className="flex items-center bg-gray-800 hover:bg-gray-700 text-white py-1 px-2 rounded-md transition-colors duration-200 text-xs"
          >
            <span className="mr-1 w-4 h-4 flex items-center">{platform.icon}</span>
            {platform.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PlatformButtons;
