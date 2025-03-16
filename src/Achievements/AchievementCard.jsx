import React from "react";

const AchievementCard = (props) => {
  return (
    <div className="flex flex-col items-center min-h-screen py-5 text-white font-sans">
  <div className="w-[90vw] max-w-[800px] bg-gray-800 rounded-lg overflow-hidden relative transition-all duration-700 ease-in-out group sm:w-[80vw] md:w-[60vw] lg:w-[40vw]">
    
    {/* Image Container */}
    <div className="h-[50vh] max-h-[70vh] overflow-hidden transition-all duration-700 ease-in-out group-hover:h-[80vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh]">
      <img
        src={props.image}
        alt="image_IIC"
        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
      />
    </div>

    {/* Content */}
    <div className="p-[5%]">
      <div className="flex items-center text-orange-400 text-sm mb-2">
        <p className="date">{props.date}</p>
      </div>
      <h2 className="text-xl font-bold text-white transition-colors duration-700 ease-in-out group-hover:text-orange-400">
        {props.heading}
      </h2>
      <p className="text-gray-400 mt-3">
        {props.content}
      </p>
      <a
        href={props.link}
        className="text-gray-500 mt-4 inline-block transition-colors duration-700 ease-in-out group-hover:text-orange-400"
      >
        read more...
      </a>
    </div>

    {/* Bottom color bar with gradient animation */}
    <div className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-r from-orange-500 to-red-600 transition-all duration-700 ease-in-out group-hover:h-[1vh] group-hover:animate-[color-shift_2s_linear_infinite]"></div>
  </div>
</div>

  );
};

export default AchievementCard;
