import React from 'react';

const Filter = ({ onFilterChange }) => {
  const handleTitleChange = (event) => {
    const title = event.target.value;
    onFilterChange({ title });
  };

  const handleRatingChange = (event) => {
    const rating = event.target.value;
    onFilterChange({ rating });
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        onChange={handleTitleChange}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        onChange={handleRatingChange}
      />
    </div>
  );
};

export default Filter;
