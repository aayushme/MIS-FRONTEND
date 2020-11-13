import React,{Component} from 'react'
import { Dropdown } from 'react-bootstrap';
import './input.css'
import * as actions from "../../../store/actions/index"
import {connect} from 'react-redux';

class CustomDropdown extends Component{


    renderDropdown = () => {
        return this.props.user_data_zm.map(value => {
            return (
              
                <Dropdown.Item href="#" >{value.user.username}</Dropdown.Item>
            )
        })
      }

    render(){
    return(
        <div >
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
        user_data_zm:state.project.user_data_zm
      }
    }

export default connect(mapStateToProps,mapDispatchToProps)(CustomDropdown);