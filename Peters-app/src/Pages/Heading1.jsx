// import * as React from 'react';
// import { Container, Text, SimpleGrid, Box, Flex } from '@chakra-ui/react';


// const Heading1 = () => {
//   return (
//     <Container minW={"87.5vw"} p={{ base: 5, md: 10 }} ml={"9%"}>
//       <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4} mt={"0px"} >
//        <Box p={5} border={'1px solid red'} height={"20vh"} mr={"6"} background={"white"} borderRadius={"10px"}>
//          <Text>Current Year Emissions</Text>
//          <Text fontSize={'xx-small'}>contribution to Scope3</Text>
//          <Box border={"0.5px solid red"} height={"7vh"} borderLeft={"5px solid red"} borderRadius={"10px"}><Flex   justifyContent={"space-evenly"} padding={"5%"}> <Text fontSize={"medium"} fontWeight={"bold"} >39699 CO2e</Text> <Text color={"red"} fontSize={"smaller"}>7.06%YOY</Text></Flex></Box>
//        </Box>
//        <Box p={5} border={'1px solid red'} height={"20vh"} mr={"6"} background={"white"} borderRadius={"10px"}>
//        <Text>Revenue to emission ratio</Text>
//          <Text fontSize={'xx-small'}>contribution to Scope3</Text>
//          <Box border={"0.5px solid yellow"} height={"7vh"} borderLeft={"5px solid yellow"} borderRadius={"10px"}><Flex   justifyContent={"space-evenly"} padding={"5%"}> <Text fontSize={"medium"} fontWeight={"bold"} >136.0e</Text> <Text color={"red"} fontSize={"smaller"}>3.7%YOY</Text></Flex></Box>
//        </Box>
//        <Box p={5}  height={"20vh"} mr={"6"} background={"white"} borderRadius={"10px"}>
//        <Text>Category-1</Text>
//          <Text fontSize={'xx-small'}>contribution to Scope3</Text>
//          <Box border={"0.5px solid #3BB85E"} height={"7vh"} borderLeft={"5px solid #3BB85E"} borderRadius={"10px"}><Flex   justifyContent={"space-evenly"} padding={"5%"}> <Text fontSize={"medium"} fontWeight={"bold"} >32% of Scope3</Text> </Flex></Box>
//        </Box>
//        <Box p={5}  height={"20vh"} mr={"6"} background={"#02AB6C"} borderRadius={"10px"}>
//        <Text fontSize={'large'} fontWeight={"700"} color={"white"} fontFamily={'HelveticaNeue'} fontStyle={"normal"}>Total number of
// reached suppliers</Text>
//          <Text fontSize={'xx-large'} color={"white"} >143</Text>
//        </Box>
//       </SimpleGrid>
//     </Container>
//   );
// };

// export default Heading1;

import * as React from 'react';
import { Container, Text, SimpleGrid, Box, Flex } from '@chakra-ui/react';

const Heading1 = () => {
  return (
    <Container minW={"87.5vw"} p={{ base: 5, md: 10 }} ml={"11%"}>
      <SimpleGrid columns={4} spacing={4} mt={"0px"} >
        <Box p={5}  height={"20vh"} mr={"6"} background={"white"} borderRadius={"10px"} >
          <Text>Current Year Emissions</Text>
          <Text fontSize={'xx-small'}>contribution to Scope3</Text>
          <Box border={"0.5px solid red"} height={"7vh"} borderLeft={"5px solid red"} borderRadius={"10px"}>
            <Flex justifyContent={"space-evenly"} padding={"5%"}>
              <Text fontSize={"medium"} fontWeight={"bold"} >39699 CO2e</Text>
              <Text color={"red"} fontSize={"smaller"}>7.06%YOY</Text>
            </Flex>
          </Box>
        </Box>
        <Box p={5}  height={"20vh"} mr={"6"} background={"white"} borderRadius={"10px"}>
          <Text>Revenue to emission ratio</Text>
          <Text fontSize={'xx-small'}>contribution to Scope3</Text>
          <Box border={"0.5px solid yellow"} height={"7vh"} borderLeft={"5px solid yellow"} borderRadius={"10px"}>
            <Flex justifyContent={"space-evenly"} padding={"5%"}>
              <Text fontSize={"medium"} fontWeight={"bold"} >136.0e</Text>
              <Text color={"red"} fontSize={"smaller"}>3.7%YOY</Text>
            </Flex>
          </Box>
        </Box>
        <Box p={5} height={"20vh"} mr={"6"} background={"white"} borderRadius={"10px"}>
          <Text>Category-1</Text>
          <Text fontSize={'xx-small'}>contribution to Scope3</Text>
          <Box border={"0.5px solid #3BB85E"} height={"7vh"} borderLeft={"5px solid #3BB85E"} borderRadius={"10px"}>
            <Flex justifyContent={"space-evenly"} padding={"5%"}>
              <Text fontSize={"medium"} fontWeight={"bold"} >32% of Scope3</Text>
            </Flex>
          </Box>
        </Box>
        <Box p={5} height={"20vh"} mr={"6"} background={"#02AB6C"} borderRadius={"10px"}>
          <Text fontSize={'large'} fontWeight={"700"} color={"white"} fontFamily={'HelveticaNeue'} fontStyle={"normal"}>Total number of reached suppliers</Text>
          <Text fontSize={'xx-large'} color={"white"} >143</Text>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default Heading1;

