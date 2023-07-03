import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './MovieList';
import MovieDescription from './MovieDescription';
import Filter from './Filter';
const App = () => {
  const [movies, setMovies] = useState([
    {
      id: '1',
      title: 'Inception',
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
      posterURL: 'https://www.themoviedb.org/t/p/original/xlaY2zyzMfkhk0HSC5VUwzoZPU1.jpg',
      rating: 4.8,
      trailerLink: 'https://youtu.be/YoHD9XEInc0',
    },
    {
      id: '2',
      title: 'Interstellar',
      description: 'A team of explorers travels through a wormhole in space in an attempt to ensure humanity\'s survival.',
      posterURL: 'https://static.posters.cz/image/750/affiches-et-posters/interstellar-ice-walk-i23290.jpg',
      rating: 4.6,
      trailerLink: 'https://youtu.be/2LqzF5WauAw',
    },
  ]);
  
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleFilterChange = ({ title, rating }) => {
    // Filter logic remains the same
  };

  const handleAddMovie = (event) => {
    event.preventDefault();
    // Rest of the code remains the same
  };

  return (
    <Router>
      <div className="app">
        <h1>Movie App</h1>
        <Routes>
          <Route path="/" element={<Filter onFilterChange={handleFilterChange} />} />
          <Route path="/" element={<MovieList movies={filteredMovies} />} />
          <Route path="/movies/:id" element={<MovieDescription movies={movies} />} />
        </Routes>
        <h2>Add a New Movie</h2>
        <form onSubmit={handleAddMovie}>
          <div>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description" />
          </div>
          <div>
            <label htmlFor="posterURL">Poster URL:</label>
            <input type="text" id="posterURL" name="posterURL" />
          </div>
          <div>
            <label htmlFor="rating">Rating:</label>
            <input type="number" id="rating" name="rating" step="0.1" />
          </div>
          <div>
            <label htmlFor="trailerLink">Trailer Link:</label>
            <input type="text" id="trailerLink" name="trailerLink" />
          </div>
          <button type="submit">Add Movie</button>
        </form>
      </div>
    </Router>
  );
};

export default App;