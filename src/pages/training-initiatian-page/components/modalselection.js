import React from 'react';

const ModelSelection = ({ winningModel }) => {
  return (
    <div>
      <h3>Model Selection</h3>
      <p>Select the machine learning model to be used for training:</p>
      <p>Winning model: {winningModel}</p>
    </div>
  );
};

export default ModelSelection;
