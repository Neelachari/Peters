import React, { useEffect } from 'react';
import Chart from 'react-apexcharts';

const PieChart = () => {
  useEffect(() => {
    const options = {
      series: [44, 55, 41, 17, 15],
      chart: {
        type: 'donut',
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    };

    // Render the chart using the Chart component
    const chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();

    // Clean up chart instance on component unmount
    return () => {
      chart.destroy();
    };
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  return (
    <div id="chart"style={{ width: "40%", marginLeft: "15%",  border:"1px solid red"}}>
      {/* Chart will be rendered here */}
    </div>
  );
};

export default PieChart;
