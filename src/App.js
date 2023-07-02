import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description:
        'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
      posterURL:
        'https://th.bing.com/th/id/R.d77a229b5e52d0707f59553625493fb0?rik=qvZBh9tZLPg4rQ&riu=http%3a%2f%2f2.bp.blogspot.com%2f-xFYEth1IzNg%2fT7aRDDExXfI%2fAAAAAAAABxs%2fUUKfDL0Tgw0%2fs1600%2finception-poster.jpg&ehk=i6gnJR4AT5XBOzLognKiXd5bzm%2fG1qNee%2bzl%2fpeo8z4%3d&risl=&pid=ImgRaw&r=0',
      rating: 4.7,
    },
    {
      title: 'Interstellar',
      description:
        'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
      posterURL:
        'https://th.bing.com/th/id/R.7964ab0abf8e3cf6faa309e0acdfd5e5?rik=cDh2Gwileg8Tug&pid=ImgRaw&r=0',
      rating: 4.9,
    },
    // Add more movies here
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleFilterChange = ({ title, rating }) => {
    const filtered = movies.filter((movie) => {
      const lowerCaseTitle = movie.title.toLowerCase();
      const lowerCaseFilterTitle = title ? title.toLowerCase() : '';
      const filterRating = rating ? parseFloat(rating) : 0;
  
      const titleMatch = lowerCaseTitle.includes(lowerCaseFilterTitle);
      const ratingMatch = !rating || movie.rating >= filterRating;
  
      return titleMatch && ratingMatch;
    });
  
    setFilteredMovies(filtered);
  };
  

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    setFilteredMovies([...filteredMovies, newMovie]);
  };

  return (
    <div className="app">
      <h1>Movie App</h1>
      <Filter onFilterChange={handleFilterChange} />
      <MovieList movies={filteredMovies} />
      <h2>Add a New Movie</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const title = e.target.title.value;
          const description = e.target.description.value;
          const posterURL = e.target.posterURL.value;
          const rating = parseFloat(e.target.rating.value);

          const newMovie = {
            title,
            description,
            posterURL,
            rating,
          };

          handleAddMovie(newMovie);

          e.target.reset();
        }}
      >
        <input type="text" name="title" placeholder="Title" required />
        <textarea name="description" placeholder="Description" required />
        <input
          type="url"
          name="posterURL"
          placeholder="Poster URL"
          required
        />
        <input
          type="number"
          name="rating"
          placeholder="Rating"
          step="0.1"
          min="0"
          max="5"
          required
        />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default App;

