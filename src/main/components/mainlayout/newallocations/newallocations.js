import React, { Component } from 'react';
import Header from '../header/header';
import Navbar from '../navbar/navbar';
import Dropdown from '../../utils/form/dropdown';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import * as actions from '../../../store/actions/index';

class NewAllocations extends Component {
  renderTable = () => {
    return this.props.project_data.map((value) => {
      return (
        <tbody>
          <tr>
            <td>{value.id}</td>
            <td>{value.code}</td>
            {this.props.designation === 'PM' ? (
              <td>{value.zm}</td>
            ) : (
              <td>{value.pc}</td>
            )}
            <td>{value.zone}</td>
            <td>{value.state}</td>
            <td>{value.city}</td>
          </tr>
        </tbody>
      );
    });
  };

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
              <div className='project_table_div'>
                <div className='row'>
                  <div className='col-sm-2'>
                    <Dropdown name='Zone' />
                  </div>
                  <div className='col-sm-2'>
                    <Dropdown name='ZM' />
                  </div>
                  <div className='col-sm-8'></div>
                </div>
                <br />
                <br />
                <div>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>S.No.</th>
                        <th>Project Code</th>
                        {this.props.designation === 'PM' ? (
                          <th>ZM</th>
                        ) : (
                          <th>PC</th>
                        )}
                        <th>Zone</th>
                        <th>State</th>
                        <th>City</th>
                      </tr>
                    </thead>
                    {this.renderTable()}
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {};
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    project_data: state.project.project_data,
    designation: state.auth.designation,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewAllocations);
