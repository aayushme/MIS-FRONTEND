import React,{Component} from 'react';
import {connect} from 'react-redux';
import "./navbar.css"
import List from "../../utils/list/list"



class Sidebar extends Component  {

  
    render(){
        let main_view = null;

        switch(this.props.designation ){
            case("MIS"):
            main_view =<ul class="nav flex-column bg-white mb-0">
            <List to="/main/dashboard" link_name = "Dashboard" icon_name = "faSignal"/>
            <List to="/main/upload" link_name = "Upload Sheet" icon_name = "faNewspaper"/>
            <List to="/main/report" link_name = "Reports" icon_name = "faFile"/>   
          </ul>
          break;
          case("ZM"):
          main_view=<ul class="nav flex-column bg-white mb-0">
           <List to="/main/dashboard" link_name = "Dashboard" icon_name = "faSignal"/>
           <List to="/main/dashboard" link_name = "New Allocations" icon_name = "faPlus"/>
           <List to="/main/dashboard" link_name = "Project Details" icon_name = "faInfo"/>
           <List to="/main/dashboard" link_name = "Disputed Centres" icon_name = "faThumbsDown"/>
           <List to="/main/dashboard" link_name = "QC Status" icon_name = "faCogs"/>
           <List to="/main/dashboard" link_name = "MOCK Status" icon_name = "faSignal"/>
           <List to="/main/dashboard" link_name = "Reports" icon_name = "faNewspaper"/>
        </ul>
          break;
          
          case("PM"):
          main_view=<ul class="nav flex-column bg-white mb-0 hover_prop">
      <List to="/main/dashboard" link_name = "Dashboard" icon_name = "faSignal"/>
           <List to="/main/dashboard" link_name = "New Allocations" icon_name = "faPlus"/>
           <List to="/main/dashboard" link_name = "Project Details" icon_name = "faInfo"/>
           <List to="/main/dashboard" link_name = "Disputed Centres" icon_name = "faThumbsDown"/>
           <List to="/main/dashboard" link_name = "QC Status" icon_name = "faCogs"/>
           <List to="/main/dashboard" link_name = "MOCK Status" icon_name = "faSignal"/>
           <List to="/main/dashboard" link_name = "Reports" icon_name = "faNewspaper"/>
        </ul>
          break;
          default:
              main_view=<ul class="nav flex-column bg-white mb-0">
               <List to="/main/dashboard" link_name = "Dashboard" icon_name = "faSignal"/>
           <List to="/main/dashboard" link_name = "New Allocations" icon_name = "faPlus"/>
           <List to="/main/dashboard" link_name = "Project Details" icon_name = "faInfo"/>
           <List to="/main/dashboard" link_name = "Disputed Centres" icon_name = "faThumbsDown"/>
           <List to="/main/dashboard" link_name = "QC Status" icon_name = "faCogs"/>
           <List to="/main/dashboard" link_name = "MOCK Status" icon_name = "faSignal"/>
           <List to="/main/dashboard" link_name = "Reports" icon_name = "faNewspaper"/>
            </ul>

        }


    return (

        <div>
         
  <div class="py-4 px-3 mb-4 bg-light">
    <div class="media d-flex align-items-center"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556074849/avatar-1_tcnd60.png" alt="..." width="65" class="mr-3 rounded-circle img-thumbnail shadow-sm"/>
      <div class="media-body">
    <h4 class="m-0">{(this.props.name)?this.props.name:"Aayush Tyagi"}</h4>
    <p class="font-weight-light text-muted mb-0">{this.props.designation} User</p>
      </div>
    </div>
  </div>


  <div className="media align-items-left left_align">{main_view}</div>

  

  
</div>
          
    );
}
}


const mapStateToProps = state =>{
    return{
      name : state.auth.name,
      designation : state.auth.designation
    }
  }

export default connect(mapStateToProps)(Sidebar);