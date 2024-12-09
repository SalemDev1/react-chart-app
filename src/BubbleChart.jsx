import React from 'react';
import ChartComponent from './ChartComponent';

const BubbleChart = ({ chartData }) => {
  const data = {
    datasets: [
      {
        label: 'Sales, Expenses, and Profits',
        data: chartData.sales.map((sale, info) => ({
          x: chartData.expenses[info],
          y: chartData.profits[info],
          r: sale * 0.1 //increased value instead of divding it to make it bigger to see)
          ,
        })),
        backgroundColor: 'rgba(255, 255, 0, 0.6)', 
        borderColor: 'rgba(255, 255, 0, 1)',       
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

  return <ChartComponent type="bubble" data={data} options={options} />;
  
};

export default BubbleChart;