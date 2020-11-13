import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Redirect,Link } from 'react-router-dom';
import { connect } from 'react-redux';
import "./header.css";
import * as actions from '../../../store/actions/index';

class Header extends Component{

  callLogout = () => {
    this.props.onLogout();
    return <Redirect to="/"/>
  }

render(){
    return(
        
<div className="topnav">
  <a className="mis_b" href="#home">MisPortal</a>
  <Link className="mis_a" to="/" onClick = {this.callLogout}><FontAwesomeIcon icon={faSignOutAlt} /></Link>
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