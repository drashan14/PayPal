import React from 'react'
import { Outlet } from "react-router-dom";
import { Grid, GridItem } from '@chakra-ui/react'
import Navbar from './Navbar'
// import Sidebar from './Sidebar'

export default function Layout() {
    
  return (
    <Grid
    templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
    gap={4}
  >
        {/* Navigation bar is here. */}
        <GridItem as="main" colSpan="5" p="40px"  bgGradient="linear(to-r, #0f0c29, #302b63, #24243e)">
          <Navbar/>
          <Outlet />
        </GridItem>
    </Grid>
  )
}
