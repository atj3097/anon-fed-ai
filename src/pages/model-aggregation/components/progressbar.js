// ProgressBar.js
import React from 'react';
import './ModelAggregationHistory.css';

const ProgressBar = ({ progress }) => {
  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar"
        style={{ width: `${progress}%`, backgroundColor: '#004385' }}
      ></div>
    </div>
  );
};

export default ProgressBar;
