import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import List from './pages/list'
import logo from './logo.svg';
import './App.css';
import Book from './pages/book';
import styled from 'styled-components';

const AppLayout = styled.div`
  width: 960px;
  margin: auto;
`;

class App extends Component {
  render() {
    return (
      <AppLayout>
        <Route  exact path="/" component={List} />
        <Route  exact path="/book/:id" component={Book} />
      </AppLayout>
    );
  }
}

export default App;
