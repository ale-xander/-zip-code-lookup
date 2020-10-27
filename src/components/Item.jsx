import React, { Component } from 'react'
import { HStack, Box } from '@chakra-ui/core'

class Item extends Component {
  render () {
    //console.log('Item component')

    return (
      <HStack spacing={50}>
        <Box p={30} shadow='md' borderWidth='1px' flex='1' borderRadius='md'>
          {this.props.item.name}
        </Box>
        <Box p={30} shadow='md' borderWidth='1px' flex='1' borderRadius='md'>
          {this.props.item.description}
        </Box>
      </HStack>
    )
  }
}

export default Item
