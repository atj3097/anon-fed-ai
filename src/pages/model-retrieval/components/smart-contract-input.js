// SmartContractInput.jsx
import React from 'react';

const SmartContractInput = ({ smartContractAddress, setSmartContractAddress }) => {
  return (
    <div className="smart-contract-input">
      <label htmlFor="smartContractAddress">Smart Contract Address:</label>
      <input
        id="smartContractAddress"
        type="text"
        value={smartContractAddress}
        onChange={(e) => setSmartContractAddress(e.target.value)}
      />
    </div>
  );
};

export default SmartContractInput;
