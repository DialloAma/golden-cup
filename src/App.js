import NavBar from './NavBar/NavBar';
import Client from './Components/Client'
import Product from './Components/Product'
import Enter from './Components/Enter'
import './App.css';

import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      client:[],
      product:[],
      enter:[],
    }
  }
  AddClient=(clt)=>{
    clt.id=Math.random()
    this.setState({
      client:[...this.state.client,clt]
    })
  }
  AddProduct=(prd)=>{
 prd.id=Math.random();
 this.setState({
   product: [...this.state.product,prd]
  })
  }
  AddEnter=(enter)=>{
    enter.id=Math.random()
    this.setState({
      enter: [...this.state.enter, enter]
    })

  }
  render() {
    return (
      <div>
        <NavBar/>
    <Client client={this.AddClient}/>
    <Product prod={this.AddProduct}/>
    <Enter stock={this.AddEnter}/>
      </div>
    );
  }
}

export default App;
