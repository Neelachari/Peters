import React from 'react'
import PieChart from './PieChart'
import { Box, Flex, HStack, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaFileDownload } from "react-icons/fa";

export const HomePage2 = () => {
  return (
    <Flex
    direction={{ base: 'column', md: 'row' }} // Adjust the direction based on screen size
    justify="space-evenly"
    align="center"
    paddingLeft="10%" // Adjust padding based on screen size
    width="90%"
    gap="30px"
  >
      <Box width={{ base: '100%', md: '40%' }}>
        <PieChart />
      </Box>
       
           
       <Box width={{ base: '100%', md: '60%' }} border="1px solid gray" borderRadius="10px" boxShadow='rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset'  >
       <Flex padding="10px"> <Text fontSize="smaller" marginRight="5px" >Supplier-wise </Text><IoIosInformationCircleOutline style={{fontSize:"20px"}}/> <Text marginLeft="auto" marginRight="10px">Download</Text><FaFileDownload style={{ marginRight: '20px', fontSize: '20px', color: '#02AB6C' }}/></Flex>
       <TableContainer borderRadius="10px">
          <Table size="sm" marginTop="20px" padding="20px">
    <Thead >
      <Tr>
        <Th  >Month</Th>
        <Th>emissions(in CO2e)</Th>
        <Th >REVENUE/EMISSION RATIO</Th>
        <Th >YOY R/E Change</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Jan</Td>
        <Td>1790</Td>
        <Td >137.3</Td>
        <Td color={"#02AB6C"} >15%↓</Td>
      </Tr>
      <Tr>
        <Td>Feb</Td>
        <Td>2205</Td>
        <Td >99.8</Td>
        <Td color={"#02AB6C"} >3%↓</Td>
      </Tr>
      <Tr>
        <Td>Mar</Td>
        <Td>2345</Td>
        <Td >122.6</Td>
        <Td color={"#02AB6C"} >12%↓</Td>
       
      </Tr>
      <Tr>
        <Td>Apr</Td>
        <Td>1503</Td>
        <Td >130.0</Td>
        <Td color={"#02AB6C"}>16%↓</Td>
      
      </Tr>
      <Tr>
        <Td>May</Td>
        <Td>4634</Td>
        <Td >124.2</Td>
        <Td color={"red"}>-8%↑</Td>
       
      </Tr>
      <Tr>
        <Td>Jun</Td>
        <Td>4634</Td>
        <Td >124.2</Td>
        <Td color={"red"} >-13%↑</Td>
      
      </Tr>
      <Tr>
        <Td>Jul</Td>
        <Td>3487</Td>
        <Td >165.1</Td>
        <Td color={"#02AB6C"}>26%↓</Td>
      
      </Tr>
      
    </Tbody>
   
  </Table>
</TableContainer>
       </Box>
      
    </Flex>
  )
}
