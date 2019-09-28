import React, { Component } from 'react';

import { Container } from './styles';

class LastSearches extends Component {
  constructor(props) {
    super(props);
    this.icons = {
      2: "fa-circle",
      3: "fa-check",
      4: "fa-times"
    }
    this.state = {
      data: [
        {
          id: 33,
          title: "CPF: 03322003991",
          desc: 'Gerado em 20/03/2019 às 17:33',
          status: 2,
        },
        {
          id: 32,
          title: "RG: 829393578",
          desc: 'Gerado em 18/03/2019 às 13:59',
          status: 3,
        },
        {
          id: 31,
          title: "CNPJ: 0348291920002-6",
          desc: 'Gerado em 20/03/2019 às 09:12',
          status: 4
        }
      ]
    };
  }


  render() {
    const { data } = this.state;
    return (
      <Container>
        <h3>Últimas buscas</h3>
        <ul>
          {data.map(item => {
            const css = `fa fa-2x ${this.icons[item.status]}`;
            return (
              <li key={item.id}>
                <a href="#">
                  <i class={css}></i>
                  <div>
                    <span>{item.title}</span>
                    <span>{item.desc}</span>
                  </div>
                </a>
              </li>
            )
          })}
        </ul>
      </Container>
    );
  }
}

export default LastSearches;