import React, { Component } from 'react';
import { Container } from './styles';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton
} from 'react-accessible-accordion';
import app from '../../utils/firebase';
import Loader from 'react-loader-spinner'


class LastSearches extends Component {
  constructor(props) {
    super(props);
    this.firestore = app.firestore();
    this.iconColors = {
      2: "status-doing",
      3: "status-ok",
      4: "status-fail"
    }
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.firestore.collection('flows').orderBy('created_at', 'desc').where('user_id', '==', this.props.id).onSnapshot(d => {
      this.getData();
    });
    /*
        this.firestore.collection('sources').orderBy('created_at', 'desc').where('user_id', '==', this.props.id).onSnapshot(d => {
          this.getData();
        });*/
  }

  getData = async () => {
    let dataTmp = [];
    const d = await this.firestore.collection('flows')
      .orderBy('created_at', 'desc').where('user_id', '==', this.props.id).get();

    for (let index = 0; index < d.docs.length; index++) {
      const flow = d.docs[index];
      let data = flow.data();
      data['id'] = flow.id;
      data['sources'] = [];
      const sources = await this.firestore.collection('sources')
        .where('flow_id', '==', parseInt(flow.id)).get();

      sources.forEach(s => {
        data['sources'].push(s.data());
      });
      dataTmp.push(data);
    }

    this.setState({ data: dataTmp });
  }

  render() {
    const { data } = this.state;
    return (
      <Container>
        <h3>Últimas buscas</h3>
        {data.length < 1 && <Loader
          type="Watch"
          color="#00BFFF"
          height={70}
          width={50}
          style={{ alignSelf: 'center' }}

        />}
        <Accordion
          allowZeroExpanded={true}>
          {data.map(item => {
            return (
              <AccordionItem key={item.id}>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Requisição #{item.id} <span style={created_at}>({item.created_at.toDate().toISOString().substring(0, 10)})</span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div>
                    {item.link_relatorio &&
                      <a style={{ float: 'right' }} href={item.link_relatorio}>Acesse aqui o relatório</a>
                    }

                    {!item.link_relatorio &&
                      <span style={{ float: 'right', color: '#999' }}>Relatório em processamento...</span>
                    }
                    {item.cpf && <span className="lastResearchField">CPF: {item.cpf}</span>}
                    {item.cnpj && <span className="lastResearchField">CNPJ: {item.cnpj}</span>}
                    {item.rg && <span className="lastResearchField">RG: {item.rg}</span>}
                    <h6>Portais:</h6>
                    <div style={listaSources}>
                      {item.sources.map((s, i) => {
                        const css = `fa fa-circle ${this.iconColors[s.status]}`;
                        const key = `item.id-${i}`
                        return (
                          <p key={key} style={{ marginLeft: '10px' }}><i class={css}></i> {s.name}</p>
                        );
                      })}
                    </div>
                  </div>
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