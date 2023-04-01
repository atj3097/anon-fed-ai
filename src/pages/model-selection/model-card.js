import React from 'react';
import VoteButton from './components/vote-button';
import './styling/model-card.css';

const ModelCard = ({ model, voteCount, onVote }) => {
  return (
    <div className="ModelCard">
      <img src={model.imageUrl} alt={model.name} />
      <h3>{model.name}</h3>
      <p>{model.description}</p>
      <div className="vote-container">
        <VoteButton onVote={onVote} />
        <span className="vote-count">{voteCount} votes</span>
      </div>
    </div>
  );
};

export default ModelCard;
