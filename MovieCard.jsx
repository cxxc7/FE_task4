//src/components/MovieCard.jsx
import React, { useState } from 'react';
import VoteButton from './VoteButton';
import Notification from './Notification';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const MovieCard = ({ movie, vote_average }) => {
  const [vote, setVote] = useState(vote_average);

  const handleVoteChange = (change) => {
    setVote((prev) => Math.min(10, Math.max(0, (prev + change).toFixed(1))));
  };

  return (
    <div className="movie-card">
      {movie.poster_path ? (
        <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} />
      ) : (
        <div className="no-image">No Image Available</div>
      )}
      <h2>{movie.title}</h2>
      <p>Vote Average: {vote}</p>
      <VoteButton movieId={movie._id} onVoteChange={handleVoteChange} />
      <Notification />
    </div>
  );
};

export default MovieCard;
