import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import './input.css';
import * as actions from '../../../store/actions/index';
import { connect } from 'react-redux';
import Modal from '../../utils/modal/modal';

class CustomDropdown extends Component {
  state = {
    show: false,
    confirm_value: null,
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
  }

  handleClose = (e) => {
    e.preventDefault();
    this.setState({ show: false });
  };

  handleUsersPost = (username) => {
    this.setState({ show: true, confirm_value: username });
  };
  handleConfirm = (username, id) => {
    /*API*/

    switch (this.props.designation) {
      case 'ZM':
        this.props.putProjectsPC(this.props.token, id, username);
        break;
      case 'PM':
        this.props.putProjectsZM(this.props.token, id, username);
        break;
      default:
    }
  };

  renderDropdown = () => {
    let data;
    switch (this.props.designation) {
      case 'ZM':
        data = this.props.user_data_pc;
        break;
      case 'PM':
        data = this.props.user_data_zm;
        break;
      default:
        data = null;
    }

    return data.map((value) => {
      return (
        <Dropdown.Item href='#' onClick={() => this.handleUsersPost(value.id)}>
          {value.user.username}
        </Dropdown.Item>
      );
    });
  };

  render() {
    return (
      <div>
        <Modal
          onClick={this.handleClose}
          show={this.state.show}
          message='  '
          confirm='Confirm post to user?'
          button_message='confirm'
          button_class='confirm_button'
          handleButton={() =>
            this.handleConfirm(this.state.confirm_value, this.props.project_id)
          }
        />
        <div className='dropdown'>
          <Dropdown>
            <Dropdown.Toggle variant='secondary btn-sm' id='dropdown-basic'>
              {this.props.name}
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ backgroundColor: '#73a47' }}>
              {this.renderDropdown()}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    putProjectsPC: (token, id, username) =>
      dispatch(actions.putProjectsPC(token, id, username)),
    putProjectsZM: (token, id, username) =>
      dispatch(actions.putProjectsZM(token, id, username)),
    getZM: (token) => dispatch(actions.getZM(token)),
    getPC: (token) => dispatch(actions.getPC(token)),
  };
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    user_data_pc: state.project.user_data_pc,
    user_data_zm: state.project.user_data_zm,
    designation: state.auth.designation,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomDropdown);
