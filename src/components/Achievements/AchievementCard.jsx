import React from "react";

const AchievementCard = (props) => {
  return (
    <div className="flex flex-col items-center py-5 text-white font-sans">
      <div className="w-[96vw] max-w-[950px] bg-gray-800 rounded-lg overflow-hidden relative transition-all duration-700 ease-in-out group sm:w-[86vw] md:w-[72vw] lg:w-[57vw] group-hover:w-[99vw] sm:group-hover:w-[92vw] md:group-hover:w-[77vw] lg:group-hover:w-[62vw]">
        
        {/* Image Container */}
        <div className="overflow-hidden transition-all duration-700 ease-in-out group-hover:h-[70vh] sm:h-[35vh] md:h-[45vh] lg:h-[55vh]">
          <img
            src={props.image}
            alt="image_IIC"
            className="w-full h-auto object-cover transition-all duration-700 ease-in-out group-hover:scale-110 grayscale group-hover:grayscale-0"
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
