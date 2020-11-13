import React,{Component} from 'react';
import Header from '../header/header'
import Navbar from "../navbar/navbar"
import {connect} from 'react-redux';
import {Table} from "react-bootstrap"
import "./project.css"
import * as actions from "../../../store/actions/index"


class ProjectDetail extends Component{

  componentDidMount(){
this.props.getProjectDetails(this.props.token,'1');
  }

  renderTable = () => {
    return this.props.project_data.map(value => {
        return (
          
          
          <tbody>
            <tr>
              
           <td>{value.id}</td>
           <td>{value.code}</td>
           <td>{value.pm}</td>
           <td>{value.zone}</td>
           <td>{value.state}</td>
           <td>{value.city}</td>
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
<h1 className="lead">ProjectDetail</h1>
<div className="project_table_div">
<Table striped bordered hover>
    <thead>
            <tr>
              
              <th>S.No.</th>
              <th>Project Code</th>
              <th>PM</th>
              <th>Zone</th>
              <th>State</th>
              <th>City</th>
            </tr>
          </thead>
          {this.renderTable()}
    
      </Table>
    

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
    
  }
}
const mapStateToProps = state =>{
  return{
    token : state.auth.token, 
    project_data : state.project.project_data
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(ProjectDetail);