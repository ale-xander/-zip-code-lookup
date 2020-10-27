import React, { Component } from 'react';
import Category from './Category'

class Categories extends Component {
    
    render() {
        //console.log(`categories component loaded`)
        //console.log(this.props.flag)

        return (
            <div className="categories">
                <ul>
                {this.props.categories.map((categories, id, flag, handleClick)=> (
                    <Category 
                        category={categories} 
                        key={id} 
                        flag={flag} 
                        handleClick={this.props.handleClick}/>
                ))} 
                </ul>
         </div>
        );
    }
}

export default Categories;