import React, { Component } from 'react';
import Header from '../header/header';
import Navbar from '../navbar/navbar';
import './upload.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import * as actions from '../../../store/actions/index';
import 'mdbreact/dist/css/mdb.css';
import { connect } from 'react-redux';
import TableNew from '../../utils/tablenew/tablenew';
import UploadNew from './uploadnew';
import NoData from '../../utils/nodata/nodata';
import {
  MDBContainer,
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
} from 'mdbreact';

class Upload extends Component {
  /*------------------States--------------------*/

  state = {
    show: false,
    activeItem: '3',
    activeItemJustified: '1',
    delete_table: null,
  };

  additionalCols = () => [
    {
      header: 'Actions',
      td: (data) => {
        return (
          <div>
            <FontAwesomeIcon
              icon={faTrash}
              width='30'
              height='20'
              onClick={() => this.handleDeleteCenters(data.id)}
            />
          </div>
        );
      },
    },
  ];

  handleDeleteCenters = (id) => {
    this.props.deleteCenters(this.props.token, id);
    this.handleUpdateColumns();
  };

  handleUpdateColumns = () => {
    this.interval = setInterval(() => {
      {
        this.setState({
          delete_table: (
            <TableNew
              tableData={this.props.center_data}
              additionalCols={this.additionalCols()}
            />
          ),
        });
      }
    }, 1000);
  };

  componentDidMount() {}

  componentWillUnmount() {
    if (this.props.errorDataLoading === false) {
      clearInterval(this.interval);
    }
  }

  toggleClassicTabs1 = (tab) => (e) => {
    if (this.state.activeItemJustified !== tab) {
      this.setState({
        activeItemJustified: tab,
      });
    }
  };

  toggle = (tab) => (e) => {
    if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab,
      });
    }
  };

  /*------------------Handle Modal Close--------------------*/

  handleClose = (e) => {
    e.preventDefault();
    this.setState({ show: false, showDeleteStatus: false });
  };

  render() {
    /*------------------Return--------------------*/

    return (
      <div>
        <Header />
        <div>
          <br />

          <div class='vertical-nav bg-white' id='sidebar'>
            <Navbar />
          </div>

          <div className='page-content overflow-hidden' id='content1'>
            <div className='overflow_cont1'>
              <MDBContainer className='tabs_cont1'>
                <MDBNav color='secondary' dark expand='md'>
                  <MDBNavItem>
                    <MDBNavLink
                      className='link_tabs'
                      link
                      to='#'
                      active={this.state.activeItemJustified === '1'}
                      onClick={this.toggleClassicTabs1('1')}
                    >
                      Add New Project
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      className='link_tabs'
                      link
                      to='#'
                      active={this.state.activeItemJustified === '2'}
                      onClick={this.toggleClassicTabs1('2')}
                    >
                      Modify Existing Project
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNav>
                <MDBTabContent
                  className='card'
                  activeItem={this.state.activeItemJustified}
                >
                  <MDBTabPane tabId='1' role='tabpanel' className='noshadow'>
                    <UploadNew />
                  </MDBTabPane>
                  <MDBTabPane tabId='2' role='tabpanel'>
                    <div className='row border2'>
                      <MDBContainer>
                        <MDBNav className='nav-tabs mt-5'>
                          <MDBNavItem>
                            <MDBNavLink
                              link
                              to='#'
                              active={this.state.activeItem === '5'}
                              onClick={this.toggle('5')}
                              role='tab'
                            >
                              Update New Sheets
                            </MDBNavLink>
                          </MDBNavItem>
                          <MDBNavItem>
                            <MDBNavLink
                              link
                              to='#'
                              active={this.state.activeItem === '4'}
                              onClick={this.toggle('4')}
                              role='tab'
                            >
                              Add New Centers
                            </MDBNavLink>
                          </MDBNavItem>
                          <MDBNavItem>
                            <MDBNavLink
                              link
                              to='#'
                              active={this.state.activeItem === '3'}
                              onClick={this.toggle('3')}
                              role='tab'
                            >
                              Remove Centers
                            </MDBNavLink>
                          </MDBNavItem>
                        </MDBNav>
                        <MDBTabContent activeItem={this.state.activeItem}>
                          <MDBTabPane tabId='5' role='tabpanel'>
                            <UploadNew />
                          </MDBTabPane>
                          <MDBTabPane tabId='4' role='tabpanel'>
                            <UploadNew />
                          </MDBTabPane>
                          <MDBTabPane tabId='3' role='tabpanel'>
                            <div className='delete_table scrollbar scrollbar-primary'>
                              {this.props.loading_center === false ? (
                                this.props.error_center !== '' ? (
                                  <>
                                    {' '}
                                    {this.state.delete_table !== null ? (
                                      <TableNew
                                        tableData={this.props.center_data}
                                        additionalCols={this.additionalCols()}
                                        pageSize={[4]}
                                      />
                                    ) : (
                                      <>{this.state.delete_table}</>
                                    )}{' '}
                                  </>
                                ) : (
                                  <NoData />
                                )
                              ) : (
                                <NoData />
                              )}
                            </div>
                          </MDBTabPane>
                        </MDBTabContent>
                      </MDBContainer>
                    </div>
                  </MDBTabPane>
                </MDBTabContent>
              </MDBContainer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/*----------------- REDUX --------------------*/

const mapDispatchToProps = (dispatch) => {
  return {
    misGet: (token) => dispatch(actions.misGet(token)),
    deleteCenters: (token, id) => dispatch(actions.deleteCenters(token, id)),
    getCenters: (token) => dispatch(actions.getCenters(token)),
  };
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    statusId: state.mis.statusId,
    center_data: state.center.center_data,
    deleteCenterStatus: state.center.deleteCenterStatus,
    tableshow: state.center_data !== [],
    loading_center: state.center.loading_center,
    error_center: state.center.error_center,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Upload);
