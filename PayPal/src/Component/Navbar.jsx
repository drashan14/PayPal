import React from 'react';
import { Box, Flex, Text ,Link, HStack} from '@chakra-ui/react';
import {BellIcon, SettingsIcon} from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <Box  py={4} px={8}>
      <Flex justify="space-between" align="center" >
      <HStack spacing={5}>
        <Text color="white" fontSize="xl" fontWeight="bold">
          PayPal
        </Text>
        <NavLink to="/home" style={{ textDecoration: 'none' }}>
          <Text color="white" mr={4} marginLeft="50px">Home</Text>
          </NavLink>
          <NavLink to="/finance" style={{ textDecoration: 'none' }}>
          <Text color="white">Finance</Text>
          </NavLink>
          <NavLink to="/" style={{ textDecoration: 'none' }}>
          <Text color="white">Send and Request</Text>
          </NavLink>
          <NavLink to="/" style={{ textDecoration: 'none' }}>
          <Text color="white">deals</Text>
          </NavLink>
          <NavLink to="/" style={{ textDecoration: 'none' }}>
          <Text color="white">Wallet</Text>
          </NavLink>
          <NavLink to="/activity" style={{ textDecoration: 'none' }}>
          <Text color="white">Activity</Text>
          </NavLink>
          <NavLink to="/" style={{ textDecoration: 'none' }}>
          <Text color="white">Help</Text>
          </NavLink>
          </HStack>
          <HStack>
          <NavLink to="/" style={{ textDecoration: 'none' }}>
          <Text color="white"><BellIcon/></Text>
          </NavLink>
          <NavLink  to="/" style={{ textDecoration: 'none' }}>
          <Text color="white"><SettingsIcon/></Text>
          </NavLink>
          <NavLink to="/" style={{ textDecoration: 'none' }}>
          <Text color="white">LogOut</Text>
          </NavLink>
          </HStack>
          {/* Add more navigation items here */}
       
      </Flex>
    </Box>
  );
};

export default Navbar;
