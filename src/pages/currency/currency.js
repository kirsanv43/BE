import React, { Component } from 'react';
import { connect } from 'react-redux';
import Details from './details';
import MainInfo from './mainInfo';
import { fetchCurrency, resetCurrencyData } from '../../actions';
import Price from './price';

class Currency extends Component {
  constructor(props) {
    super(props);
    const { currency, id } = props.match.params;
    this.props.fetchCurrency({ id, currency });
  }

  componentWillUnmount() {
    this.props.resetCurrencyData();
  }

  render() {
    const { currency } = this.props;
    return (
      <div>
        <div>
          <MainInfo currency={currency} />
          <Price currency={currency} />
        </div>
        <Details currency={currency} />
      </div>
    );
  }
}

export default connect(
  state => ({
    currency: state.currency.data
  }),
  {
    fetchCurrency,
    resetCurrencyData
  }
)(Currency);
