import React, { Component } from 'react';
import Header from '../header/header';
import Navbar from '../navbar/navbar';
import Modal from '../../utils/modal/modal';
import { Table } from 'react-bootstrap';
import './upload.css';
import FullSpinner from '../../utils/fullspinner/fullspinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import * as actions from '../../../store/actions/index';
import 'mdbreact/dist/css/mdb.css';
import { connect } from 'react-redux';
import TableNew from '../../utils/tablenew/tablenew';
import {
  MDBContainer,
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBBtn,
} from 'mdbreact';

class Upload extends Component {
  /*------------------States--------------------*/

  state = {
    file: '',
    show: false,
    uploadClass: 'file-upload',
    showErrors: false,
    activeItem: '3',
    activeItemJustified: '1',
    tabledata: {
      columns: [
        {
          label: 'S.No.',
          field: 'SNo',
          width: 150,
          attributes: {
            'aria-controls': 'DataTable',
            'aria-label': 'S.No.',
          },
        },
        {
          label: 'Project Code',
          field: 'ProjectCode',
          width: 270,
        },
        {
          label: 'ZM',
          field: 'Zone',
          width: 200,
        },
        {
          label: 'Age',
          field: 'age',
          sort: 'asc',
          width: 100,
        },
        {
          label: 'Start date',
          field: 'date',
          sort: 'disabled',
          width: 150,
        },
        {
          label: 'Salary',
          field: 'salary',
          sort: 'disabled',
          width: 100,
        },
      ],
      rows: [
        {
          SNo: 'Tiger Nixon',
          ProjectCode: 'System Architect',
          ZM: 'Edinburgh',
          age: '61',
          date: '2011/04/25',
          salary: '$320',
        },
        {
          SNo: 'Tiger Nixon',
          ProjectCode: 'System Architect',
          ZM: 'Edinburgh',
          age: '61',
          date: '2011/04/25',
          salary: '$320',
        },
        {
          SNo: 'Tiger Nixon',
          ProjectCode: 'System Architect',
          ZM: 'Edinburgh',
          age: '61',
          date: '2011/04/25',
          salary: '$320',
        },
        {
          SNo: 'Tiger Nixon',
          ProjectCode: 'System Architect',
          ZM: 'Edinburgh',
          age: '61',
          date: '2011/04/25',
          salary: '$320',
        },
        {
          SNo: 'Tiger Nixon',
          ProjectCode: 'System Architect',
          ZM: 'Edinburgh',
          age: '61',
          date: '2011/04/25',
          salary: '$320',
        },
        {
          SNo: 'Tiger Nixon',
          ProjectCode: 'System Architect',
          ZM: 'Edinburgh',
          age: '61',
          date: '2011/04/25',
          salary: '$320',
        },
        {
          SNo: 'Tiger Nixon',
          ProjectCode: 'System Architect',
          ZM: 'Edinburgh',
          age: '61',
          date: '2011/04/25',
          salary: '$320',
        },
        {
          SNo: 'Tiger Nixon',
          ProjectCode: 'System Architect',
          ZM: 'Edinburgh',
          age: '61',
          date: '2011/04/25',
          salary: '$320',
        },
        {
          SNo: 'Tiger Nixon',
          ProjectCode: 'System Architect',
          ZM: 'Edinburgh',
          age: '61',
          date: '2011/04/25',
          salary: '$320',
        },
        {
          SNo: 'Tiger Nixon',
          ProjectCode: 'System Architect',
          ZM: 'Edinburgh',
          age: '61',
          date: '2011/04/25',
          salary: '$320',
        },
        {
          SNo: 'Tiger Nixon',
          ProjectCode: 'System Architect',
          ZM: 'Edinburgh',
          age: '61',
          date: '2011/04/25',
          salary: '$320',
        },
      ],
    },
  };

