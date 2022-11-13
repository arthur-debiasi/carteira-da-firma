import { Box, Button, FormControl, MenuItem, Select, Stack, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editExpenseAction, fetchCurrency, fetchQuotation } from '../redux/actions';

class EditWallet extends Component {
    state = {
        value: '',
        description: '',
        method: 'Dinheiro',
        tag: 'Alimentação',
        currency: 'USD',
        id: 0,
    };

    componentDidMount() {
        const { idToEdit, expenses } = this.props;
        const editingExpense = expenses[idToEdit];
        const { value, description, method, tag, currency, id } = editingExpense;
        this.setState({ value, description, method, tag, currency, id });
        const { currenciesDispatch } = this.props;
        currenciesDispatch();
    }

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    };

    handleClick = () => {
        const { editExpenseDispatch, expenses, idToEdit } = this.props;
        const { id, value, description, currency, method, tag } = this.state;
        const xabla = expenses.find((e) => e.id === idToEdit);
        const index = expenses.indexOf(xabla);

        expenses.splice(index, 1, {
            id,
            value,
            description,
            currency,
            method,
            tag,
            exchangeRates: xabla.exchangeRates,
        });
        editExpenseDispatch(expenses);
    };

    render() {
        const { value, description, method, tag, currency } = this.state;
        const { currencies } = this.props;
        return (
            <FormControl className="form-add-expense" sx={{display: 'flex', flexDirection: 'row'}}>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField type="number" id="outlined-basic" label="Valor" variant="outlined" value={value} name="value" onChange={this.handleChange} />
                </Box>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField type="text" id="outlined-basic" label="Descrição" variant="outlined" value={description} name="description" onChange={this.handleChange} />
                </Box>
                <Box sx={{ minWidth: 120 }}>
                    <Stack sx={{ m: 1, minWidth: 180 }}>
                        {/* <InputLabel id="demo-simple-select-label">Moeda</InputLabel> */}
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={currency}
                            // label="Moeda"
                            onChange={this.handleChange}
                            name="currency"
                        >
                            { currencies.map((e) => (<MenuItem key={e} value={e}>{e}</MenuItem>))}
                        </Select>
                    </Stack>
                </Box>
                <Box sx={{ minWidth: 120 }}>
                    <Stack sx={{ m: 1, minWidth: 180 }}>
                        {/* <InputLabel id="demo-simple-select-label">Método de pagamento</InputLabel> */}
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={method}
                            // label="Método de pagamento"
                            onChange={this.handleChange}
                            name="method"
                        >
                            <MenuItem value="Dinheiro">Dinheiro</MenuItem>
                            <MenuItem value="Cartão de crédito">Cartão de crédito</MenuItem>
                            <MenuItem value="Cartão de débito">Cartão de débito</MenuItem>
                        </Select>
                    </Stack>
                </Box>
                <Box sx={{ minWidth: 120 }}>
                    <Stack sx={{ m: 1, minWidth: 180 }}>
                        {/* <InputLabel id="demo-simple-select-label">Categoria</InputLabel> */}
                        <Select
                            labelId="tag-select-label"
                            id="tag-select"
                            value={tag}
                            // label="Categoria"
                            onChange={this.handleChange}
                            name="tag"
                        >
                            <MenuItem value="Alimentação">Alimentação</MenuItem>
                            <MenuItem value="Lazer">Lazer</MenuItem>
                            <MenuItem value="Trabalho">Trabalho</MenuItem>
                            <MenuItem value="Transporte">Transporte</MenuItem>
                            <MenuItem value="Saúde">Saúde</MenuItem>
                        </Select>
                    </Stack>
                </Box>
                <Button
                    variant="contained"
                    type="button"
                    onClick={this.handleClick}
                >
          Editar Despesa
                </Button>
            </FormControl>
        );
    }
}

EditWallet.propTypes = {
    currencies: PropTypes.shape({
        map: PropTypes.func,
    }),
}.isRequired;

const mapStateToProps = (state) => ({
    currencies: state.wallet.currencies,
    quotation: state.wallet.quotation,
    idToEdit: state.wallet.idToEdit,
    expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
    currenciesDispatch: () => dispatch(fetchCurrency()),
    quotationDispatch: (state) => dispatch(fetchQuotation(state)),
    editExpenseDispatch: (state) => dispatch(editExpenseAction(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditWallet);
