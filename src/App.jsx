import React, { useState, useEffect } from 'react';
import BarChart from './BarChart';
import LineChart from './LineChart';
import ScatterChart from './ScatterChart';
import BubbleChart from './BubbleChart';

const App = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetch('/financial_data.json')
      .then((response) => response.json())
      .then((data) => setChartData(data))
      .catch((err) => console.error('Error loading data, please check your internet connection :', err));
  }, []);

  if (!chartData) {
    return <div>Loading, Please Wait...</div>;
  }

  return (
    <div>
      <h1>Interactive Charts with React and Chart.js</h1>
      <BarChart chartData={chartData} />
      <LineChart chartData={chartData} />
      <ScatterChart chartData={chartData} />
      <BubbleChart chartData={chartData} />
    </div>
  );
};

export default App;
