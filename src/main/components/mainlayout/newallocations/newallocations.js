import React, { Component } from 'react';
import Header from '../header/header';
import Navbar from '../navbar/navbar';
import Dropdown from '../../utils/form/dropdown';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import * as actions from '../../../store/actions/index';
import MultiDrop from '../../utils/form/multidrop';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from 'mdbreact';

class NewAllocations extends Component {
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
                  <div className='col-sm-4 dropdowns'>
                    <div className='row dropdowns'>
                      <MDBCard style={{ width: '22rem' }}>
                        <MDBCardBody>
                          <MDBCardTitle>Zone Manager</MDBCardTitle>
                          <Dropdown name='ZM' />
                        </MDBCardBody>
                      </MDBCard>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />

                    <div className='row dropdowns'>
                      <MDBCard style={{ width: '22rem' }}>
                        <MDBCardBody>
                          <MDBCardTitle>Zones</MDBCardTitle>
                          <MultiDrop />
                        </MDBCardBody>
                      </MDBCard>
                    </div>
                  </div>
                  <div className='col-sm-8'></div>
                </div>
                <br />
                <br />
                <div></div>
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
