import React, { Component } from 'react';
import { Formik } from 'formik';

import { Container, Form } from './styles';

export default class NewSearch extends Component {
  render() {
    return (
      <Container>
        <h3>Nova pesquisa</h3>
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={values => {
            let errors = {};
            if (!values.cpf && !values.rg && !values.cpnj) {
              errors.geral = 'Preencha pelo menos um dos campos de pesquisa.';
            }
            if (values.cpf.length > 0 && (values.cpf.length < 10 || values.cpf.length > 11)) {
              errors.cpf = "Tamanho do cpf inválido.";
            }
            if (values.rg.length > 0 && (values.rg.length < 8 || values.rg.length > 10)) {
              errors.rg = "Tamanho do cpf inválido.";
            }
            if (values.cnpj.length > 0 && (values.cnpj.length < 14 || values.cnpj.length > 14)) {
              errors.cnpj = "Tamanho do cpf inválido.";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false);
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
                <div className="inputs">
                  <input
                    type="text"
                    name="cpf"
                    placeholder="CPF"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.cpf}
                  />
                  {errors.cpf && touched.cpf && <p>{errors.cpf}</p>}
                  <input
                    type="text"
                    name="rg"
                    placeholder="RG"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.rg}
                  />
                  {errors.rg && touched.rg && <p>{errors.rg}</p>}
                  <input
                    type="text"
                    name="cnpj"
                    placeholder="CNPJ"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.cnpj}
                  />
                  {errors.cnpj && touched.cnpj && <p>{errors.cnpj}</p>}
                </div>


                <button style={isSubmitting ? { background: '#ccc' } : {}} type="submit" disabled={isSubmitting}>Pesquisar</button>
              </Form>
            )}
        </Formik>
      </Container>
    );
  }
}
