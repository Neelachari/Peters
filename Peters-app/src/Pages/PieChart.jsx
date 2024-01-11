import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { Flex, Text } from '@chakra-ui/react';
import Vector from '../assets/Vector.svg';
import Three from '../assets/Three.svg';

const PieChart = () => {
  const [options, setOptions] = useState({
    series: [55, 44, 41, 17],
    chart: {
      type: 'donut',
      width: '100%', // Set chart width to 100% for better responsiveness
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: '100%', // Adjust the width for smaller screens
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
    labels: ['Adani', 'Reliance', 'Rezicure', 'Ruzzet'],
  });

  return (
    <div
      style={{
        width: '100%',
        boxShadow:
          'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset',
      }}
    >
      <Flex
        direction={{ base: 'column', md: 'row' }} // Adjust the direction based on screen size
        justifyContent="space-between"
        alignItems={{ base: 'center', md: 'flex-start' }} // Adjust alignment based on screen size
        padding={{ base: '10px', md: '20px' }}
      >
        <Text textAlign={{ base: 'center', md: 'left' }}>Emission by Supplier</Text>
        <span
          style={{
            display: 'flex',
            marginLeft: '10px', // Adjust the margin based on screen size
            alignItems: 'center',
            gap: '20px',
            border: '0.5px solid gray',
            borderRadius: '15px',
            padding: '5px',
            height: '40px',
            marginTop: { base: '10px', md: '0' }, // Adjust the margin-top based on screen size
          }}
        >
          <img style={{ marginLeft: '10px' }} src={Vector} alt="" />
          <img src={Three} alt="" />
        </span>
      </Flex>
      <Chart options={options} series={options.series} type="donut" height={400} />
    </div>
  );
};

export default PieChart;
