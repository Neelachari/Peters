import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { Flex, Text } from '@chakra-ui/react';
import Vector from "../assets/Vector.svg"
import Three from "../assets/Three.svg"

const PieChart = () => {
  const [options, setOptions] = useState({
    series: [55, 44, 41, 17,],
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
    }],
    labels: ['Adani', 'Reliance', 'Rezicure', 'Ruzzet',  ]
  });

  return (
    <div style={{ width: "100%", boxShadow: 'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset'}}>
     <Flex><Text textAlign={"left"} padding={"10px"}>Emission by Supplier</Text > <span style={{display:"flex", marginLeft:"40%", alignItems:"center", gap:"20px", border:"0.5px solid gray", borderRadius:"15px", padding:"5px", height:"40px", marginTop:"10px"}}><img style={{ marginLeft:"10px"}} src={Vector} alt="" /> <img src={Three} alt="" /></span></Flex> 
      <Chart options={options} series={options.series} type="donut" height={400} />
    </div>
  );
};

export default PieChart;
