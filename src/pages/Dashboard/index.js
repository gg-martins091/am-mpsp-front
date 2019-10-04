import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { Container, Content } from './styles';
import LastSearches from '../../components/LastSearches';
import Status from '../../components/Status';
import NewSearch from '../../components/NewSearch';
import { getUserId } from '../../services/auth';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.id = getUserId();
  }

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
              <NewSearch />
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col">
              <LastSearches id={this.id} />
            </div>
          </div>

        </Container>
      </Content>
    );
  }
}

export default withRouter(Dashboard);