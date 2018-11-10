import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import List from './pages/list/list'
import logo from './logo.svg';
import './App.css';
import {Currency} from './pages/currency';
console.log(Currency)
class App extends Component {
  render() {
    return (
      <div className="App">
        <Route  exact path="/" component={List} />
        <Route  exact path="/:id/:currency" component={Currency} />
      </div>
    );
  }
}

export default App;
