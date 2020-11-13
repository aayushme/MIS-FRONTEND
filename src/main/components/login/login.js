import React, { Component } from "react";
import  "./login.css";
import Input from "../utils/form/input"
import Button from "../utils/form/button";
import Header from "../mainlayout/header/header";
import * as actions from '../../store/actions/index'
import Modal from '../utils/modal/modal'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'


class Login extends Component{
  
  state={
    user_name:'',
    pwd:'',
    validator_pass:null,
    show1:true
  }

  handleLogin = (e) =>{
    if(this.state.user_name==='' || this.state.pwd===''){

      e.preventDefault();
      this.setState({validator_pass:"Enter Username/Password"});


    }
    else{
    e.preventDefault();
    this.props.onAuth(this.state.user_name,this.state.pwd);
    }
    
  }

  handleModalClose=(e)=>{
    e.preventDefault();
    this.setState({show1:false})
    
  }

 
  


  render(){

    let authRedirect = null;
    if(this.props.isAuthenticated){
      authRedirect = <Redirect to='/main/dashboard'/>
    }


    return(

      <div>
        <Header/>


      
<div className="logincont">
<Modal show={this.props.showmodal && this.state.show1} onClick={(e)=>this.handleModalClose(e)} message="Wrong Username/Pwd" />
  <div className="form">
  {authRedirect}
  
            <form onSubmit={this.handleLogin}>
              <Input
                inputType="input"              
                type="text"
                name="UsernameField"
                placeholder="username"
                onChange={(e) => this.setState({user_name:e.target.value})}
                value={this.state.user_name}
              />
              <Input
                label = {this.state.validator_pass}
                labelclass = "redlabel"
                inputType="input"
                type="password"
                name="PasswordField"
                placeholder="password"
                onChange={(e) => this.setState({pwd:e.target.value})}
                value={this.state.pwd}
              />
              <Button value_name="Login" />
              
              
              
            </form>
          </div>
          </div>
          </div>
  
    )
  }

}

const mapDispatchToProps = dispatch =>{
    return {
      onAuth : (user_name,pwd) => {
        dispatch(actions.auth(user_name,pwd));
      }
    }
}

const mapStateToProps = state =>{
  return{
    token : state.auth.token,
    error : state.auth.error,
    isAuthenticated : state.auth.token !==null,
    showmodal:state.auth.error!==null
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(Login);
