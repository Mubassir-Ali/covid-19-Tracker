import React from "react";
import { Bar } from "react-chartjs-2";


const BarChart = () => {
  const data = {
    labels: ["Jan", "Feb", "March", "Apr", "May", "June"],
    datasets: [
      {
        label: "sales for 2020 (M)",
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: "rgba(255,99,132,0.5)",
        borderColor: "rgba(255,99,132,0.5)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,1)",
        hoverBorderColor: "rgba(255,99,132,1)",
        pointBackgroundColor: "rgba(255,206,86,0.5)",
        pointBorderColor: "rgba(255,206,86,0.5)",
      },
      {
        label: "sales for 2019 (M)",
        data: [75, 50, 65, 98, 76, 45],
        backgroundColor: "rgba(100,99,132,0.5)",
        borderColor: "rgba(100,99,132,0.5)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(100,99,132,1)",
        hoverBorderColor: "rgba(100,99,132,1)",
        pointBackgroundColor: "rgba(255,206,86,0.5)",
        pointBorderColor: "rgba(255,206,86,0.5)",
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: "Bar Chart",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            // min: 20,
            // max: 100,
            stepSize: 5
          },
        },
      ],
    },
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
