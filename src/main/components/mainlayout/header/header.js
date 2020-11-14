import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link,useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import Modal from "../../utils/modal/modal"
import "./header.css";
import * as actions from '../../../store/actions/index';

class Header extends Component{

  state={
    show:false
  }

  

  callLogout = () => {
    console.log("LOGOUT")
    this.props.onLogout();
  }
  callLogoutModal=(e)=>{
    e.preventDefault();
    this.setState({show:true});
  }
  handleClose = (e) =>{
    e.preventDefault();
    this.setState({show:false});
}

render(){
  
    return(
        
<div className="topnav">
<Modal onClick={this.handleClose} show={this.state.show} message="  " confirm="Confirm Logout?" button_message="confirm" button_class="confirm_button" type="link" handleButton={this.callLogout} />
  <a className="mis_b" href="#home">MisPortal</a>
  <Link className="mis_a" to="/" onClick = {this.callLogoutModal}><FontAwesomeIcon icon={faSignOutAlt} /></Link>
</div>
    );
}
}

const mapDispatchToProps = dispatch => {
  return {
      onLogout: () => dispatch(actions.logout())
  };
};

export default connect(null, mapDispatchToProps)(Header);