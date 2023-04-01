// HistoricalChart.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { historicalAggregationData } from '../../../mockdata/mock-historical-aggregation';
import "../../model-aggregation/styling/model-aggregation-history.css";

const HistoricalChart = () => {
  return (
    <LineChart
      width={600}
      height={300}
      data={historicalAggregationData}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="timestamp" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="value" stroke="#004385" />
    </LineChart>
  );
};

export default HistoricalChart;
