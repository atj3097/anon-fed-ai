// DownloadProgressBar.jsx
import React from 'react';

const DownloadProgressBar = ({ progress }) => {
  return (
    <div className="download-progress-bar">
      <div
        className="download-progress"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default DownloadProgressBar;
