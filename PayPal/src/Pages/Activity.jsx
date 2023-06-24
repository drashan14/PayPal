import React, { useState } from 'react';
import { Avatar, Box, Flex, Heading, Input, SimpleGrid, Text,HStack } from '@chakra-ui/react';
import {
    Tag,
    TagLabel,
    TagLeftIcon,
    TagRightIcon,
    TagCloseButton,
  } from '@chakra-ui/react'
  import { AddIcon } from '@chakra-ui/icons';
const products = [
  { name: 'Product 1', price: '$10' },
  { name: 'Product 2', price: '$20' },
  { name: 'Product 3', price: '$30' },
  { name: 'Product 3', price: '$30' },
  { name: 'Product 3', price: '$30' },
  { name: 'Product 3', price: '$30' },
  { name: 'Product 3', price: '$30' },
  { name: 'Product 3', price: '$30' },
  { name: 'Product 3', price: '$30' }
 
  // Add more products here
];

const Activity = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box p={4}>
      <Flex justify="center" mb={10}>
        <Input
          placeholder="Search products"
          value={searchTerm}
          onChange={handleSearchChange}
          maxW="md"
        />
      </Flex>
      
        <Heading size="30px" color="white" mb={3} mr="550px" align="center" >Filter By</Heading>
        <HStack spacing={4} justify="center" mr="350px">
  {['sm', 'md', 'lg'].map((size) => (
    <Tag size={size} key={size} variant='subtle' colorScheme='cyan'>
      <TagLeftIcon boxSize='12px' as={AddIcon} />
      <TagLabel>Cyan</TagLabel>
    </Tag>
  ))}
   
</HStack>
<Heading size="30px" color="white" mb={3} mt={10} mr="550px" align="center" >Filter By <Text fontSize={15} mt="5"> This week</Text></Heading>
      <SimpleGrid columns={1} marginLeft={400} spacing={4}  marginTop={10}>
        {filteredProducts.map((product, index) => (
          <Box key={index} p={2} bg="gray.100" borderRadius="md" width="700px" height="50px">
            <Flex gap="20px">
            <Avatar size="sm" ml="10px" src="../assets/react.svg">
                </Avatar>

            
            <Text fontWeight="bold" mb={4} marginBottom="5px">
              {product.name}
            
              <font style={{marginLeft:"20px"}}>{product.price}</font> </Text>
              </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Activity;
