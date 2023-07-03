import React from 'react';
import { Link, useParams } from 'react-router-dom';

const MovieDescription = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === id);

  return (
    <div className="movie-description">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <div className="trailer">
        <iframe src={movie.trailerLink} title="Movie Trailer" />
      </div>
      <Link to="/">Back</Link>
    </div>
  );
};

export default MovieDescription;
