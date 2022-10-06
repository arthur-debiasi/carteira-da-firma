import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ResponsiveFontSizes from './h3-mui';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    return (
      <div>
        {ResponsiveFontSizes('Carteira da Firma', 'h2')}
        <p data-testid="email-field">{ ResponsiveFontSizes(email, 'h6') }</p>
        <p data-testid="total-field">
          { expenses.reduce((acc, cur) => {
            const rate = Number(cur.exchangeRates[cur.currency].ask);
            return acc + Number(cur.value) * rate;
          }, 0).toFixed(2)}
        </p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
