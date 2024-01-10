// import React, { useEffect, useState } from 'react';
// import Chart from 'react-apexcharts';
// import { Text } from '@chakra-ui/react';

// const ApexChart1 = ({ selectedTimeline }) => {
//   const [options, setOptions] = useState({
//     series: [
//       { name: 'Emissions 2023', data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 50, 90, 65] },
//       { name: 'Emissions 2023', data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 60, 66, 50] },
//       { name: 'RE/2023', data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 60, 66, 50] },
//       { name: 'RE/2022', data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 60, 66, 50] }
//     ],
//     chart: {
//       type: 'bar',
//       height: 350
//     },
//     plotOptions: {
//       bar: {
//         horizontal: false,
//         columnWidth: '80%',
//         endingShape: 'rounded'
//       }
//     },
//     dataLabels: {
//       enabled: false
//     },
//     stroke: {
//       show: true,
//       width: 2,
//       colors: ['transparent']
//     },
//     xaxis: {
//       categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', "Oct", "Nov", 'Dec' ]
//     },
//     yaxis: {
//       labels: {
//         formatter: function (val) {
//           return val + ",000 CO2e";
//         }
//       },
//       min: 0,
//       max: 100,
//     },
//     fill: {
//       opacity: 1
//     },
//     tooltip: {
//       y: {
//         formatter: function (val) {
//           return "$ " + val + " thousands";
//         }
//       }
//     }
//   });

//   useEffect(() => {
    

//   }, [selectedTimeline]);

//   return (
//     <div style={{ width: "100%", paddingLeft:"15%", marginTop:"60px", boxShadow: 'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset'}}>
//         <Text textAlign={"left"} padding={"10px"}>Emission/Revenue</Text>
//       <Chart options={options} series={options.series} type="bar" height={400} />
      
//     </div>
//   );
// };

// export default ApexChart1;
// ApexChart1
import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { Text } from '@chakra-ui/react';

const ApexChart1 = ({ selectedTimeline }) => {
  const [options, setOptions] = useState({
    series: [],  // Empty array initially, it will be populated based on the selected timeline
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '80%',
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
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', "Oct", "Nov", 'Dec']
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
    <div style={{ width: "100%", paddingLeft: "15%", marginTop: "60px", boxShadow: 'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset' }}>
      <Text textAlign={"left"} padding={"10px"}>Emission/Revenue</Text>
      <Chart options={options} series={options.series} type="bar" height={400} />
    </div>
  );
};

export default ApexChart1;


