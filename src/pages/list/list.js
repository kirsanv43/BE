import React, { Component } from 'react';
import './list.css';

import Table from './table';

import styled from 'styled-components';

const HeadControls = styled.section`
  display: flex;
  justify-content: space-between;
`;

export default class List extends Component {
  handlerCurrencyChange = e => {
    this.props.setConvertCurrecy(e.target.value);
  };

  handleOnRowClick = e => {
    this.props.history.push(`/book/${e.currentTarget.dataset.id}`);
    console.log(e.currentTarget.dataset.id);
  };

  handleOnCreateBook = e => {
    this.props.history.push(`/book/new`);
    console.log(e.currentTarget.dataset.id);
  };

  handleBookDelete = e => {
    e.stopPropagation();
    this.props.deleteBook(e.currentTarget.dataset.id)
  };


  render() {
    const { currency, loading } = this.props;
    return (
      <div className="container">
        <header>Books</header>
        <HeadControls>
          <button onClick={this.handleOnCreateBook}>Add book</button>
        </HeadControls>

        <Table
          loading={loading}
          data={this.props.data}
          currency={currency}
          onRowClick={this.handleOnRowClick}
          handleBookDelete={this.handleBookDelete}
        />
      </div>
    );
  }
}

