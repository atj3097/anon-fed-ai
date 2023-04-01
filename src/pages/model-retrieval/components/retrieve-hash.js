// RetrieveHashButton.jsx
import React from 'react';

const RetrieveHashButton = ({ onClick }) => {
  return (
    <button className="primary-btn retrieve-hash-btn" onClick={onClick}>
      Retrieve IPFS Hash
    </button>
  );
};

export default RetrieveHashButton;
