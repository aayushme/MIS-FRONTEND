import React, { Component } from 'react';
import Login from './components/login/login';
import Upload from './components/mainlayout/upload/upload';
import Report from './components/mainlayout/report/report';
import Dashboard from './components/mainlayout/dashboard/dashboard';
import DisputedCenters from './components/mainlayout/disputedcenter/disputedcenter';
import Mock from './components/mainlayout/mockstatus/mockstatus';
import New from './components/mainlayout/newallocations/newallocations';
import ProjectDetails from './components/mainlayout/projectdetail/projectdetail';
import NotFound from './components/utils/notfound/notfound';
import './components/mainlayout/main.css';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class AppRouter extends Component {
  componentDidMount() {
    this.props.authCheckStatus();
  }

  render() {
    let final_route;
    if (this.props.isAuthenticated) {
      final_route = (
        <Switch>
          <div className='AppRouter'>
            {this.props.getCenters(this.props.token)}
            <Route path='/' exact component={Login} />
            <Route path='/main/dashboard' exact component={Dashboard} />
            <Route path='/main/upload' exact component={Upload} />
            <Route path='/main/report' exact component={Report} />
            <Route
              path='/main/disputedcenter'
              exact
              component={DisputedCenters}
            />
            <Route path='/main/mock' exact component={Mock} />
            <Route path='/main/newallocations' exact component={New} />
            <Route
              path='/main/projectdetails'
              exact
              component={ProjectDetails}
            />
            <Route component={NotFound} />
          </div>
        </Switch>
      );
    }
    if (!this.props.isAuthenticated) {
      final_route = (
        <Switch>
          <div className='AppRouter'>
            <Route path='/' exact component={Login} />
          </div>
        </Switch>
      );
    }

    return <Router>{final_route}</Router>;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    authCheckStatus: () => dispatch(actions.authCheckStatus()),
    getCenters: (token) => dispatch(actions.getCenters(token)),
  };
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
    token: state.auth.token,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
