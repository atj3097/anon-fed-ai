import React, { useState } from 'react';
import { MOCK_DATA_MODELS } from '../../../mockdata/mock-models';
import '../styling/download-model.css';

export const DownloadModel = () => {
  const [selectedModel, setSelectedModel] = useState(null);

  const handleDownloadClick = () => {
    // download selected model
    console.log(`Downloading model: ${selectedModel.name}`);
  };

  return (
    <div className="download-model-container">
      <h3>Select a model to download:</h3>
      <ul>
        {MOCK_DATA_MODELS.map(model => (
          <li
            key={model.id}
            className={selectedModel?.id === model.id ? 'selected' : ''}
            onClick={() => setSelectedModel(model)}
          >
            {model.name}
          </li>
        ))}
      </ul>
      <button
        className={`primary-btn ${!selectedModel ? 'disabled-btn' : ''}`}
        onClick={handleDownloadClick}
        disabled={!selectedModel}
      >
        {`Download ${selectedModel?.name}`}
      </button>
    </div>
  );
};

export default DownloadModel;
