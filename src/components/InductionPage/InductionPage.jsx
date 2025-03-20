import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const InductionPage = () => {
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    // Generate random particles
    const newParticles = Array.from({ length: 50 }, () => ({
      id: Math.random().toString(36).substr(2, 9),
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 5
    }));
    
    setParticles(newParticles);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Stars background */}
      <div className="absolute inset-0 bg-black opacity-90"></div>
      
      {/* Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-white opacity-50 animate-float"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`
          }}
        ></div>
      ))}
      
      {/* Cosmic wave */}
      <div className="absolute bottom-0 left-0 w-full h-3/5 bg-gradient-to-t from-indigo-900/20 to-purple-800/5 animate-wave"></div>
      
      {/* Cosmic flow */}
      <div className="absolute top-1/3 right-0 w-1/2 h-2/3 bg-gradient-to-br from-purple-600/20 to-transparent rotate-12 blur-3xl animate-flow"></div>
      
     
      
    <div className="relative z-1 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-0 translate-y-8 animate-title">
          Join our Induction Programme 2024
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-semibold mb-12 text-white/90 opacity-0 translate-y-8 animate-subtitle">
          Be a part of the Idea Innovation Cell !
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-6 mt-8 opacity-0 translate-y-8 animate-buttons">
          <Link to="/login" > 
          <button className="px-8 py-4 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full text-white font-medium text-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30">
            GET STARTED
          </button>
          </Link>
          
          <button className="px-8 py-4 bg-transparent border-2 border-sky-400 rounded-full text-white font-medium text-lg transition-all duration-300 hover:bg-sky-400 hover:text-black hover:shadow-lg hover:shadow-sky-500/30">
            WATCH VIDEO
          </button>
        </div>
    </div>
    </div>
  );
};



// Add required animations via styles
const styles = `
  @keyframes float {
    0% { transform: translateY(0); opacity: 0; }
    10% { opacity: 0.7; }
    90% { opacity: 0.7; }
    100% { transform: translateY(-100vh); opacity: 0; }
  }
  
  @keyframes wave {
    0% { transform: scale(1.1) rotate(-2deg); opacity: 0.6; }
    50% { transform: scale(1) rotate(0deg); opacity: 0.7; }
    100% { transform: scale(1.1) rotate(2deg); opacity: 0.6; }
  }
  
  @keyframes flow {
    0% { transform: translateY(-5%) rotate(10deg); opacity: 0.5; }
    100% { transform: translateY(5%) rotate(15deg); opacity: 0.7; }
  }
  
  @keyframes titleReveal {
    to { opacity: 1; transform: translateY(0); }
  }
  
  .animate-float {
    animation: float linear infinite;
  }
  
  .animate-wave {
    animation: wave 15s ease-in-out infinite alternate;
  }
  
  .animate-flow {
    animation: flow 20s ease-in-out infinite alternate;
  }
  
  .animate-title {
    animation: titleReveal 1.5s ease-out forwards;
  }
  
  .animate-subtitle {
    animation: titleReveal 1.5s ease-out 0.5s forwards;
  }
  
  .animate-buttons {
    animation: titleReveal 1.5s ease-out 1s forwards;
  }
`;

// Add styles to the component
const InductionPageWithStyles = () => {
  return (
    <>
      <style>{styles}</style>
      <InductionPage />
    </>
  );
};

export default InductionPageWithStyles;