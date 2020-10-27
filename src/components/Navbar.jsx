import React from 'react'
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/core'
import '../theme.js'

export default function Navbar () {
  return (
    <div>
      <Box bg='gray.400' w='100%' p={4} color='white'>
        <Breadcrumb fontWeight='medium' fontSize='sm' color='gray.600'>
          <BreadcrumbItem>
            <BreadcrumbLink href='#'>Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href='#'>About</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href='#'>Current</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
    </div>
  )
}
