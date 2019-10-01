import React, { Component } from 'react';
import Chart from 'react-apexcharts';

import { Container } from './styles';

export default class Status extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: ['Em andamento', 'Sucesso', 'Falha'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
      series: [12, 55, 3],
    }
  }

  render() {

    return (
      <Container>
        <h3>Relatório de processos</h3>
        <div className="donut">
          <Chart options={this.state.options} series={this.state.series} type="pie" width="380" />
        </div>
      </Container >
    );
  }
}
