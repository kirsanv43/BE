import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import List from './pages/list'
import Book from './pages/book';
import styled from 'styled-components';

const AppLayout = styled.div`
  width: 960px;
  margin: 30px auto auto auto;
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
