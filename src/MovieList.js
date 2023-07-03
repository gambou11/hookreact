import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div className="movie-card" key={movie.id}>
          <img src={movie.posterURL} alt={movie.title} />
          <h2>{movie.title}</h2>
          <p>Rating: {movie.rating}</p>
          <Link to={`/movies/${movie.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;