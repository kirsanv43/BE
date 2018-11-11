import React, { Component } from 'react';
import Table from './table';
import { HeadControls } from './styledTegs';
import { Header } from '../../components';


export default class List extends Component {
  handlerCurrencyChange = e => {
    this.props.setConvertCurrecy(e.target.value);
  };

  handleOnRowClick = e => {
    this.props.history.push(`/book/${e.currentTarget.dataset.id}`);
  };

  handleOnCreateBook = e => {
    this.props.history.push(`/book/new`);
  };

  handleBookDelete = e => {
    e.stopPropagation();
    this.props.deleteBook(e.currentTarget.dataset.id)
  };
  handleSort = e => {
    const name = e.currentTarget.dataset.name
    this.props.sort({
      name
    })
  };
  
  render() {
    const { currency, loading, method, sortField } = this.props;
    return (
      <div className="container">
        <Header>Books</Header>
        <HeadControls>
          <button onClick={this.handleOnCreateBook}>Add book</button>
        </HeadControls>

        <Table
          loading={loading}
          data={this.props.data}
          currency={currency}
          handleRowClick={this.handleOnRowClick}
          handleBookDelete={this.handleBookDelete}
          handleSort={this.handleSort}
          method={method}
          sortField={sortField}
        />
      </div>
    );
  }
}

