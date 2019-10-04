import React, { Component } from 'react';
import { Formik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';

import { Container, Form } from './styles';
import api from '../../services/api';

export default class NewSearch extends Component {

  async newSearch(values) {
    const { cpf, rg, cnpj } = values;
    return api.post('flows', {
      cpf,
      rg,
      cnpj,
    });
  }

  render() {
    return (
      <Container>
        <ToastContainer enableMultiContainer containerId={'A'} position={toast.POSITION.BOTTOM_RIGHT} />
        <h3>Nova pesquisa</h3>
        <Formik
          initialValues={{ cpf: '', cnpj: '', rg: '' }}
          validate={values => {
            let errors = {};
            if (!values.cpf && !values.rg && !values.cpnj) {
              errors.geral = 'Preencha pelo menos um dos campos de pesquisa.';
            }
            if (values.cpf.length > 0 && (values.cpf.length < 10 || values.cpf.length > 11)) {
              errors.cpf = "Tamanho do CPF inválido.";
            }
            if (values.rg.length > 0 && (values.rg.length < 9 || values.rg.length > 10)) {
              errors.rg = "Tamanho do RG inválido.";
            }
            if (values.cnpj.length > 0 && (values.cnpj.length < 14 || values.cnpj.length > 14)) {
              errors.cnpj = "Tamanho do CNPJ inválido.";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              this.newSearch(values).then(data => {
                if (data.status === 201) {
                  resetForm();
                  toast.success('Requisição enviada com sucesso.', {containerId: 'A'});
                } else {
                  toast.error('Ocorreu um erro. Tente novamente mais tarde.', {containerId: 'A'});
                }
                setSubmitting(false);
              }).catch(e => {
                toast.error('Ocorreu um erro. Tente novamente mais tarde.', {containerId: 'A'});
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

                {errors.geral && (touched.cnpj || touched.rg || touched.cpf) && <p>{errors.geral}</p>}


                <button style={isSubmitting ? { background: '#ccc' } : {}} type="submit" disabled={isSubmitting}>Pesquisar</button>
              </Form>
            )}
        </Formik>
      </Container >
    );
  }
}
