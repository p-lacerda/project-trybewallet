import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div className="Login">
        <section className="login-inputs">
          <input
            type="email"
            name="email"
            placeholder="Email"
            data-testid="email-input"
          />
          <input
            type="password"
            name="password"
            placeholder="Senha"
            data-testid="password-input"
          />
        </section>
        <div>
          <button type="button">Entrar</button>
        </div>
      </div>
    );
  }
}

export default Login;
