import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Logo from '../../assets/logo.png';
import api from "../../services/api";
import { login, getToken } from "../../services/auth";

import { Form, Container } from "./styles";
import { Formik } from 'formik';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
    if (getToken() != null) {
      this.props.history.push('/dash');
    }
  }

  handleSignIn = async e => {
    const { email, password } = e;

    if (!email || !password) {
      this.setState({ error: "Preencha e-mail e senha para acessar." });
    } else {
      try {
        const response = await api.post("/login", { email, password });
        login(response.data.token);
        this.props.history.push('/dash');
      } catch (err) {
        this.setState({
          error:
            "Houve um problema com o login, verifique suas credenciais."
        });
      }
    }
  };

  render() {
    return (
      <Container>
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={values => {
            let errors = {};
            if (!values.email) {
              errors.email = 'Preencha o e-mail.';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Endereço de e-mail inválido.';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              this.handleSignIn(values).then(() => {
                setSubmitting(false);
              });
            }, 100);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (

              <Form onSubmit={handleSubmit}>
                <img src={Logo} alt="CINQUENTAK" />
                <input
                  type="email"
                  name="email"
                  placeholder="Endereço de e-mail"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && <p>{errors.email}</p>}
                <input
                  type="password"
                  name="password"
                  placeholder="Senha"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password && touched.password && errors.password}
                {this.state.error && <p>{this.state.error}</p>}
                <button style={isSubmitting ? { background: '#ccc' } : {}} type="submit" disabled={isSubmitting}>Entrar</button>
              </Form>
            )}
        </Formik>

      </Container>
    );
  }
}

export default withRouter(Login);