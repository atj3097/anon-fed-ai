// DownloadSuccessMessage.jsx
import React from 'react';

const DownloadSuccessMessage = ({ onAccessFile }) => {
  return (
    <div className="download-success-message">
      <p>Model downloaded successfully! Click the button below to access the file.</p>
      <button className="primary-btn" onClick={onAccessFile}>
        Access Downloaded File
      </button>
    </div>
  );
};

export default DownloadSuccessMessage;
