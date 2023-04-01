import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { MOCK_DATA_IPFS_HASHES } from '../mock-ipfs';

import '../styling/ipfs-retrieval.css';

export const IPFSHashRetrieval = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [ipfsHash, setIpfsHash] = useState('');

  const handleRetrieveClick = () => {
    setIsLoading(true);
    // Simulate an API call to retrieve the IPFS hash
    setTimeout(() => {
      const hash = MOCK_DATA_IPFS_HASHES.find(data => data.id === id)?.hash || '';
      setIpfsHash(hash);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="ipfs-hash-retrieval">
      <h1 className="title">IPFS Hash Retrieval</h1>
      <p className="description">
        Enter the ID of the model to retrieve its IPFS hash:
      </p>
      <div className="form">
        <input type="text" placeholder="Enter ID..." />
        <button
          className={`primary-btn ${isLoading ? 'disabled-btn' : ''}`}
          onClick={handleRetrieveClick}
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Retrieve IPFS Hash'}
        </button>
      </div>
      <div className={`ipfs-hash-container ${ipfsHash ? 'show' : ''}`}>
        {ipfsHash ? (
          <>
            <p className="ipfs-hash-title">IPFS Hash:</p>
            <p className="ipfs-hash-value">{ipfsHash}</p>
          </>
        ) : (
          <p className="no-hash-message">No IPFS hash found for ID {id}</p>
        )}
      </div>
    </div>
  );
};

export default IPFSHashRetrieval;
