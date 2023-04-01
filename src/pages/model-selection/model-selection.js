import React, { useState } from 'react';
import ModelCard from './model-card';
import './styling/modelselection.css';

const models = [
  // Add your machine learning models mock data here
];

const ModelSelection = () => {
  const [votes, setVotes] = useState({}); // Store votes for each model

  const handleVote = (modelId) => {
    setVotes({ ...votes, [modelId]: (votes[modelId] || 0) + 1 });
  };

  return (
    <div className="model-selection-container">
      {models.map((model) => (
        <ModelCard
          key={model.id}
          model={model}
          voteCount={votes[model.id] || 0}
          onVote={() => handleVote(model.id)}
        />
      ))}
    </div>
  );
};

export default ModelSelection;
