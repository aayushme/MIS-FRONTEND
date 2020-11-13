import React,{Component} from 'react'
import {connect} from 'react-redux';
import Navbar from "../navbar/navbar"
import Header from "../header/header"

class Dashboard extends Component{
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
<div className="jumbotron overflow-cont">

    

  </div>

</div>

    </div>
    </div>
    
   </>
        );
    }
}

const mapStateToProps = state =>{
    return{
      name : state.auth.name= "AAYUSH",
      designation : state.auth.designation
    }
  }

export default connect(mapStateToProps)(Dashboard);