import React from 'react';
import ChartComponent from './ChartComponent';

const LineChart = ({ chartData }) => {
  const data = {
    labels: chartData.months,
    datasets: [
      {
        label: 'Monthly Profits',
        data: chartData.profits,
        backgroundColor: 'rgba(255, 0, 0, 0.6)', 
        borderColor: 'rgba(255, 0, 0, 1)',       
        
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: { y: { beginAtZero: true } },
  };

  return <ChartComponent type="line" data={data} options={options} />;
};

export default LineChart;