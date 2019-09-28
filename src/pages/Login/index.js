import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Logo from '../../assets/logo.png';
import api from "../../services/api";
import { login } from "../../services/auth";

import { Form, Container } from "./styles";

class Login extends Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  handleSignIn = async e => {
    e.preventDefault();
    const { email, password } = this.state;

    if (!email || !password) {
      this.setState({ error: "Preencha e-mail e senha para acessar." });
    } else {
      try {
        // const response = await api.post("/sessions", { email, password });
        login('sasasas');
        this.props.history.push("/dash");
      } catch (err) {
        this.setState({
          error:
            "Houve um problema com o login, verifique suas credenciais. T.T"
        });
      }
    }
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSignIn}>
          <img src={Logo} alt="Airbnb logo" />
          <input
            type="email"
            placeholder="Endereço de e-mail"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={e => this.setState({ password: e.target.value })}
          />
          {this.state.error && <p>{this.state.error}</p>}
          <button type="submit">Entrar</button>
        </Form>
      </Container>
    );
  }
}

export default withRouter(Login);