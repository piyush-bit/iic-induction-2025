import React, { useState } from 'react';
import Card from './card';

const CardSection = ({ items }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedYear, setSelectedYear] = useState('');
  const itemsPerPage = 8;

  
  const years = Array.from(new Set(items.map(item => item.year))).sort().reverse();

 
  const filteredItems = selectedYear
    ? items.filter(item => item.year.toString() === selectedYear)
    : items;

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  return (
    <div className="flex flex-col items-center p-4 md:p-6 lg:p-8">
      <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 text-white">Our Members</h2>

      {/* Year Selection */}
      <div className="mb-4">
        <select 
          value={selectedYear} 
          onChange={(e) => {
            setSelectedYear(e.target.value); 
            setCurrentPage(1); 
          }}
          className="px-3 py-1 rounded bg-primary text-white"
        >
          <option value="">Select Year</option>
          {years.map(year => (
            <option key={year} value={year.toString()}>{year}</option> 
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentItems.length > 0 ? (
          currentItems.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
              year={item.year}
            />
          ))
        ) : (
          <div className="text-white">No items found for the selected year.</div>
        )}
      </div>

      {/* Pagination */}
      <div className="mt-4 flex flex-wrap justify-center space-x-2 mb-6"> {/*  */}
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`mx-2 px-[10px] py-[6px] mb-2 rounded ${currentPage === 1 ? 'bg-gray-400 text-white cursor-not-allowed' : 'bg-black text-white'}`}
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-2 px-[10px] py-[6px] mb-2  rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-black text-white'}`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`mx-2 px-[10px] py-[6px] mb-2 rounded ${currentPage === totalPages ? 'bg-gray-400 text-white cursor-not-allowed' : 'bg-black text-white'}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CardSection;
