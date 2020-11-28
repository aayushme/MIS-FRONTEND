import React, { Component } from 'react';
import Header from '../header/header';
import Navbar from '../navbar/navbar';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import CustomDropdown from '../../utils/form/dropdown';
import './project.css';
import * as actions from '../../../store/actions/index';
import TableNew from '../../utils/tablenew/tablenew';

class ProjectDetail extends Component {
  render() {
    return (
      <>
        <Header />
        <div>
          <br />

          <div class='vertical-nav bg-white' id='sidebar'>
            <Navbar />
          </div>

          <div class='page-content' id='content'>
            <div className='jumbotron overflow-cont'>
              <div className='project_table_div'>Project Details</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProjectDetails: (token, id) =>
      dispatch(actions.getProjectDetails(token, id)),
    getZM: (token) => dispatch(actions.getZM(token)),
    getPC: (token) => dispatch(actions.getPC(token)),
  };
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    project_data: state.project.project_data,
    designation: state.auth.designation,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetail);
