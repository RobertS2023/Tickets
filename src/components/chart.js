import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";

function ChartComponent() {
  const [chartData, setChartData] = useState({});

  const chart = (data) => {
    setChartData({
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First Dataset",
          data: data,
          fill: false,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderWidth: 1,
        },
      ],
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://example.com/api/data");
      const data = await response.json();
      chart(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const chartOptions = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    const myChart = new Chart(document.getElementById("myChart"), {
      type: "line",
      data: chartData,
      options: chartOptions,
    });

    return () => {
      myChart.destroy();
    };
  }, [chartData]);

  return <canvas id="myChart" width="400" height="400"></canvas>;
}

export default ChartComponent;
