import React,{Component} from 'react';
import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCogs, faColumns, faEdit, faUser } from '@fortawesome/free-solid-svg-icons'



class Sidebar extends Component  {

    render(){
        let main_view = null;


        switch(this.props.designation ){
            case("MIS"):
            main_view = <ul class="admin-menu">
            <li class="menu-heading">
            
              <h3>Dashboard</h3>
            </li>
            <li>
              <a href="#0">
                <span><FontAwesomeIcon icon={faUser} />View</span>
              </a>
            </li>
            <li>
              <a href="#0">
                
                <span><FontAwesomeIcon icon={faEdit} />Add CSV</span>
              </a>
            </li>
            <li class="menu-heading">
            
              <h3>Settings</h3>
            </li>
            <li></li>
            <li>
              <a href="#0">
                  
                  <span><FontAwesomeIcon icon={faCogs} />Settings</span>
                </a>
            </li>
            
          </ul>
          break;
          case("ZM"):
          main_view=<ul class="admin-menu">
          <li class="menu-heading">
            <h3>Admin</h3>
          </li>
          <li>
            <a href="#0">
              <span>Pages</span>
            </a>
          </li>
          <li>
            <a href="#0">
              
              <span>Users</span>
            </a>
          </li>
          <li>
            <a href="#0">
                
                <span>Trends</span>
              </a>
          </li>
          <li>
            <a href="#0">
              
              <span>Collection</span>
            </a>
          </li>
        </ul>
          break;
          case("PC"):
          main_view=<ul class="admin-menu">
          <li class="menu-heading">
            <h3>Admin</h3>
          </li>
          <li>
            <a href="#0">
              <span>Pages</span>
            </a>
          </li>
          <li>
            <a href="#0">
              
              <span>Users</span>
            </a>
          </li>
          <li>
            <a href="#0">
                
                <span>Trends</span>
              </a>
          </li>
          <li>
            <a href="#0">
              
              <span>Collection</span>
            </a>
          </li>
        </ul>
          break;
          case("PM"):
          main_view=<ul class="admin-menu">
          <li class="menu-heading">
            <h3>Admin</h3>
          </li>
          <li>
            <a href="#0">
              <span>Pages</span>
            </a>
          </li>
          <li>
            <a href="#0">
              
              <span>Users</span>
            </a>
          </li>
          <li>
            <a href="#0">
                
                <span>Trends</span>
              </a>
          </li>
          <li>
            <a href="#0">
              
              <span>Collection</span>
            </a>
          </li>
        </ul>
          break;
          default:
              main_view=<ul class="admin-menu">
              <li class="menu-heading">
                <h3>Admin</h3>
              </li>
              <li>
                <a href="#0">
                  <span>Pages</span>
                </a>
              </li>
              <li>
                <a href="#0">
                  
                  <span>Users</span>
                </a>
              </li>
              <li>
                <a href="#0">
                    
                    <span>Trends</span>
                  </a>
              </li>
              <li>
                <a href="#0">
                  
                  <span>Collection</span>
                </a>
              </li>
            </ul>

        }


    return (

        <div>
          <nav>
              {/*<div className="nav_h">{(this.props.img)?<img src={this.props.name} className="nav_img" alt = "none"/>:<FontAwesomeIcon className="nav_icon" icon={faUser} />}</div>
            */}
    <h1>MIS PORTAL</h1>
              {main_view}
          </nav>
        </div>
    );
}
}


const mapStateToProps = state =>{
    return{
      name : state.auth.name= "AAYUSH",
      designation : state.auth.designation
    }
  }

export default connect(mapStateToProps)(Sidebar);