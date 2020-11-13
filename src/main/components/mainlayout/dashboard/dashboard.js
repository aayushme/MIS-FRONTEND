import React,{Component} from 'react'
import {connect} from 'react-redux';
import Navbar from "../navbar/navbar"
import Header from "../header/header"
import * as actions from "../../../store/actions/index"
import Graphs from "../../utils/graphs/graphs"
import "./dashboard.css"

class Dashboard extends Component{
  componentDidMount(){

    /*=========Calling all graphs=======*/ 

    this.props.getCountByCenter(this.props.token);
    this.props.getCountByInstallation(this.props.token);
    this.props.getCountByQC(this.props.token);
    this.props.getCountByMock(this.props.token);

  }
    render(){
        return(
            <>
            <div classNameName="container_absolute">

<Header/>
    <div>    
      <br/>
      <div className="vertical-nav bg-white" id="sidebar">
  <Navbar/>
</div>

<div className="page-content" id="content">
<div className="jumbotron">
  <div className="graph-cont">

  <div className="row">
    <div className="col-sm-6">
    <Graphs jsonData="" captions="" /> 
  </div>

  <div className="col-sm-6">
    <Graphs jsonData="" captions="" /> 
  </div>
  </div>
  <br/>
  <br/>
  <br/>

  <div className="row ">
  <div className="col-sm-6">
    <Graphs jsonData="" captions="" /> 
  </div>
  

  <div className="col-sm-6">
    <Graphs jsonData="" captions="" /> 
    </div>

  </div>
  </div>

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
    getCountByCenter: (token) =>  dispatch(actions.getCountByCenter(token)),
    getCountByInstallation: (token) => dispatch(actions.getCountByInstallation(token)),
    getCountByQC: (token) => dispatch(actions.getCountByQC(token)),
    getCountByMock:(token) => dispatch(actions.getCountByMock(token))
  }
}

const mapStateToProps = state =>{
    return{
      name : state.auth.name= "AAYUSH",
      designation : state.auth.designation,
      token : state.auth.token,
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);