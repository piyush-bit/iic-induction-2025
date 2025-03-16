import React from 'react';

const Card = ({ title, description, image, year }) => {
  return (
    <div className="w-72 h-96 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer hover:shadow-[0_10px_40px_rgba(0,0,0,0.75)]"> {/*  */}
      <div className="relative w-full h-full">
        {/* Image Section */}
        <div
          className="w-full h-3/4 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        
        {/* Text Section */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-black bg-opacity-80 flex flex-col justify-center p-4 text-white"> {/*  */}
          <h2 className="text-md font-semibold">{title}</h2> {/*  */}
          <p className="text-xs opacity-80">{description}</p> {/*  */}
          <p className="text-xs mt-1">{year}</p> {/*  */}
          <div className="flex space-x-2 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png" 
                alt="Facebook" 
                className="w-4 h-4" 
              />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" 
                alt="LinkedIn" 
                className="w-4 h-4" 
              />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png" 
                alt="Instagram" 
                className="w-4 h-4" 
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
