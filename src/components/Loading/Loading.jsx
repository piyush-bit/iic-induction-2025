import React from "react";
import Lottie from "lottie-react";
import rocketAnimation from "../../assets/rocket.json"; // Import your JSON file

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <Lottie animationData={rocketAnimation} loop={true} className="w-[300px] h-[300px]" />
    </div>
  );
};

export default Loading;
