import React, { useState } from 'react';
import Card from './projectcard';

const CardSection = ({ cardData = [] }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 8; 

  
  const currentCards = Array.isArray(cardData)
    ? cardData.slice(currentPage * cardsPerPage, (currentPage + 1) * cardsPerPage)
    : [];

  // Handle Next and Previous button clicks
  const handleNext = () => {
    if ((currentPage + 1) * cardsPerPage < cardData.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="mx-auto max-w-screen-xl p-0 m-0">
      <h1 className="text-3xl font-bold mb-8 text-center text-white">Our Projects</h1>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-4 justify-items-center">
        {currentCards.length > 0 ? (
          currentCards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
            />
          ))
        ) : (
          <p>No projects available</p>
        )}
      </div>

      {/* Carousel Controls */}
      <div className="flex justify-between items-center">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 0}
          className="px-4 py-2 m-3 bg-gray-700 text-white rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={(currentPage + 1) * cardsPerPage >= cardData.length}
          className="px-4 py-2 m-3 bg-gray-700 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CardSection;
