import NavBar from './NavBar/NavBar';
import Client from './Components/Client'
import ListClient from './Components/ListClient';
import Product from './Components/Product'
import ListProd from './Components/ListProd';
import Enter from './Components/Enter'


import './App.css';

import React, { Component } from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import Payed from './Components/Payed';

class App extends Component {
/*  constructor(props) {
    super(props)
    this.state = {
     // client: [],
     // product: [],
      enter: [],
      pay:[],
    }
  }
 AddClient = (clt) => {
    clt.id = Math.random()
    this.setState({
      client: [...this.state.client, clt]
    })
  }
  AddProduct = (prd) => {
    prd.id = Math.random();
    this.setState({
      product: [...this.state.product, prd]
    })
  }*/
  AddEnter = (enter) => {
    enter.id = Math.random()
    this.setState({
      enter: [...this.state.enter, enter]
    })
  }
  AddPay=(pay)=>{
    pay.id= Math.random()
     this.setState({
       pay : [...this.state.pay, pay]
     })
  }
  render() {
    return (

      <BrowserRouter>
        <div>
          <NavBar />
          <Route path="/AddClient">
          <Client />
          </Route>
          <Route path="/ListClient">
          <ListClient  />
          </Route>
          <Route path="/AddProduct">
          <Product  />
          </Route>
          <Route path="/ListProduct">
          <ListProd  />
          </Route>
          <Route path="/AddStock">
          <Enter stock={this.AddEnter} />
          </Route>
          <Route path="/AddPayement">
          <Payed pay={this.AddPay} />
          </Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
