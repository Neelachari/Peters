import * as React from 'react';
import { Container, Text, SimpleGrid, Box, Flex } from '@chakra-ui/react';

const Heading1 = () => {
  return (
  
    <div style={{ width: "100%", paddingLeft: "10%", paddingRight: "5%", boxSizing: "border-box" }}>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 4 }} spacing={4} mt={"20px"} >
        <Box p={5} height={{ base: "auto", sm: "20vh" }} background={"white"} borderRadius={"10px"} boxShadow='rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset' >
          <Text>Current Year Emissions </Text>
          <Text fontSize={'xx-small'}>contribution to Scope3</Text>
          <Box border={"0.5px solid red"} height={"7vh"} borderLeft={"5px solid red"} borderRadius={"10px"} boxShadow='rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset'>
            <Flex  justifyContent={"space-evenly"} padding={"5%"}>
              <Text fontSize={"medium"} fontWeight={"bold"} >39699 CO2e</Text>
              <Text color={"red"} fontSize={"smaller"}>7.06%YOY</Text>
            </Flex>
          </Box>
        </Box>


        <Box p={5} height={{ base: "auto", sm: "20vh" }} background={"white"} borderRadius={"10px"} boxShadow='rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset' >
          <Text>Revenue to emission ratio</Text>
          <Text fontSize={'xx-small'}>contribution to Scope3</Text>
          <Box border={"0.5px solid yellow"} height={"7vh"} borderLeft={"5px solid yellow"} borderRadius={"10px"} boxShadow='rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset' >
            <Flex justifyContent={"space-evenly"} padding={"5%"}>
              <Text fontSize={"medium"} fontWeight={"bold"} >136.0e</Text>
              <Text color={"red"} fontSize={"smaller"}>3.7%YOY</Text>
            </Flex>
          </Box>
        </Box>


        <Box p={5} height={{ base: "auto", sm: "20vh" }} background={"white"} borderRadius={"10px"} boxShadow='rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset' >
          <Text>Category-1</Text>
          <Text fontSize={'xx-small'}>contribution to Scope3</Text>
          <Box border={"0.5px solid #3BB85E"} height={"7vh"} borderLeft={"5px solid #3BB85E"} borderRadius={"10px"} boxShadow='rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset'>
            <Flex justifyContent={"space-evenly"} padding={"5%"}>
              <Text fontSize={"medium"} fontWeight={"bold"} >32% of Scope3</Text>
            </Flex>
          </Box>
        </Box>


        <Box p={4} height={{ base: "auto", sm: "20vh" }} mr={"6"} w={"70%"}  background={"#02AB6C"} borderRadius={"10px"} boxShadow='rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset'  >
          <Text fontSize={'large'} fontWeight={"700"} color={"white"} fontFamily={'HelveticaNeue'} fontStyle={"normal"}>Total number of reached suppliers</Text>
          <Text fontSize={'xx-large'} color={"white"} >143</Text>
        </Box>
      </SimpleGrid>
    </div>
  
  );
};

export default Heading1;

