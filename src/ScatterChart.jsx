import React from 'react';
import ChartComponent from './ChartComponent';

const ScatterChart = ({ chartData }) => {
  const data = {
    datasets: [
      {
        label: 'Expenses vs Profits',
        data: chartData.expenses.map((expense, index) => ({
          x: expense,
          y: chartData.profits[index],
        })),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: { title: { display: true, text: 'Expenses' } },
      y: { title: { display: true, text: 'Profits' } },
    },
  };

  return <ChartComponent type="scatter" data={data} options={options} />;
};

export default ScatterChart;