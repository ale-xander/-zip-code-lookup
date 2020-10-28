import React, { Component } from 'react';
import Categories from './components/Categories'
import Navbar from "./components/Navbar";
import Items from './components/Items'

import { CSSReset, SimpleGrid} from '@chakra-ui/core';
import './theme.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      items: [], 
      flag: true
    }
  }


  handleClick = (e) => {
    e.preventDefault();
    //console.log(e.target.outerText);
    
    let param = this.dictionary(e.target.outerText)
    this.fetchItems(param)
    console.log(`param is ${param}, click on ${e.target.outerText}`)
  }

  dictionary = (str) =>{
    let {categories} = this.state
    let param;
    categories.find(function (el) {
      // console.log(el.name,'-->', el.short_name,'-->' ,str)
      if( el.name === str) param = el.short_name
    })
    return param;
  }


  componentDidMount() {
    this.fetchCategories();
    
  }

  fetchItems = async (p) => {
    const parameter = p
    const items_api = `https://stream-restaurant-menu-svc.herokuapp.com/item/?category=${parameter}`
    const response = await fetch(
      items_api,
      console.log(`******fetch made to ${items_api}`)
    )
    const body = await response.json();
    this.setState({
      items: body
    })
    return body
  }

  fetchCategories = async () => {
    //console.log('fetching the categories');
    const category_api = 'https://stream-restaurant-menu-svc.herokuapp.com/category';
    const response = await fetch(
      category_api,
      //console.log(`******fetch made to ${category_api}`)
    )
    const body = await response.json();
    this.setState({
      categories: body
    })
    return body;
  }
  
  render() {
    let {categories, items, flag} = this.state
    //console.log(categories)
    return (
      <div className="App">
        <CSSReset />
        <Navbar />
        <SimpleGrid templateColumns="1fr 4fr">
          <Categories 
            categories={categories} 
            items={items} 
            flag={flag} 
            handleClick={this.handleClick} />
          <Items items={items}  />
        </SimpleGrid>
      </div>
    );
  }
}

export default App;

//https://anatesan-stream.github.io/angularJS-restaurant-menu-app/module4_solution/#!/categories
//http://stream-restaurant-menu-svc.herokuapp.com/item
//http://stream-restaurant-menu-svc.herokuapp.com/category