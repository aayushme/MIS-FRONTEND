import React,{Component} from 'react'
import { Dropdown } from 'react-bootstrap';
import './input.css'
import * as actions from "../../../store/actions/index"
import {connect} from 'react-redux';
import Modal from "../../utils/modal/modal"

class CustomDropdown extends Component{

    state={
        show:false,
        confirm_value:null
    }

    handleClose = (e) =>{
        e.preventDefault();
        this.setState({show:false});
    }

    handleUsersPost = (username) =>{
        this.setState({show:true,confirm_value:username});
    }
    handleConfirm = (username)=>{
        console.log(username);


    }



    renderDropdown = () => {
        let data;
        switch(this.props.designation){
            case('ZM'):data=this.props.user_data_pm;
            break;
            case('PM'):data=this.props.user_data_zm;
            break;
            default:data=null;
        }

        return data.map(value => {
            return (
              
                <Dropdown.Item href="#" onClick={()=>this.handleUsersPost(value.user.username)} >{value.user.username}</Dropdown.Item>
            )
        })
      }

    render(){
    return(
        <div >
            <Modal onClick={this.handleClose} show={this.state.show} message="  " confirm="Confirm post to user?" button_message="confirm" button_class="confirm_button" handleButton={()=>this.handleConfirm(this.state.confirm_value)} />
           <div className="dropdown">
        <Dropdown>
        <Dropdown.Toggle 
        variant="secondary btn-sm" 
        id="dropdown-basic">
            Users
        </Dropdown.Toggle>

        <Dropdown.Menu style={{backgroundColor:'#73a47'}}>
            {this.renderDropdown()}
        </Dropdown.Menu>
        </Dropdown>
</div>

        </div>
    )
}
}

const mapDispatchToProps = dispatch =>{
    return {
      
    }
  }
  
  const mapStateToProps = state =>{
      return{
        token : state.auth.token,
        user_data_pm:state.project.user_data_pm,
        user_data_zm:state.project.user_data_zm,
        designation:state.auth.designation
      }
    }

export default connect(mapStateToProps,mapDispatchToProps)(CustomDropdown);