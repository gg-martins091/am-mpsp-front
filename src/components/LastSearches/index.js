import React, { Component } from 'react';
import { Container } from './styles';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton
} from 'react-accessible-accordion';

class LastSearches extends Component {
  constructor(props) {
    super(props);
    this.iconColors = {
      2: "status-doing",
      3: "status-ok",
      4: "status-fail"
    }
    this.state = {
      data: [
        {
          link_relatorio: "https://google.com",
          id: 33,
          cpf: "03322003991",
          cpnj: null,
          rg: null,
          created_at: '20/03/2019 às 17:33',
          sources: [
            {
              name: "Detran",
              status: 2
            },
            {
              name: "SUJESP",
              status: 2
            }
          ]
        },
        {
          link_relatorio: "https://google.com",
          id: 32,
          cpf: null,
          cpnj: null,
          rg: "829393578",
          created_at: '18/03/2019 às 13:59',
          sources: [
            {
              name: "Detran",
              status: 4
            },
            {
              name: "Outro",
              status: 3
            }
          ]
        },

      ]
    }
  }



  render() {
    const { data } = this.state;
    return (
      <Container>
        <h3>Últimas buscas</h3>
        <Accordion
          allowZeroExpanded={true}>
          {data.map(item => {
            return (
              <AccordionItem key={item.id}>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Requisição #{item.id} <span style={created_at}>({item.created_at})</span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    {item.link_relatorio &&
                      <a style={{ float: 'right' }} href={item.link_relatorio}>Acesse aqui o relatório</a>
                    }

                    {!item.link_relatorio &&
                      <span style={{ float: 'right', color: '#999' }}>Relatório em processamento...</span>
                    }
                    <h6>Pesquisas:</h6>
                    <div style={listaSources}>
                      {item.sources.map(s => {
                        const css = `fa fa-circle ${this.iconColors[s.status]}`;
                        return (
                          <p style={{ marginLeft: '10px' }}><i class={css}></i> {s.name}</p>
                        );
                      })}
                    </div>
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            )
          })}
        </Accordion>
      </Container>
    );
  }
}

const created_at = {
  fontSize: '12px',
  float: 'right'
}

const listaSources = {
  marginTop: '20px'
}

export default LastSearches;