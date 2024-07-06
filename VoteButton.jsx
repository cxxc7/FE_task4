//src/components/VoteButton.jsx
import React, { useContext } from 'react';
import { NotificationContext } from '../context/NotificationContext';

const VoteButton = ({ movieTitle, onVoteChange }) => {
  const { addNotification } = useContext(NotificationContext);

  const handleVoteChange = (change) => {
    onVoteChange(change);
    addNotification(`Rating ${change > 0 ? 'increased' : 'decreased'} for the movie "${movieTitle}"`);
  };

  return (
    <div>
      <button onClick={() => handleVoteChange(0.1)}>Increase Vote</button>
      <button onClick={() => handleVoteChange(-0.1)}>Decrease Vote</button>
    </div>
  );
};

export default VoteButton;
