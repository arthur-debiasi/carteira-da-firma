import React, { Component } from 'react';

class WalletForm extends Component {
  state = {
    value: '',
    description: '',
    payment: 'cash',
    tag: 'food',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { value, description, payment, tag } = this.state;
    return (
      <form>
        <label htmlFor="value-input">
          Valor($):
          {' '}
          <input
            type="text"
            data-testid="value-input"
            id="value-input"
            name="value"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description-input">
          Descrição:
          {' '}
          <textarea
            data-testid="description-input"
            id="description-input"
            name="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="method-input">
          Método de pagamento:
          {' '}
          <select
            name="payment"
            value={ payment }
            data-testid="method-input"
            id="method-input"
            onChange={ this.handleChange }
          >
            <option value="cash">Dinheiro</option>
            <option value="credit">Cartão de crédito</option>
            <option value="debit">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag-input">
          Tipo de gasto:
          {' '}
          <select
            name="tag"
            value={ tag }
            data-testid="tag-input"
            id="tag-input"
            onChange={ this.handleChange }
          >
            <option value="food">Alimentação</option>
            <option value="fun">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default WalletForm;
