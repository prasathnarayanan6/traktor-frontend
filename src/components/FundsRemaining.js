// DonutChart.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const FundsRemaining = (props) => {
  console.log(props)
  const data = {
    labels: ['Funding Distributed', 'Funding Remaining'],
    datasets: [
      {
        label: 'My Donut Chart',
        data: [
          parseInt(props?.props?.props?.Funding_Distrubuted_data?.Total_funding_used?.Total_funding_distributed|| props?.props?.Funding_Distrubuted_data?.Total_funding_used?.Total_funding_distributed || 0),
          parseInt(props?.props?.props?.Funding_Distrubuted_data?.Total_funding_used?.Total_funding_remaining|| props?.props?.Funding_Distrubuted_data?.Total_funding_used?.Total_funding_remaining || 0)
        ],
        backgroundColor: [
          'rgba(141, 182, 196)',
          'rgb(96, 164, 189)',
        ],
        borderColor: [
          'rgba(255, 255, 255)',
          'rgba(255, 255, 255)',
        ],
        borderWidth: 0.2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed !== null) {
              label += `${context.parsed}`;
            }
            return label;
          },
        },
      },
    },
  };
  return(
    <div>
      <Doughnut data={data} options={options} />
    </div>
  );
};
export default FundsRemaining;