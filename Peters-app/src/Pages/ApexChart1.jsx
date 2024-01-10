import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { Text } from '@chakra-ui/react';

const ApexChart1 = () => {
  const [options, setOptions] = useState({
    series: [
      { name: 'Emissions 2023', data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 50, 90, 65] },
      { name: 'Emissions 2023', data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 60, 66, 50] },
      { name: 'RE/2023', data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 60, 66, 50] },
      { name: 'RE/2022', data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 60, 66, 50] }
    ],
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', "Oct", "Nov", 'Dec' ]
    },
    yaxis: {
      labels: {
        formatter: function (val) {
          return val + ",000 CO2e";
        }
      },
      min: 0,
      max: 100,
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        }
      }
    }
  });

  return (
    <div style={{ width: "80%", marginLeft: "15%" }}>
        <Text textAlign={"left"} padding={"10px"}>Emission/Revenue</Text>
      <Chart options={options} series={options.series} type="bar" height={400} />
      
    </div>
  );
};

export default ApexChart1;
