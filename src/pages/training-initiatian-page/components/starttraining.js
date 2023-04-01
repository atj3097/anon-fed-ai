import React from 'react';

const StartTraining = ({ summary }) => {
  return (
    <div>
      <h3>Start Training</h3>
      <p>Review your settings and click the "Start Training" button to initiate the federated learning process:</p>
      <p>{summary}</p>
      <button onClick={() => { /* Add the code to start the training process */ }}>Start Training</button>
    </div>
  );
};

export default StartTraining;
