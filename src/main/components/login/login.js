import React, { Component } from 'react';
import './login.css';
import Header from '../mainlayout/header/header';
import * as actions from '../../store/actions/index';
import Modal from '../utils/modal/modal';
import image from './login.png';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import FullSpinner from '../utils/fullspinner/fullspinner';
import { MDBBtn, MDBInput } from 'mdbreact';

class Login extends Component {
  state = {
    user_name: '',
    pwd: '',
    validator_pass: null,
    show1: true,
  };

  handleLogin = (e) => {
    if (this.state.user_name === '' || this.state.pwd === '') {
      e.preventDefault();

      this.setState({
        validator_pass: 'Enter Username/Password',
      });
    } else {
      e.preventDefault();
      this.props.onAuth(this.state.user_name, this.state.pwd);
    }
  };

  handleModalClose = (e) => {
    e.preventDefault();

    this.setState({
      show1: false,
    });
  };

  render() {
    let authRedirect = null;

    if (this.props.isAuthenticated) {
      authRedirect = <Redirect to='/main/dashboard' />;
    }

    return (
      <div>
        <div className='logincont'>
          <Modal
            show={this.props.showmodal && this.state.show1}
            onClick={(e) => this.handleModalClose(e)}
            message='Wrong Username/Pwd'
          />{' '}
          <div className='form'>
            <div className='row'>
              <div className='col-sm-4 login_color'>
                <img className='login_image' src={image} />
              </div>
              <div className='col-sm-8 login_form'>
                {this.props.loading ? <FullSpinner /> : authRedirect}
                <form>
                  <h4 className='login_icon'>Login</h4>{' '}
                  <MDBInput
                    label='UserName'
                    placeholder='username'
                    onChange={(e) =>
                      this.setState({
                        user_name: e.target.value,
                      })
                    }
                    value={this.state.user_name}
                  />{' '}
                  <MDBInput
                    label='Password'
                    type='password'
                    name='PasswordField'
                    placeholder='password'
                    onChange={(e) =>
                      this.setState({
                        pwd: e.target.value,
                      })
                    }
                    value={this.state.pwd}
                  />{' '}
                  <MDBBtn
                    outline
                    rounded
                    color='primary'
                    onClick={this.handleLogin}
                  >
                    Login
                  </MDBBtn>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (user_name, pwd) => {
      dispatch(actions.auth(user_name, pwd));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null,
    showmodal: state.auth.error !== null,
    loading: state.auth.loading,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
