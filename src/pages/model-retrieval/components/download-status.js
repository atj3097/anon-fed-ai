// DownloadStatus.jsx
import React from 'react';

const DownloadStatus = ({ status }) => {
  return (
    <div className="download-status">
      <p>{status}</p>
    </div>
  );
};

export default DownloadStatus;
