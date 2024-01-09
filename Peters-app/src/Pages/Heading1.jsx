import * as React from 'react';
import { Container, Text, SimpleGrid, Box } from '@chakra-ui/react';

// interface StatData {
//   id: number;
//   label: string;
//   score: string;
// }

const statData = [
  {
    id: 1,
    image: "",
    label: 'Current Year Emissions'
    
  },
  {
    id: 2,
    label: 'Total post views',
    image: '31,573'
  },
  {
    id: 3,
    label: 'Listings created',
    image: '5'
  }
];

const Heading1 = () => {
  return (
    <Container maxW="4xl" p={{ base: 5, md: 10 }}>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4} mt={"0px"} >
        {statData.map((data) => (
          <Box key={data.id} p={5} boxShadow="md" rounded="md" borderWidth={1}>
             <Text>{data.label}</Text>
            <Text fontWeight="extrabold" fontSize="small" color={"#000000CC"} border={"1px solid red"} height={"25px"}> 
               {data.image} 
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Heading1;