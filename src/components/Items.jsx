import React, { Component } from 'react'
import { Grid } from "@chakra-ui/core"
import Item from './Item'

export default class Items extends Component {
    
    render() {
        //console.log(this.props.items)
        return (
            <Grid autoColumns>
                {
                    this.props.items.map((items, id) => (
                        <Item item={items} key={id}/>
                    ))
                }
            </Grid>
        )
    }
}
