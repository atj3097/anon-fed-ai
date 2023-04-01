import React from 'react';
import './VoteButton.css';

const VoteButton = ({ onVote }) => {
  return (
    <button className="primary-btn vote-btn" onClick={onVote}>
      Vote
    </button>
  );
};

export default VoteButton;
