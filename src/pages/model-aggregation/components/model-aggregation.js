// ModelAggregationHistory.js
import React from 'react';
import ProgressBar from './progressbar';
import StatusText from './StatusText';
import HistoricalChart from './HistoricalChart';
import './ModelAggregationHistory.css';

const ModelAggregationHistory = () => {
  const progress = 75;
  const status = 'Aggregating model data...';

  return (
    <div className="model-aggregation-history-container">
      <h2>Model Aggregation History</h2>
      <ProgressBar progress={progress} />
      <StatusText status={status} />
      <HistoricalChart />
    </div>
  );
};

export default ModelAggregationHistory;