  componentDidMount() {
    /*------------------Calling errors in every 8 sec if sheets uploaded--------------------*/
    this.interval = setInterval(() => {
      if (this.props.statusId !== null) {
        this.props.getMisError(this.props.token, this.props.statusId);
        console.log('Getting Errors.....');
      }
      console.log('10 sec');
    }, 8000);
    this.props.misGet(this.props.token);
  }

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
    this.setState({ show: false, showErrors: false });
  };

  /*------------------Handle Upload Button--------------------*/

  onThisSubmit = (e) => {
    if (this.state.file === '') {
      this.setState({ show: true });
    } else {
      let validTypes = [
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'application/vnd.ms-excel',
        'application/vnd.oasis.opendocument.spreadsheet',
      ];
      let bCondition01 = validTypes.indexOf(this.state.file.type) > -1;

      let ext = this.state.file.name.slice(-5).toLowerCase();
      let bCondition02 = this.state.file.type === '' && ext === '.xlsx';

      e.preventDefault();
      if (bCondition01 || bCondition02) {
        this.props.misUpload(this.props.token, this.state.file);
        this.setState({ uploadClass: 'file-upload active', showErrors: true });
      } else {
        this.setState({ show: true, uploadClass: 'file-upload danger' });
      }
    }
  };

  /*------------------Handle Error Modal--------------------*/

  handleValidationError = (id) => {
    this.setState({ showErrors: true });
  };

  /*------------------Getting Errors--------------------*/

  handleError = (id) => {
    this.props.getMisError(this.props.token, id);
    this.setState({ showErrors: true });
  };

  /*------------------Render Errors Table--------------------*/

  renderTableError = () => {
    return this.props.dataError.map((value) => {
      return (
        <tbody>
          <tr>
            <td>{value.id}</td>
            <td>{value.column}</td>
            <td>{value.row}</td>
            <td>{value.value}</td>
          </tr>
        </tbody>
      );
    });
  };

  render() {
    /*-----------------1) Checking if errors have been fetched
                        2)If 0 errors then authenticated 
                        3)If errors then displayed in modal---------------------*/

    let errorsTable = this.props.errorDataLoading ? (
      /*------------------Spinner--------------------*/
      <FullSpinner />
    ) : this.props.dataError.length === 0 ? (
      /*------------------Authentication Text--------------------*/
      <>
        <p className='lead'>
          <>
            The file is successfully Authenticated{' '}
            <FontAwesomeIcon style={{ color: 'green' }} icon={faCheckCircle} />
          </>
        </p>
      </>
    ) : (
      /*------------------Render Errors Table--------------------*/
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Column</th>
              <th>Row</th>
              <th>Value</th>
            </tr>
          </thead>
          {this.renderTableError()}
        </Table>
      </div>
    );

    /*------------------Return--------------------*/

    return (
      <div>
        <Header />
        <div>
          <br />

          <div class='vertical-nav bg-white' id='sidebar'>
            <Navbar />
          </div>
          <Modal
            show={this.state.show}
            message='Please Upload a Valid Excel File '
            onClick={this.handleClose}
          />

          <Modal
            show={this.state.showErrors}
            message='Errors '
            onClick={this.handleClose}
            errors={errorsTable}
          />

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
                    <div className='row border1'>
                      <div className='upload_input'>
                        <div class={this.state.uploadClass}>
                          <div class='file-select'>
                            <div class='file-select-button' id='fileName'>
                              Choose File
                            </div>

                            {this.state.file !== '' ? (
                              <div class='file-select-name' id='noFile'>
                                {this.state.file.name}
                              </div>
                            ) : (
                              <div class='file-select-name' id='noFile'>
                                No file chosen...
                              </div>
                            )}

                            <form>
                              <input
                                type='file'
                                class='form-control-file'
                                id='exampleFormControlFile1'
                                onChange={(e) =>
                                  this.setState({ file: e.target.files[0] })
                                }
                              />
                            </form>
                          </div>
                        </div>
                      </div>
                      <div className='upload_div'>
                        <MDBBtn
                          color='primary'
                          outline
                          rounded
                          onClick={this.onThisSubmit}
                        >
                          Upload
                        </MDBBtn>
                      </div>
                    </div>
                  </MDBTabPane>
                  <MDBTabPane tabId='2' role='tabpanel'>
                    <div className='row border2'>
                      <MDBContainer>
                        <MDBNav className='nav-tabs mt-5'>
                          <MDBNavItem>
                            <MDBNavLink
                              link
                              to='#'
                              active={this.state.activeItem === '3'}
                              onClick={this.toggle('3')}
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
                              active={this.state.activeItem === '5'}
                              onClick={this.toggle('5')}
                              role='tab'
                            >
                              Remove Centers
                            </MDBNavLink>
                          </MDBNavItem>
                        </MDBNav>
                        <MDBTabContent activeItem={this.state.activeItem}>
                          <MDBTabPane tabId='3' role='tabpanel'>
                            <div className='upload_input1'>
                              <div class={this.state.uploadClass}>
                                <div class='file-select'>
                                  <div class='file-select-button' id='fileName'>
                                    Choose File
                                  </div>

                                  {this.state.file !== '' ? (
                                    <div class='file-select-name' id='noFile'>
                                      {this.state.file.name}
                                    </div>
                                  ) : (
                                    <div class='file-select-name' id='noFile'>
                                      No file chosen...
                                    </div>
                                  )}

                                  <form>
                                    <input
                                      type='file'
                                      class='form-control-file'
                                      id='exampleFormControlFile1'
                                      onChange={(e) =>
                                        this.setState({
                                          file: e.target.files[0],
                                        })
                                      }
                                    />
                                  </form>
                                </div>
                              </div>
                            </div>
                            <div className='upload_div1'>
                              <MDBBtn
                                color='primary'
                                outline
                                rounded
                                onClick={this.onThisSubmit}
                              >
                                Upload
                              </MDBBtn>
                            </div>
                          </MDBTabPane>
                          <MDBTabPane tabId='4' role='tabpanel'>
                            <div className='upload_input1'>
                              <div class={this.state.uploadClass}>
                                <div class='file-select'>
                                  <div class='file-select-button' id='fileName'>
                                    Choose File
                                  </div>

                                  {this.state.file !== '' ? (
                                    <div class='file-select-name' id='noFile'>
                                      {this.state.file.name}
                                    </div>
                                  ) : (
                                    <div class='file-select-name' id='noFile'>
                                      No file chosen...
                                    </div>
                                  )}

                                  <form>
                                    <input
                                      type='file'
                                      class='form-control-file'
                                      id='exampleFormControlFile1'
                                      onChange={(e) =>
                                        this.setState({
                                          file: e.target.files[0],
                                        })
                                      }
                                    />
                                  </form>
                                </div>
                              </div>
                            </div>
                            <div className='upload_div1'>
                              <MDBBtn
                                color='primary'
                                outline
                                rounded
                                onClick={this.onThisSubmit}
                              >
                                Upload
                              </MDBBtn>
                            </div>
                          </MDBTabPane>
                          <MDBTabPane tabId='5' role='tabpanel'>
                            <div className='delete_table'>
                              {' '}
                              <TableNew
                                entries='5'
                                pageamount='10'
                                tabledata={this.state.tabledata}
                              />
                            </div>
                          </MDBTabPane>
                        </MDBTabContent>
                      </MDBContainer>
                    </div>
                  </MDBTabPane>
                </MDBTabContent>
              </MDBContainer>
            </div>

            <br />

            {/*    {this.props.dataError !== null ? (
                <div className='row error_div'>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Column</th>
                        <th>Row</th>
                        <th>Value</th>
                      </tr>
                    </thead>

                    {this.renderTableError()}
                  </Table>
                </div>
              ) : (
                <div className='row error_div'>
                  {' '}
                  <Spinner />
                </div>
              )} */}
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
    misUpload: (token, file) => dispatch(actions.misUpload(token, file)),
    getMisError: (token, id) => dispatch(actions.getMisError(token, id)),
  };
};

const mapStateToProps = (state) => {
  return {
    data: state.mis.data,
    dataError: state.misError.error_data,
    errorDataLoading: state.misError.loading,
    validated: state.mis.data !== null,
    isvalidated: state.misError.data !== null,
    token: state.auth.token,
    errorvalidated: state.mis.data,
    statusId: state.mis.statusId,
    loading: state.mis.loading,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Upload);
