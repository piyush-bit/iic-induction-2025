import React, { useState } from 'react';

const Card = ({ title, description, image }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded((prev) => !prev);
  };

  // Fallback image URL 
  const imageUrl = image || 'https://via.placeholder.com/300'; 
  return (
    <div
      className="w-64 h-72 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer hover:shadow-[0_10px_40px_rgba(0,0,0,0.75)]"
      onClick={toggleDescription}
    >
      <div className="relative w-full h-full">
        {/* Image Section */}
        <div
          className={`w-full h-3/4 bg-cover bg-center transition-all duration-500 ${
            isExpanded ? 'opacity-0' : 'opacity-100'
          }`}
          style={{ backgroundImage: `url(${imageUrl})` }} 
        ></div>
        
        {/* Text Section  */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-1 text-white bg-black bg-opacity-80 transition-all duration-500 ease-in-out ${
            isExpanded ? 'h-full opacity-100' : 'h-16 opacity-80'
          }`}
        >
          {/* Heading Section  */}
          <h2 className="text-base md:text-lg font-semibold overflow-hidden line-clamp-2">{title}</h2>
          
          {/* Description Section */}
          <p
            className={`text-xs overflow-hidden transition-all duration-300 ${
              isExpanded ? 'h-auto opacity-100' : 'h-0 opacity-0'
            }`}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
