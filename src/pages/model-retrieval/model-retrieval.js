import React from 'react';
import { IPFSHashRetrieval } from './IPFSHashRetrieval';
import { DownloadModel } from './DownloadModel';
import './ModelRetrieval.css';

const ModelRetrieval = () => {
  return (
    <div className="model-retrieval-container">
      <h2>Model Retrieval</h2>
      <p>Retrieve the global model using the IPFS hash from the smart contract.</p>
      <IPFSHashRetrieval />
      <DownloadModel />
    </div>
  );
};

export default ModelRetrieval;
