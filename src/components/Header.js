import { Stack } from '@mui/system';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ResponsiveFontSizes from './h3-mui';
import logo from '../logo/logo.png';

class Header extends Component {
    render () {
        const { email, expenses } = this.props;
        const totalField = expenses.reduce((acc, cur) => {
            const rate = Number(cur.exchangeRates[cur.currency].ask);
            return acc + Number(cur.value) * rate;
        }, 0).toFixed(2);
        return (

            <Stack
                direction="row"
                justifyContent="space-evenly"
                alignItems='center'
                spacing={8}
                sx={{
                    width: 100/100,
                    margin:'auto',
                }}
            >
                <img src={logo} alt='logo' width='150px' height='100px'></img>
                {ResponsiveFontSizes('Carteira da Firma', 'h2')}
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                >
                    <div data-testid="email-field">{ ResponsiveFontSizes(email, 'h6') }</div>
                    { ResponsiveFontSizes(`R$ ${totalField}`, 'h4')}
                </Stack>
            </Stack>
        );
    }
}

Header.propTypes = {
    email: PropTypes.string
}.isRequired;

const mapStateToProps = (state) => ({
    email: state.user.email,
    expenses: state.wallet.expenses
});

export default connect(mapStateToProps)(Header);
