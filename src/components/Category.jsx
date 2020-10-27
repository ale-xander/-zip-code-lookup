import React, { Component } from 'react';
import { Button, VStack, ButtonGroup } from "@chakra-ui/core"

class Category extends Component {
    render() {
        //console.log(this.props)
       
        return (
            <VStack align="start" spacing={4}>
            <ButtonGroup variant="outline" >
            <Button mt={3} onClick={this.props.handleClick} colorScheme="blue" size="sm"> {this.props.category.name} </Button>
            </ButtonGroup>
            </VStack>

            
        );
    }
}

export default Category;