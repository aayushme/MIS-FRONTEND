import React,{Component} from 'react';
import Header from '../header/header'
import Navbar from "../navbar/navbar"
import {connect} from 'react-redux';
import {Table} from "react-bootstrap"
import CustomDropdown from "../../utils/form/dropdown"
import "./project.css"
import * as actions from "../../../store/actions/index"
import {Spinner} from "react-bootstrap"


class ProjectDetail extends Component{

  componentDidMount(){
    switch(this.props.designation){
      case('ZM'): this.props.getPC(this.props.token);
      break;
      case('PM'):  this.props.getZM(this.props.token);
      break;
      default:
    }

     this.props.getProjectDetails(this.props.token);

       
  }

 

  renderTable = () => {
    return this.props.project_data.map(value => {
        return (
          
          
          <tbody>
            <tr>  
           <td>{value.id}</td>
           <td>{value.code}</td>
           {this.props.designation==='PC'?<td>{value.zm}</td>:<td>{value.pc}</td>}
           <td>{value.zone}</td>
           <td>{value.state}</td>
           <td>{value.city}</td>
           <td><CustomDropdown project_id={value.id} /></td>
            </tr>
            
          </tbody>
        
        )
    })
  }

render(){

    return(
        
<>

<Header/>
    <div>
      
      <br/>
    
      <div class="vertical-nav bg-white" id="sidebar">
  <Navbar/>
</div>

<div class="page-content" id="content">
  <div className="jumbotron overflow-cont">
<div className="project_table_div">
  {(this.props.project_data!==null)?<Table striped bordered hover>
    <thead>
            <tr>
              
              <th>S.No.</th>
              <th>Project Code</th>
              {this.props.designation==='PC'?<th>ZM</th>:<th>PC</th>}
              <th>Zone</th>
              <th>State</th>
              <th>City</th>
              <th>Select</th>
            </tr>
          </thead>
          {this.renderTable()}
    
  </Table>:<div className="spinner"><Spinner animation="grow" /></div>}

    

    </div>
    

  </div>
 
 
 

</div>

    </div>
    </>
    );
}
}
const mapDispatchToProps = dispatch =>{
  return {
    getProjectDetails: (token,id) =>  dispatch(actions.getProjectDetails(token,id)),
    getZM: (token) =>  dispatch(actions.getZM(token)),
    getPC: (token) => dispatch(actions.getPC(token)),
    
  }
}
const mapStateToProps = state =>{
  return{
    token : state.auth.token, 
    project_data : state.project.project_data,
    designation:state.auth.designation
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(ProjectDetail);