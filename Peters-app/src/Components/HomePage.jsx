import {
    Avatar,
    Box,
    Flex,
    Icon,
    Text,
    Stack,
    Image,
    Button,
    Heading,
    Drawer,
    DrawerContent,
    IconButton,
    useDisclosure,
    DrawerOverlay,
    useColorModeValue,
    Select
  } from '@chakra-ui/react';
  // Here we have used react-icons package for the icons
  import { FaBell } from 'react-icons/fa';
  import { FiMenu } from 'react-icons/fi';
  import Logo from "../assets/Logo.svg"
  import { MdEnergySavingsLeaf } from "react-icons/md"
  import { MdOutlineWaterDrop } from "react-icons/md"
  import { RiDeleteBin6Fill } from "react-icons/ri"
  import Pie from "../assets/Pie.svg"
import Heading1 from '../Pages/Heading1';
import ApexChart1 from '../Pages/ApexChart1';
import { HomePage2 } from '../Pages/HomePage2';

import { useState } from 'react';
import User from "../assets/Avatar.svg"
import { IoMdArrowDropdown } from "react-icons/io";
import { FiBell } from "react-icons/fi";

  export default function HomePage() {
    const { isOpen, onClose, onOpen } = useDisclosure();
  const [selectedTimeline, setSelectedTimeline] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const handleTimelineChange = (value) => {
    setSelectedTimeline(value);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    handleTimelineChange(value);
  };

  
    return (
      <Box as="section" bg={useColorModeValue('gray.50', 'gray.700')} minH="auto" w={"93.5vw"} mb={"0px"}   marginTop={"0px"}  >
        <SidebarContent display={{ base: 'none', md: 'unset',  }} />
        <Drawer isOpen={isOpen} onClose={onClose} placement="left" >
          <DrawerOverlay />
          <DrawerContent>
            <SidebarContent w="full" borderRight="none"  />
          </DrawerContent>
          
        </Drawer>
        <Flex
            as="header"
            align="center"
            justifyContent={{ base: 'space-between', md: 'flex-end' }}
            w="full"
            px="0"
            borderBottomWidth="1px"
            borderColor={useColorModeValue('white', 'gray.700')}
            bg={useColorModeValue('gray.50', 'gray.700')}
            // boxShadow="sm"
            h="14"
            mt={"0px"}
          
            
          >
            <img src={Pie} alt="" />
            <h6 style={{textAlign:"left", paddingRight:"70%", marginLeft:"10px"}}>Category-1</h6>
            <IconButton
              aria-label="Menu"
              display={{ base: 'inline-flex', md: 'none' }}
              onClick={onOpen}
              icon={<FiMenu />}
              size="md"
            />
  
            <Flex align="center">
            <Avatar
                
                size="sm"
                name="user"
                src={User}
                cursor="pointer"
              />
              <IoMdArrowDropdown style={{fontSize:"40px"}}/>
              <FiBell  style={{fontSize:"25px", border:"1px solid white", background:"white"}} />
              
            </Flex>
          </Flex>
          <Box style={{ width: "20%", marginLeft: "80%" }}>
         <Select
          color={"#02AB6C"}
          fontSize={"small"}
          onChange={handleChange}
          value={selectedOption}
          placeholder='Show Timeline: Jan’22 - Dec’23'
        >
          <option value='data'>Show Timeline: Jan’20 - Dec’21</option>
          <option value='data'>Show Timeline: Jan’21 - Dec’22</option>
          <option value='data'>Show Timeline: Jan’22 - Dec’23</option>
        </Select>
    </Box>
          {/* <Box mt={"20px"}>
              <ShowTime onChange={handleTimelineChange} />
           </Box> */}

        <Box  transition=".3s ease"  mt={"10px"} >
            
        <Heading1/>
  
         
        </Box>
       
        <Box>
          {/* <Text>Emission/Revenue</Text> */}
          <ApexChart1 selectedTimeline={selectedTimeline} />
        </Box>
        <Box  transition=".3s ease"  mt={"30px"} >
            
           <HomePage2/>
       
              
             </Box>
      </Box>
    );
  }
  
  const SidebarContent = ({ ...props }) => (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg={useColorModeValue('#181818', 'gray.800')}
      borderColor={useColorModeValue('inherit', 'gray.700')}
      borderRightWidth="1px"
      w="40"
      // border="3px solid red"
      {...props}
    >
      <Flex px="4" py="5" align="center">
       
        <Text
          fontSize="2xl"
          ml="2"
          color={useColorModeValue('brand.500', 'white')}
          fontWeight="semibold"
        >
         <img src={Logo} alt="" />
        </Text>
      </Flex>
      <Flex direction="column" as="nav" fontSize="x-small" color="gray.600" aria-label="Main Navigation" >
        <h6 style={{marginTop:"20px", textAlign:"left", fontSize:"small"}}>DATA-IN</h6>
        <NavItem icon={MdEnergySavingsLeaf}> <Select placeholder='Energy' border={"#181818"} color={"white"} >
  <option  style={{background:"#181818", width:"200px"}} value='option1'>Category 1</option>
  <option  style={{background:"#181818", width:"200px"}} value='option2'>Category 4</option>
  <option  style={{background:"#181818", width:"200px"}} value='option3'>Category 6</option>
  <option  style={{background:"#181818", width:"200px"}} value='option3'>Category 7</option>
  <option  style={{background:"#181818", width:"200px"}} value='option3'>Category 9</option>
</Select> </NavItem>
        <NavItem icon={MdOutlineWaterDrop}> <Select placeholder='Water and Effluents' border={"#181818"} color={"white"} >
  <option style={{background:"#181818", width:"200px"}} value='option1'>Category 1</option>
  <option style={{background:"#181818", width:"200px"}} value='option2'>Category 4</option>
  <option style={{background:"#181818", width:"200px"}} value='option3'>Category 6</option>
  <option style={{background:"#181818", width:"200px"}} value='option3'>Category 7</option>
  <option style={{background:"#181818", width:"200px"}} value='option3'>Category 9</option>
</Select>  </NavItem>
        <h6 style={{marginTop:"20px", textAlign:"left"}}>Analyze</h6>
        <NavItem icon={MdEnergySavingsLeaf} ><Text color={"white"}>Energy</Text> </NavItem>
        <NavItem icon={RiDeleteBin6Fill} color="white" ><Text color={"white"}>Waste</Text> <Text color={"#02AB6C"} marginLeft={"10px"}>(βeta)</Text></NavItem>
      </Flex>
      <Flex direction="column" as="nav" fontSize="small" color="gray.600" aria-label="Main Navigation" mt={"15%"} >
      <Button background={"#02AB6C"}  w={"70%"} ml={"10%"} fontSize={"smaller"} color={"white"} >
      Open Help Centre
  </Button>
  
  
      </Flex>
    </Box>
  );
  
  const NavItem = (props) => {
    const color = useColorModeValue('gray.600', 'gray.300');
  
    const { icon, children } = props;
    return (
      <Flex
        align="center"
        px="4"
        py="3"
        cursor="pointer"
        role="group"
        fontWeight="semibold"
        transition=".15s ease"
        color={useColorModeValue('white', 'gray.400')}
        _hover={{
          bg: useColorModeValue('gray', 'gray.900'),
          color: useColorModeValue('gray.900', 'gray.200')
        }}
      >
        {icon && (
          <Icon
            mx="2"
            boxSize="4"
            _groupHover={{
              color: color
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    );
  };