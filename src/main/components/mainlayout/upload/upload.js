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
import { connect } from 'react-redux';

class Upload extends Component {
  /*------------------States--------------------*/

  state = {
    file: '',
    show: false,
    uploadClass: 'file-upload',
    showErrors: false,
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

          <div className='page-content overflow-hidden' id='content'>
            <div className='jumbotron overflow_cont'>
              <div className='row border1'>
                <div className='col-sm-5'>
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
                <div className='col-sm-7'>
                  <button
                    type='submit'
                    className='btn btn-dark'
                    onClick={this.onThisSubmit}
                  >
                    Upload
                  </button>
                </div>
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
