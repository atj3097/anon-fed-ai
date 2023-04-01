// HashDisplay.jsx
import React from 'react';

const HashDisplay = ({ hash }) => {
  return (
    <div className="hash-display">
      <p>IPFS Hash:</p>
      <pre>{hash}</pre>
    </div>
  );
};

export default HashDisplay;
