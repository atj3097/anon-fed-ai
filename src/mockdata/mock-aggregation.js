const mockAggregationData = {
    currentProgress: 45, // The current percentage of completed aggregation
    currentParty: 3, // The current party involved in the aggregation process
    totalParties: 5, // The total number of parties participating in the aggregation process
    aggregationHistory: [ // An array of historical data points for the aggregation progress
      {
        timestamp: 1618191600000, // Unix timestamp
        progress: 10, // The percentage of completed aggregation at this timestamp
      },
      {
        timestamp: 1618192200000,
        progress: 25,
      },
      {
        timestamp: 1618192800000,
        progress: 35,
      },
      {
        timestamp: 1618193400000,
        progress: 45,
      },
    ],
  };
  
  export { mockAggregationData };
  