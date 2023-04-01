import React, { useState } from 'react';

const UploadDataForm = () => {
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // upload file somewhere and call setIsUploading(false) when finished
    setIsUploading(true);
    setProgress(0);
    setTimeout(() => {
      setIsUploading(false);
      setProgress(100);
    }, 5000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="dataset-name">Dataset Name</label>
        <input type="text" id="dataset-name" />
      </div>
      <div>
        <label htmlFor="dataset-description">Dataset Description</label>
        <input type="text" id="dataset-description" />
      </div>
      <div>
        <label htmlFor="dataset-size">Dataset Size (MB)</label>
        <input type="number" id="dataset-size" />
      </div>
      <div>
        <label htmlFor="dataset-format">Dataset Format</label>
        <select id="dataset-format">
          <option value="">Select a format</option>
          <option value="csv">CSV</option>
          <option value="json">JSON</option>
          <option value="txt">Text</option>
        </select>
      </div>
      <div>
        <label htmlFor="dataset-file">Upload Dataset</label>
        <input type="file" id="dataset-file" accept=".csv, .json, .txt" onChange={(e) => setFile(e.target.files[0])} />
        {isUploading ? (
          <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center' }}>
            <div style={{ height: '8px', borderRadius: '4px', backgroundColor: '#d7d7d7', flex: '1' }}>
              <div style={{ height: '8px', borderRadius: '4px', backgroundColor: '#004385', width: `${progress}%` }}></div>
            </div>
            <div style={{ marginLeft: '10px' }}>{progress !== 100 ? `${progress}% uploaded` : 'Finished'}</div>
          </div>
        ) : null}
      </div>
      <button className="primary-btn" disabled={!file || isUploading}>
        Submit
      </button>
    </form>
  );
};

export default UploadDataForm;
