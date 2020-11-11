import React,{Component} from 'react';
import {Modal} from 'react-bootstrap'
import {connect} from 'react-redux'

class modal extends Component{

  handleClose = ()=>{
    
  }
    render(){
      let show_is = this.props.isAuthenticated;

    return(
      <>

        <Modal show={show_is} onHide={this.handleClose()}>
        <Modal.Header closeButton>
        <Modal.Title><h1 >{this.props.error}</h1></Modal.Title>
        </Modal.Header>
        
      </Modal>
      </>
    );
}
}
const mapStateToProps = state =>{
  return{
    token : state.auth.token,
    error : state.auth.error,
    isAuthenticated : state.auth.error !== null
  }
}


export default connect(mapStateToProps)(modal);
