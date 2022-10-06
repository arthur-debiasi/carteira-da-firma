import {
  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
} from '@mui/material';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteExpense, idToEditAction } from '../redux/actions';
import ResponsiveFontSizes from './h3-mui';

class TableDaFirma extends Component {
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
        {ResponsiveFontSizes('Tabela de gastos da Firma', 'h4')}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Descrição</TableCell>
                <TableCell align="right">Tag</TableCell>
                <TableCell align="right">Método de pagamento</TableCell>
                <TableCell align="right">Valor</TableCell>
                <TableCell align="right">Moeda</TableCell>
                <TableCell align="right">Câmbio utilizado</TableCell>
                <TableCell align="right">Valor convertido</TableCell>
                <TableCell align="right">Moeda de conversão</TableCell>
                <TableCell align="right">Editar/Excluir</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {expenses?.map(({
                value,
                description,
                method,
                tag,
                currency,
                id,
                exchangeRates,
              }) => (
                <TableRow
                  key={id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    { description }
                  </TableCell>
                  <TableCell align="right">{tag}</TableCell>
                  <TableCell align="right">{method}</TableCell>
                  <TableCell align="right">{Number(value).toFixed(2)}</TableCell>
                  <TableCell align="right">{exchangeRates[currency].name}</TableCell>
                  <TableCell align="right">{Number(exchangeRates[currency].ask).toFixed(2)}</TableCell>
                  <TableCell align="right">{(Number(value) * Number(exchangeRates[currency].ask)).toFixed(2)}</TableCell>
                  <TableCell align="right">Real</TableCell>
                  <TableCell align="right">
                    <button
                      type="button"
                      onClick={() => this.handleEditBtn(id)}
                    >
                      Editar
                    </button>
                    <button
                      type="button"
                      onClick={() => this.handleDeleteBtn(id)}
                    >
                      Excluir
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

TableDaFirma.propTypes = {
  deleteExpenseDispatch: PropTypes.func,
  expenses: PropTypes.shape({
    filter: PropTypes.func,
    map: PropTypes.func,
  }),
  idToEditActionDispatch: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpenseDispatch: (state) => dispatch(deleteExpense(state)),
  idToEditActionDispatch: (state) => dispatch(idToEditAction(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TableDaFirma);
