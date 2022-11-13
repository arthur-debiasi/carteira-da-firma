import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Box, TextField } from '@mui/material';
import { newLogin } from '../redux/actions';
import ResponsiveFontSizes from '../components/h3-mui';

class Login extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isBtnDisabled: true,
            isRedirect: false
        };
    }

    buttonValidation = () => {
        const { email, password } = this.state;
        const regexp = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i; // https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
        const passLength = 6;
        const validEmail = email.match(regexp);
        const validPassword = password.length >= passLength;
        if (validEmail && validPassword) {
            this.setState({ isBtnDisabled: false });
        } else {
            this.setState({ isBtnDisabled: true });
        }
    };

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value }, () => this.buttonValidation());
    };

    handleClick = () => {
        const { email } = this.state;
        const { emailDispatch } = this.props;
        emailDispatch(email);
        this.setState({ isRedirect: true });
    };

    render () {
        const {
            email, password, isBtnDisabled, isRedirect
        } = this.state;
        if (isRedirect) return <Redirect to="/carteira" />;
        return (

            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >

                {ResponsiveFontSizes('Carteira da Firma', 'h2')}
                <Box component="form" noValidate sx={{ mt: 1 }}>                    
                    <TextField
                        margin="normal"
                        required
                        id="outlined-required"
                        label="E-mail"
                        type="email"
                        data-testid="email-input"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        placeholder="Digite seu e-mail"
                        fullWidth
                    />
                    <TextField
                        margin="normal"
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        data-testid="password-input"
                        name="password"
                        placeholder="Digite sua senha"
                        value={password}
                        onChange={this.handleChange}
                        fullWidth
                    />

                    <Button
                        margin="normal" 
                        variant="contained"
                        type="button"
                        disabled={isBtnDisabled}
                        onClick={this.handleClick}
                        fullWidth
                    >
                          Entrar
                    </Button>
                </Box>
            </Box>
        );
    }
}

Login.propTypes = {
    emailDispatch: PropTypes.func
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
    emailDispatch: (state) => dispatch(newLogin(state))
});

export default connect(null, mapDispatchToProps)(Login);
