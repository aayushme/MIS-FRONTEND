import React, { Component } from 'react';
import Header from '../header/header';
import Navbar from '../navbar/navbar';
import Dropdown from '../../utils/form/dropdown';
import { connect } from 'react-redux';
import './newallocations.css';
import * as actions from '../../../store/actions/index';
import TableNew from '../../utils/tablenew/tablenew';
import MultiDrop from '../../utils/form/multidrop';

import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle } from 'mdbreact';

class NewAllocations extends Component {
  state = {
    table: [
      {
        id: '1',
        name: 'aayush',
        age: '5',
      },
      {
        id: '1',
        name: 'aayush',
        age: '5',
      },
      {
        id: '1',
        name: 'aayush',
        age: '5',
      },
      {
        id: '1',
        name: 'aayush',
        age: '5',
      },
      {
        id: '1',
        name: 'aayush',
        age: '5',
      },
      {
        id: '1',
        name: 'aayush',
        age: '5',
      },
      {
        id: '1',
        name: 'aayush',
        age: '5',
      },
      {
        id: '1',
        name: 'aayush',
        age: '5',
      },
      {
        id: '1',
        name: 'aayush',
        age: '5',
      },
      {
        id: '1',
        name: 'aayush',
        age: '5',
      },
      {
        id: '1',
        name: 'aayush',
        age: '5',
      },
      {
        id: '1',
        name: 'aayush',
        age: '5',
      },
      {
        id: '1',
        name: 'aayush',
        age: '5',
      },
      {
        id: '1',
        name: 'aayush',
        age: '5',
      },
    ],
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
            <div className='jumbotron '>
              <div className=''>
                <div className='row'>
                  <div className='col-sm-4 '>
                    <div className='dropdowns'>
                      <div className='row'>
                        <MDBCard
                          style={{
                            width: '22rem',
                          }}
                        >
                          <MDBCardBody>
                            <MDBCardTitle>Zones</MDBCardTitle> <MultiDrop />{' '}
                          </MDBCardBody>
                        </MDBCard>
                      </div>
                      <br /> <br />
                      <div className='row'>
                        <MDBCard
                          style={{
                            width: '22rem',
                          }}
                        >
                          <MDBCardBody>
                            <MDBCardTitle>Zone Manager</MDBCardTitle>
                            <Dropdown name='ZM' />
                          </MDBCardBody>
                        </MDBCard>
                      </div>
                      <br />
                      <div className='row'>
                        <MDBBtn color='secondary'>Post</MDBBtn>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-8'>
                    <div className='dropdowns2'>
                      <TableNew
                        tableData={this.state.table}
                        additionalCols='NO'
                        pageSize={[5, 10]}
                      />
                    </div>
                  </div>
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
