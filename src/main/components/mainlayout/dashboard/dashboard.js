import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../navbar/navbar';
import Header from '../header/header';
import { Jumbotron } from 'react-bootstrap';
import * as actions from '../../../store/actions/index';
import Graphs from '../../utils/graphs/graphs';

import './dashboard.css';
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBModal,
  MDBModalBody,
  MDBBtn,
  MDBContainer,
} from 'mdbreact';
class Dashboard extends Component {
  state = {
    show: false,
  };
  componentDidMount() {
    /*=========Calling all graphs=======*/
    this.setState({ show: true });
    this.props.getCountByCenter(this.props.token);
    this.props.getCountByInstallation(this.props.token);
    this.props.getCountByQC(this.props.token);
    this.props.getCountByMock(this.props.token);
  }

  toggle = () => {
    this.setState({ show: false });
  };

  render() {
    let cookie = (
      <MDBContainer>
        <MDBModal isOpen={this.state.show} frame position='bottom'>
          <MDBModalBody className='text-center'>
            This website uses cookies to personalize content and analyse traffic
            in order to offer you a better experience{'  '}
            <MDBBtn color='secondary' onClick={this.toggle}>
              Accept
            </MDBBtn>
          </MDBModalBody>
        </MDBModal>
      </MDBContainer>
    );
    return (
      <>
        <div classNameName='container_absolute'>
          <Header />
          <div>
            <br />
            <div className='vertical-nav bg-white' id='sidebar'>
              <Navbar />
            </div>
            {cookie}
            <div className='page-content' id='content'>
              <Jumbotron>
                <div className='graph-cont scrollbar scrollbar-primary'>
                  <div className='row'>
                    <div className='col-sm-6'>
                      <MDBCard>
                        <MDBCardImage
                          className='blue-gradient white-text d-flex justify-content-center align-items-center flex-column p-4 rounded'
                          tag='div'
                        >
                          <h2>Count By Center Type</h2>
                        </MDBCardImage>
                        <MDBCardBody cascade className='text-center'>
                          <Graphs jsonData={this.props.count_by_center_data} />
                        </MDBCardBody>
                      </MDBCard>
                    </div>

                    <div className='col-sm-6'>
                      <MDBCard>
                        <MDBCardImage
                          className='blue-gradient white-text d-flex justify-content-center align-items-center flex-column p-4 rounded'
                          tag='div'
                        >
                          <h2>Count By Mock Status</h2>
                        </MDBCardImage>
                        <MDBCardBody cascade className='text-center'>
                          <Graphs jsonData={this.props.count_by_mock_data} />
                        </MDBCardBody>
                      </MDBCard>
                    </div>
                  </div>
                  <br />
                  <br />
                  <br />

                  <div className='row '>
                    <div className='col-sm-6'>
                      <MDBCard>
                        <MDBCardImage
                          className='blue-gradient white-text d-flex justify-content-center align-items-center flex-column p-4 rounded'
                          tag='div'
                        >
                          <h2>Count By Installation Data</h2>
                        </MDBCardImage>
                        <MDBCardBody cascade className='text-center'>
                          <Graphs
                            jsonData={this.props.count_by_installation_data}
                          />
                        </MDBCardBody>
                      </MDBCard>
                    </div>

                    <div className='col-sm-6'>
                      <MDBCard>
                        <MDBCardImage
                          className='blue-gradient white-text d-flex justify-content-center align-items-center flex-column p-4 rounded'
                          tag='div'
                        >
                          <h2>Count By QC Status</h2>
                        </MDBCardImage>
                        <MDBCardBody cascade className='text-center'>
                          <Graphs jsonData={this.props.count_by_qc_data} />
                        </MDBCardBody>
                      </MDBCard>
                    </div>
                  </div>

                  <br />
                  <br />
                  <br />

                  <div className='row'>
                    <div className='col-sm-6'>
                      <MDBCard>
                        <MDBCardImage
                          className='blue-gradient white-text d-flex justify-content-center align-items-center flex-column p-4 rounded'
                          tag='div'
                        >
                          <h2>Count By Center Type</h2>
                        </MDBCardImage>
                        <MDBCardBody cascade className='text-center'>
                          <Graphs jsonData={this.props.count_by_center_data} />
                        </MDBCardBody>
                      </MDBCard>
                    </div>

                    <div className='col-sm-6'>
                      <MDBCard>
                        <MDBCardImage
                          className='blue-gradient white-text d-flex justify-content-center align-items-center flex-column p-4 rounded'
                          tag='div'
                        >
                          <h2>Count By Mock Status</h2>
                        </MDBCardImage>
                        <MDBCardBody cascade className='text-center'>
                          <Graphs jsonData={this.props.count_by_mock_data} />
                        </MDBCardBody>
                      </MDBCard>
                    </div>
                  </div>
                  <br />
                  <br />
                  <br />
                  <div className='row'>
                    <div className='col-sm-6'>
                      <MDBCard>
                        <MDBCardImage
                          className='blue-gradient white-text d-flex justify-content-center align-items-center flex-column p-4 rounded'
                          tag='div'
                        >
                          <h2>Count By Center Type</h2>
                        </MDBCardImage>
                        <MDBCardBody cascade className='text-center'>
                          <Graphs jsonData={this.props.count_by_center_data} />
                        </MDBCardBody>
                      </MDBCard>
                    </div>

                    <div className='col-sm-6'>
                      <MDBCard>
                        <MDBCardImage
                          className='blue-gradient white-text d-flex justify-content-center align-items-center flex-column p-4 rounded'
                          tag='div'
                        >
                          <h2>Count By Mock Status</h2>
                        </MDBCardImage>
                        <MDBCardBody cascade className='text-center'>
                          <Graphs jsonData={this.props.count_by_mock_data} />
                        </MDBCardBody>
                      </MDBCard>
                    </div>
                  </div>
                  <br />
                  <br />
                  <br />
                  <div className='row'>
                    <div className='col-sm-6'>
                      <MDBCard>
                        <MDBCardImage
                          className='blue-gradient white-text d-flex justify-content-center align-items-center flex-column p-4 rounded'
                          tag='div'
                        >
                          <h2>Count By Center Type</h2>
                        </MDBCardImage>
                        <MDBCardBody cascade className='text-center'>
                          <Graphs jsonData={this.props.count_by_center_data} />
                        </MDBCardBody>
                      </MDBCard>
                    </div>

                    <div className='col-sm-6'>
                      <MDBCard>
                        <MDBCardImage
                          className='blue-gradient white-text d-flex justify-content-center align-items-center flex-column p-4 rounded'
                          tag='div'
                        >
                          <h2>Count By Mock Status</h2>
                        </MDBCardImage>
                        <MDBCardBody cascade className='text-center'>
                          <Graphs jsonData={this.props.count_by_mock_data} />
                        </MDBCardBody>
                      </MDBCard>
                    </div>
                  </div>
                  <br />
                  <br />
                  <br />
                  <div className='row'>
                    <div className='col-sm-6'>
                      <MDBCard>
                        <MDBCardImage
                          className='blue-gradient white-text d-flex justify-content-center align-items-center flex-column p-4 rounded'
                          tag='div'
                        >
                          <h2>Count By Center Type</h2>
                        </MDBCardImage>
                        <MDBCardBody cascade className='text-center'>
                          <Graphs jsonData={this.props.count_by_center_data} />
                        </MDBCardBody>
                      </MDBCard>
                    </div>

                    <div className='col-sm-6'>
                      <MDBCard>
                        <MDBCardImage
                          className='blue-gradient white-text d-flex justify-content-center align-items-center flex-column p-4 rounded'
                          tag='div'
                        >
                          <h2>Count By Mock Status</h2>
                        </MDBCardImage>
                        <MDBCardBody cascade className='text-center'>
                          <Graphs jsonData={this.props.count_by_mock_data} />
                        </MDBCardBody>
                      </MDBCard>
                    </div>
                  </div>
                  <br />
                  <br />
                  <br />
                  <div className='row'>
                    <div className='col-sm-6'>
                      <MDBCard>
                        <MDBCardImage
                          className='blue-gradient white-text d-flex justify-content-center align-items-center flex-column p-4 rounded'
                          tag='div'
                        >
                          <h2>Count By Center Type</h2>
                        </MDBCardImage>
                        <MDBCardBody cascade className='text-center'>
                          <Graphs jsonData={this.props.count_by_center_data} />
                        </MDBCardBody>
                      </MDBCard>
                    </div>

                    <div className='col-sm-6'>
                      <MDBCard>
                        <MDBCardImage
                          className='blue-gradient white-text d-flex justify-content-center align-items-center flex-column p-4 rounded'
                          tag='div'
                        >
                          <h2>Count By Mock Status</h2>
                        </MDBCardImage>
                        <MDBCardBody cascade className='text-center'>
                          <Graphs jsonData={this.props.count_by_mock_data} />
                        </MDBCardBody>
                      </MDBCard>
                    </div>
                  </div>
                  <br />
                  <br />
                  <br />
                </div>
              </Jumbotron>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCountByCenter: (token) => dispatch(actions.getCountByCenter(token)),
    getCountByInstallation: (token) =>
      dispatch(actions.getCountByInstallation(token)),
    getCountByQC: (token) => dispatch(actions.getCountByQC(token)),
    getCountByMock: (token) => dispatch(actions.getCountByMock(token)),
  };
};

const mapStateToProps = (state) => {
  return {
    name: state.auth.name,
    designation: state.auth.designation,
    token: state.auth.token,
    count_by_center_data: state.graph.count_by_center_data,
    count_by_installation_data: state.graph.count_by_installation_data,
    count_by_qc_data: state.graph.count_by_qc_data,
    count_by_mock_data: state.graph.count_by_mock_data,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
