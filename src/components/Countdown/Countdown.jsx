import React, { useState, useEffect } from "react";
import BackgroundBeams from "../BackgroundBeams/BackgroundBeams";
import { Link } from "react-router-dom";

const LaunchCountdown = () => {
  const targetDate = new Date('2025-02-15T09:30:00.000Z'); // 3:00 PM IST converted to UTC

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      if (Object.values(newTimeLeft).every(value => value === 0)) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeBox = ({ value, label }) => (
    <div className="bg-[#1A1A1D] rounded-lg p-4 w-20 my-2 md:w-24 text-center shadow-md">
      <div className="text-xl md:text-3xl font-bold text-white">
        {String(value).padStart(2, '0')}
      </div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  );

  return (
    <div className="relative min-h-screen h-full bg-gradient-to-b bg-transparent from-black to-[#0D1321] flex items-center w-full gotham">

      <BackgroundBeams className="absolute z-[0]" />
      <div className="h-screen min-w-full w-full flex">
        <div className="relative text-left my-auto flex flex-col w-full items-center justify-center">
          <div className="max-w-2xl w-full text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-gray-500 via-gray-200 to-gray-400 text-transparent bg-clip-text animate-gradient">
              The Countdown Begins
            </h1>
            <p className="text-gray-400 mb-8 text-xl md:text-2xl max-w-xl mx-auto bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 bg-clip-text">
              ETERNO HORIZON
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <TimeBox value={timeLeft.days} label="Days" />
            <TimeBox value={timeLeft.hours} label="Hours" />
            <TimeBox value={timeLeft.minutes} label="Minutes" />
            <div className="hidden md:block">
              <TimeBox value={timeLeft.seconds} label="Seconds" />
            </div>
          </div>
          <Link to="/ticket">
            <button className="mt-8 py-2 px-7 bg-transparent text-white border-2 rounded-md border-blue-500 text-lg tracking-wide z-[1000] hover:bg-blue-500/20 transition-colors duration-300">
              DIVE IN
            </button>
          </Link>
          <p className="text-gray-400 text-lg max-w-xl mx-auto bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 bg-clip-text text-center mt-7 px-3">
            The cycle begins again. Secrets will surface, and reality will twist before your eyes. Prepare for what lies beyond—once it starts, there's no turning back.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LaunchCountdown;