import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteExpense, idToEditAction } from '../redux/actions';
// import store from '../redux/store';

class Table extends Component {
  // state = { expensesCopy: [] };

  // componentDidMount() {
  //   const { expenses } = this.props;
  //   this.setState({ expensesCopy: expenses });
  //   // console.log(store.getState().wallet.expenses)
  // }

  // shouldComponentUpdate() {
  //   const { expensesCopy } = this.state;

  //   return expensesCopy !== store.getState().wallet.expenses;
  // }

  // componentDidUpdate() {
  //   const { expenses } = this.props;
  //   this.setState({ expensesCopy: expenses });
  // }

  handleDeleteBtn = (id) => {
    const { expenses, deleteExpenseDispatch } = this.props;
    const expensesFiltered = expenses.filter((e) => e.id !== id);
    deleteExpenseDispatch(expensesFiltered);
  };

  handleEditBtn = (id) => {
    const { idToEditActionDispatch } = this.props;
    idToEditActionDispatch(id);
  };

  render() {
    const { expenses } = this.props;
    return (
      <div>
        <h1>Tabela de gastos da Firma</h1>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map(({
              value,
              description,
              method,
              tag,
              currency,
              id,
              exchangeRates,
            }) => (
              <tr key={ id }>
                <td>{description}</td>
                <td>{tag}</td>
                <td>{method}</td>
                <td>{Number(value).toFixed(2)}</td>
                <td>{exchangeRates[currency].name}</td>
                <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
                <td>
                  {(Number(value) * Number(exchangeRates[currency].ask)).toFixed(2)}
                </td>
                <td>Real</td>
                <td>
                  <button
                    type="button"
                    data-testid="edit-btn"
                    onClick={ () => this.handleEditBtn(id) }
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    data-testid="delete-btn"
                    onClick={ () => this.handleDeleteBtn(id) }
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <button
          type="button"
          onClick={ () => console.log(store.getState().wallet.expenses) }
        >
          get state
        </button> */}
        {/* <button type="button" onClick={ () => this.forceUpdate() }>force update</button> */}
      </div>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.shape({
    map: PropTypes.func,
  }),
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpenseDispatch: (state) => dispatch(deleteExpense(state)),
  idToEditActionDispatch: (state) => dispatch(idToEditAction(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
