import React, { Component } from 'react';
import { connect } from 'react-redux';
import './list.css';
import {
  fetchCurrencies,
  nextCurrencyPage,
  prevCurrencyPage,
  setConvertCurrecy
} from '../../actions';
import Pagination from './pagination';
import { CURRENCIES_OPTIONS } from '../../constants';
import Table from './table';

class List extends Component {
  constructor(props) {
    super(props);
    if (!props.data || !props.data.length) {
      props.fetchCurrencies();
    }
  }

  handlerCurrencyChange = e => {
    this.props.setConvertCurrecy(e.target.value);
  };

  handleOnRowClick = e => {
    this.props.history.push(
      `/${e.currentTarget.dataset.id}/${this.props.currency}`
    );
    console.log(e.currentTarget.dataset.id);
  };

  render() {
    const { currency, loading } = this.props;
    return (
      <div className="container">
        <header className="header">Market</header>
        <div className="headControls">
          <select onChange={this.handlerCurrencyChange} value={currency}>
            {CURRENCIES_OPTIONS.map(currencyCode => (
              <option key={currencyCode} value={currencyCode}>
                {currencyCode}
              </option>
            ))}
          </select>
          <Pagination
            onPrev={this.props.prevCurrencyPage}
            onNext={this.props.nextCurrencyPage}
            perPage={this.props.perPage}
            page={this.props.page}
            total={this.props.total}
          />
        </div>

        <Table
          loading={loading}
          data={this.props.data}
          currency={currency}
          onRowClick={this.handleOnRowClick}
        />

        <Pagination
          onPrev={this.props.prevCurrencyPage}
          onNext={this.props.nextCurrencyPage}
          perPage={this.props.perPage}
          page={this.props.page}
          total={this.props.total}
          currency={this.props.currency}
        />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    data: state.currencies.data,
    perPage: state.currencies.perPage,
    page: state.currencies.page,
    total: state.currencies.total,
    currency: state.currencies.currency,
    loading: state.currencies.loading
  }),
  {
    fetchCurrencies,
    nextCurrencyPage,
    prevCurrencyPage,
    setConvertCurrecy
  }
)(List)
