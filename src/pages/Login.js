import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
// import { newLogin } from '../redux/actions';
// import newLogin from '../redux/actions';
import { newLogin } from '../redux/actions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    isBtnDisabled: true,
    isRedirect: false,
  };

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

  render() {
    const { email, password, isBtnDisabled, isRedirect } = this.state;
    if (isRedirect) return <Redirect to="/carteira" />;
    return (
      <>
        <h1>Carteira da Firma</h1>
        <form>
          <label htmlFor="email-input">
            E-mail:
            {' '}
            <input
              type="email"
              data-testid="email-input"
              id="email-input"
              name="email"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password-input">
            Senha:
            {' '}
            <input
              type="password"
              data-testid="password-input"
              id="password-input"
              name="password"
              value={ password }
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="button"
            disabled={ isBtnDisabled }
            onClick={ this.handleClick }
          >
            Entrar
          </button>
        </form>
      </>
    );
  }
}

Login.propTypes = {
  emailDispatch: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  emailDispatch: (state) => dispatch(newLogin(state)),
});

export default connect(null, mapDispatchToProps)(Login);
