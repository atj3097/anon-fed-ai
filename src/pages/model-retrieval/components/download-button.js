// DownloadModelButton.jsx
import React from 'react';

const DownloadModelButton = ({ onClick, disabled }) => {
  return (
    <button
      className={`primary-btn download-model-btn ${disabled ? 'disabled-btn' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      Download Model
    </button>
  );
};

export default DownloadModelButton;
