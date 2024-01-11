import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { Text } from '@chakra-ui/react';

const ApexChart1 = ({ selectedTimeline }) => {
  const [options, setOptions] = useState({
    chart: {
      height: 'auto', // Set height to 'auto' for better responsiveness
      type: 'line',
      stacked: false
    },
    series: [{
      name: 'Income',
      type: 'column',
      data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
    }, {
      name: 'Cashflow',
      type: 'column',
      data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
    }, {
      name: 'Revenue',
      type: 'line',
      data: [20, 29, 37, 36, 44, 45, 50, 58]
    }],
    chart: {
      height: 350,
      type: 'line',
      stacked: false
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: [1, 1, 4]
    },
    title: {
      // text: 'XYZ - Stock Analysis (2009 - 2016)',
      align: 'left',
      offsetX: 110
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
    },
    yaxis: [
      {
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: '#008FFB'
        },
        labels: {
          formatter: function (val) {
            return val + ",000 CO2e";
          },
          style: {
            colors: '#008FFB',
          },
          
        },
        title: {
          // text: "Income (thousand crores)",
          style: {
            color: '#008FFB',
          }
        },
        tooltip: {
          enabled: true
        }
      },
      {
        seriesName: 'Income',
        opposite: true,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: '#00E396'
        },
        labels: {
          style: {
            colors: '#00E396',
          }
        },
        title: {
          // text: "Operating Cashflow (thousand crores)",
          style: {
            color: '#00E396',
          }
        },
      },
      {
        seriesName: 'Revenue',
        opposite: true,
        axisTicks: {
          show: true,
        },
        // axisBorder: {
        //   show: false,
        //   // color: '#FEB019'
        // },
        labels: {
          style: {
            colors: '#FEB019',
          },
        },
        title: {
          // text: "Revenue (thousand crores)",
          style: {
            color: '#FEB019',
          }
        }
      },
    ],
    tooltip: {
      fixed: {
        enabled: true,
        position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
        offsetY: 30,
        offsetX: 60
      },
    },
    legend: {
      horizontalAlign: 'left',
      offsetX: 40
    }
  });

  useEffect(() => {
    // Use the selectedTimeline value to update the chart data
    // You need to implement the logic to fetch the data based on the selected timeline
    // and then update the series in the options state.

    // Example:
    const fetchDataBasedOnTimeline = async () => {
      try {
        // Assuming you have a function to fetch data based on the selected timeline
        const data = await fetchData(selectedTimeline);
        setOptions({ ...options, series: data });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataBasedOnTimeline();
  }, [selectedTimeline]);

  // Placeholder function for fetching data based on the selected timeline
  const fetchData = async (selectedTimeline) => {
    // Implement your logic to fetch data based on the selected timeline
    // For now, it just returns placeholder data
    // Replace this with your actual data-fetching logic
    return [
      { name: 'Emissions 2023', data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 50, 90, 65] },
      { name: 'Emissions 2022', data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 60, 66, 50] },
      { name: 'RE/2023', data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 60, 66, 50] },
      { name: 'RE/2022', data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 60, 66, 50] }
    ];
  };

  return (
    <div style={{ width: '92%', paddingLeft: '10%', marginTop: '2%', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset'  }}>
      <Text textAlign={{ base: 'center', md: 'left' }} padding={{ base: '10px', md: '20px' }} fontSize={{ base: 'sm', md: 'lg' }}>Emission/Revenue</Text>
      <Chart options={options} series={options.series} type="bar" height='400' />
    </div>
  );
};

export default ApexChart1;
