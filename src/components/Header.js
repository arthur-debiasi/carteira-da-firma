import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <h1>Carteira da Firma</h1>
        <p data-testid="email-field">email</p>
        <p data-testid="total-field">0</p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

export default Header;
