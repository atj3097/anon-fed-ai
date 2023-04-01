import React from 'react';
import './vote-button.css';

const VoteButton = ({ onVote }) => {
  return (
    <button className="primary-btn vote-btn" onClick={onVote}>
      Vote
    </button>
  );
};

export default VoteButton;
