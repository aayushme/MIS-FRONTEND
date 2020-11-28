import React, { Component } from 'react';
import Header from '../header/header';
import Navbar from '../navbar/navbar';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import CustomDropdown from '../../utils/form/dropdown';
import '../projectdetail/project.css';
import * as actions from '../../../store/actions/index';
import TableNew from '../../utils/tablenew/tablenew';

class TableAllocations extends Component {
  state = {
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
      ],
    },
  };

  componentDidMount() {
    switch (this.props.designation) {
      case 'ZM':
        this.props.getPC(this.props.token);
        break;
      case 'PM':
        this.props.getZM(this.props.token);
        break;
      default:
    }
    this.props.getProjectDetails(this.props.token);
  }

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
            <td>
              <CustomDropdown project_id={value.id} name='Users' />
            </td>
          </tr>
        </tbody>
      );
    });
  };

  render() {
    return (
      <>
        {this.props.project_data !== null ? (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Project Code</th>
                {this.props.designation === 'PM' ? <th>ZM</th> : <th>PC</th>}
                <th>Zone</th>
                <th>State</th>
                <th>City</th>
                <th>Select</th>
              </tr>
            </thead>
            {this.renderTable()}
          </Table>
        ) : (
          <div className='spinner'></div>
        )}
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

export default connect(mapStateToProps, mapDispatchToProps)(TableAllocations);
