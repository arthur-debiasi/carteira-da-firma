import React from 'react';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    isBtnDisabled: true,
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

  render() {
    const { email, password, isBtnDisabled } = this.state;
    return (
      <div>
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
        >
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
