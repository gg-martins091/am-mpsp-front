import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { Container, Content } from './styles';
import LastSearches from '../../components/LastSearches';
import Status from '../../components/Status';
import NewSearch from '../../components/NewSearch';

class Dashboard extends Component {
  state = {
  };

  render() {
    return (
      <Content>
        <Container>
          <h1><i class="fa fa-table"></i> Dashboard</h1>
          <hr />
          <div className="row" style={{ width: '100%' }}>
            <div className="col">
              <Status />
            </div>
            <div className="col">
              <LastSearches />
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col">
              <NewSearch />
            </div>
          </div>

        </Container>
      </Content>
    );
  }
}

export default withRouter(Dashboard);