//src/components/MovieDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import VoteButton from './VoteButton'; // Import VoteButton component

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const MovieDetails = ({ movies, vote_average, updateVoteAverage }) => {
  const { id } = useParams(); // id from URL params
  const movie = movies.find(m => m._id === id); // Use _id for matching

  if (!movie) return <p>Movie not found</p>;

  return (
    <div className="movie-details">
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      {movie.poster_path ? (
        <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} />
      ) : (
        <div className="no-image">No Image Available</div>
      )}
      <p>Vote Average: {vote_average[id].toFixed(1)}</p>
      <VoteButton movieId={id} movieTitle={movie.title} onVoteChange={(change) => updateVoteAverage(id, change)} />
    </div>
  );
};

export default MovieDetails;
