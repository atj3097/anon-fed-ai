// ProgressBar.js
import React from 'react';
import "../../model-aggregation/styling/model-aggregation-history.css";

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
