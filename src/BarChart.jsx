import React from 'react';
import ChartComponent from './ChartComponent';

const BarChart = ({ chartData }) => {
  const data = {
    labels: chartData.months,
    datasets: [
      {
        label: 'Monthly Sales',
        data: chartData.sales,
        backgroundColor: 'rgba(107, 142, 35, 0.6)', 
        borderColor: 'rgba(107, 142, 35, 1)',       
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: { y: { startAtZero: true } },
  };

  return <ChartComponent type="bar" data={data} options={options} />;
};

export default BarChart;