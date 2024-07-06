//src/components/MovieList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';

const MovieList = ({ movies = [], vote_average = {} }) => {
  return (
    <div className="movie-list">
      {movies.length === 0 ? (
        <p>No movies available.</p>
      ) : (
        movies.map(movie => {
          const rating = vote_average[movie._id] !== undefined ? parseFloat(vote_average[movie._id]).toFixed(1) : 'N/A';

          return (
            <Link key={movie._id} to={`/movie/${movie._id}`}>
              <MovieCard movie={movie} vote_average={rating} />
            </Link>
          );
        })
      )}
    </div>
  );
};

export default MovieList;
