import React, { Component } from 'react';
import { MDBBtn } from 'mdbreact';
import Modal from '../../utils/modal/modal';
import FullSpinner from '../../utils/fullspinner/fullspinner';
import * as actions from '../../../store/actions/index';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import Success from '../../utils/modal/success';

class UploadNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      show: false,
      uploadClass: 'file-upload',
      showErrors: false,
    };
  }

  /*------------------Handle Error Modal--------------------*/

  handleValidationError = (id) => {
    this.setState({ showErrors: true });
  };

  /*------------------Getting Errors--------------------*/

  handleError = (id) => {
    this.props.getMisError(this.props.token, id);
    this.setState({ showErrors: true });
  };

  handleErrorsIn = () => {
    this.interval = setInterval(() => {
      if (this.props.statusId !== null) {
        this.props.getMisError(this.props.token, this.props.statusId);
      }
      console.log('Aayush');
    }, 7000);
  };

  /*------------------Render Errors Table--------------------*/

  renderTableError = () => {
    return this.props.dataError.map((value) => {
      let tableData = [{ id: value.id }, { column: value.column }];
      console.log('nnn' + tableData.id);

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
  /*------------------Handle Modal Close--------------------*/

  handleClose = (e) => {
    e.preventDefault();
    this.setState({ show: false, showErrors: false, showDeleteStatus: false });
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
        this.handleErrorsIn();
        this.setState({ uploadClass: 'file-upload active', showErrors: true });
      } else {
        this.setState({ show: true, uploadClass: 'file-upload danger' });
      }
    }
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
        <Success success_message='Successfully Uploaded' />
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
    return (
      <div>
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
        <div className='row border1'>
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
            <MDBBtn color='primary' outline rounded onClick={this.onThisSubmit}>
              Upload
            </MDBBtn>
          </div>
        </div>
      </div>
    );
  }
}
/*----------------- REDUX --------------------*/

const mapDispatchToProps = (dispatch) => {
  return {
    misUpload: (token, file) => dispatch(actions.misUpload(token, file)),
    getMisError: (token, id) => dispatch(actions.getMisError(token, id)),
  };
};

const mapStateToProps = (state) => {
  return {
    dataError: state.misError.error_data,
    errorDataLoading: state.misError.loading,
    validated: state.mis.data !== null,
    token: state.auth.token,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadNew);
