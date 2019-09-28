import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import api from "../../services/api";

import { Container, Content } from './styles';
import LastSearches from '../../components/LastSearches';

class Dashboard extends Component {
  state = {
  };

  render() {
    return (
      <Content>
        <h1>Dashboard</h1>
        <Container className="row">
          <div className="col" style={lastSearchContainer}>
            <LastSearches />
          </div>
          <div className="col" style={lastSearchContainer}>
            <LastSearches />
          </div>
        </Container>
      </Content>
    );
  }
}

const lastSearchContainer = {
  display: 'flex',
  justifyContent: 'center',
};

export default withRouter(Dashboard);