import React, {useState, useEffect} from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);
const MentorscheduleChart = (props) => {
    //console.log(props?.props?.props?.TotalMentorship?.Manufacturing);
  // console.log(props.props.Funding_Distributed_data)
    //console.log(props.props.props.Funding_Distrubuted_data.Akshar?.Funds);
  const data = {
    labels: ['Energy & Environment', 'Software & Data', 'Manufacturing & Industry', 'Agriculture & Food', 'Hardware & IoT', 'Edtech', 'Services', 'Ecommerce & Retail', 'Social & Leisure'],
    datasets: [
      { 
        labels: ' of Votes',
        data: [
            parseInt(props?.props?.props?.TotalMentorship?.Energy || 0),
            parseInt(props?.props?.props?.TotalMentorship?.Software||0),
            parseInt(props?.props?.props?.TotalMentorship?.Manufacturing ||  0),
            parseInt(props?.props?.props?.TotalMentorship?.Agriculture|| 0),
            parseInt(props?.props?.props?.TotalMentorship?.Hardware || 0),
            parseInt(props?.props?.props?.TotalMentorship?.Edtech || 0),
            parseInt(props?.props?.props?.TotalMentorship?.Service  || 0),
            parseInt(props?.props?.props?.TotalMentorship?.Ecommerce||  0),
            parseInt(props?.props?.props?.Social|| 0),
          
        ],
        backgroundColor: [
          'rgba(141, 182, 196)',
          'rgb(96, 164, 189)',
          'rgba(102, 131, 140)',
          'rgba(123, 160, 181)',
          'rgba(141, 196, 201)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 255, 255)',
          'rgba(255, 255, 255)',
          'rgba(255, 255, 255)',
          'rgba(255, 255, 255)',
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
      labels: {
        usePointStyle: true,
        pointStyle: 'roundRect', 
      },
    },
  };

  return <div><Pie data={data} options={options} /></div>;
};

export default MentorscheduleChart;
