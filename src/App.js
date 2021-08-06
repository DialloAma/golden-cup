import NavBar from './NavBar/NavBar';
import Client from './Components/Client'
import Product from './Components/Product'
import Enter from './Components/Enter'
import './App.css';

import React, { Component } from 'react';
import { BrowserRouter,Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      client: [],
      product: [],
      enter: [],
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
  }
  AddEnter = (enter) => {
    enter.id = Math.random()
    this.setState({
      enter: [...this.state.enter, enter]
    })

  }
  render() {
    return (

      <BrowserRouter>
        <div>
          <NavBar />
          <Route path="/AddClient">
          <Client client={this.AddClient} />
          </Route>
          <Route path="/AddProduct">
          <Product prod={this.AddProduct} />
          </Route>
          <Route path="/AddStock">
          <Enter stock={this.AddEnter} />
          </Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
