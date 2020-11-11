import React,{Component} from 'react';
import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCogs, faThumbsDown, faNewspaper, faPlus,faFile,faInfo,faSignal } from '@fortawesome/free-solid-svg-icons'
import "./navbar.css"
import {Link} from 'react-router-dom'



class Sidebar extends Component  {

  
    render(){
        let main_view = null;

        switch(this.props.designation ){
            case("MIS"):
            main_view =<ul class="nav flex-column bg-white mb-0">
            <li class="nav-item">
              <Link to="/main/dashboard" class="nav-link text-dark fonts_are" >
                        <i class="fa fa-th-large mr-3 text-primary fa-fw"></i>
                        <FontAwesomeIcon className = "icons_nav" icon={faSignal}/>Dashboard
                    </Link>
            </li>
            <li class="nav-item">
              <Link to="/main/upload" class="nav-link text-dark fonts_are" >
                        <i class="fa fa-address-card mr-3 text-primary fa-fw"></i>
                        <FontAwesomeIcon className = "icons_nav" icon={faNewspaper}/>Upload Sheet
                    </Link>
            </li>
            <li class="nav-item">
              <Link to="/main/report" class="nav-link text-dark fonts_are ">
                        <i class="fa fa-cubes mr-3 text-primary fa-fw"></i>
                        <FontAwesomeIcon className = "icons_nav" icon={faFile}/>Reports
                    </Link>
            </li>
           
          </ul>
          break;
          case("ZM"):
          main_view=<ul class="nav flex-column bg-white mb-0">
          <li class="nav-item">
            <Link to="/main/dashboard" class="nav-link text-dark fonts_are">
                      <i class="fa fa-th-large mr-3 text-primary fa-fw"></i>
                      <FontAwesomeIcon className = "icons_nav" icon={faSignal}/> Dashboard
                  </Link>
          </li>
          <li class="nav-item">
            <a to="/main/dashboard" class="nav-link text-dark fonts_are">
                      <i class="fa fa-address-card mr-3 text-primary fa-fw"></i>
                      <FontAwesomeIcon className = "icons_nav" icon={faPlus}/>New Allocations
                  </a>
          </li>
          <li class="nav-item">
            <Link to="/main/dashboard" class="nav-link text-dark fonts_are">
                      <i class="fa fa-cubes mr-3 text-primary fa-fw"></i>
                      <FontAwesomeIcon className = "icons_nav" icon={faInfo}/>Project Details
                  </Link>
          </li>
          <li class="nav-item">
            <Link to="/main/dashboard" class="nav-link text-dark fonts_are">
                      <i class="fa fa-picture-o mr-3 text-primary fa-fw"></i>
                      <FontAwesomeIcon className = "icons_nav" icon={faThumbsDown}/>Disputed Centres
                  </Link>
          </li>
          <li class="nav-item">
            <Link to="/main/dashboard" class="nav-link text-dark fonts_are">
                      <i class="fa fa-picture-o mr-3 text-primary fa-fw"></i>
                      <FontAwesomeIcon className = "icons_nav" icon={faCogs}/>QC Status
                  </Link>
          </li>
          <li class="nav-item">
            <Link to="/main/dashboard" class="nav-link text-dark fonts_are">
                      <i class="fa fa-picture-o mr-3 text-primary fa-fw"></i>
                      <FontAwesomeIcon className = "icons_nav" icon={faSignal}/>MOCK Status
                  </Link>
          </li>
          <li class="nav-item">
            <Link to="/main/dashboard" class="nav-link text-dark fonts_are">
                      <i class="fa fa-picture-o mr-3 text-primary fa-fw"></i>
                      <FontAwesomeIcon className = "icons_nav" icon={faNewspaper}/>Reports
                  </Link>
          </li>
        </ul>
          break;
          
          case("PM"):
          main_view=<ul class="nav flex-column bg-white mb-0 hover_prop">
      <li class="nav-item">
            <Link to="/main/dashboard" class="nav-link text-dark fonts_are">
                      <i class="fa fa-th-large mr-3 text-primary fa-fw"></i>
                      <FontAwesomeIcon className = "icons_nav" icon={faSignal}/>Dashboard
                  </Link>
          </li>
          <li class="nav-item">
            <Link to="/main/dashboard" class="nav-link text-dark fonts_are">
                      <i class="fa fa-address-card mr-3 text-primary fa-fw"></i>
                      <FontAwesomeIcon className = "icons_nav" icon={faPlus}/>New Allocations
                  </Link>
          </li>
          <li class="nav-item">
            <Link to="/main/dashboard" class="nav-link text-dark fonts_are">
                      <i class="fa fa-cubes mr-3 text-primary fa-fw"></i>
                      <FontAwesomeIcon className = "icons_nav" icon={faInfo}/>Project Details
                  </Link>
          </li>
          <li class="nav-item">
            <Link to="/main/dashboard" class="nav-link text-dark fonts_are">
                      <i class="fa fa-picture-o mr-3 text-primary fa-fw"></i>
                      <FontAwesomeIcon className = "icons_nav" icon={faThumbsDown}/>Disputed Centres
                  </Link>
          </li>
          <li class="nav-item">
            <Link to="/main/dashboard" class="nav-link text-dark fonts_are">
                      <i class="fa fa-picture-o mr-3 text-primary fa-fw"></i>
                      <FontAwesomeIcon className = "icons_nav" icon={faCogs}/>QC Status
                  </Link>
          </li>
          <li class="nav-item">
            <Link to="/main/dashboard" class="nav-link text-dark fonts_are">
                      <i class="fa fa-picture-o mr-3 text-primary fa-fw"></i>
                      <FontAwesomeIcon className = "icons_nav" icon={faSignal}/>MOCK Status
                  </Link>
          </li>
          <li class="nav-item">
            <Link to="/main/dashboard" class="nav-link text-dark fonts_are">
                      <i class="fa fa-picture-o mr-3 text-primary fa-fw"></i>
                      <FontAwesomeIcon className = "icons_nav" icon={faNewspaper}/>Reports
                  </Link>
          </li>
        </ul>
          break;
          default:
              main_view=<ul class="nav flex-column bg-white mb-0">
              <li class="nav-item">
                <Link to="/main/dashboard" class="nav-link text-dark fonts_are">
                          <i class="fa fa-th-large mr-3 text-primary fa-fw"></i>
                          <FontAwesomeIcon className = "icons_nav" icon={faSignal}/>Dashboard
                      </Link>
              </li>
              <li class="nav-item">
                <Link to="/main/dashboard" class="nav-link text-dark fonts_are">
                          <i class="fa fa-address-card mr-3 text-primary fa-fw"></i>
                          <FontAwesomeIcon className = "icons_nav" icon={faSignal}/>About
                      </Link>
              </li>
              <li class="nav-item">
                <Link to="/main/dashboard" class="nav-link text-dark fonts_are">
                          <i class="fa fa-cubes mr-3 text-primary fa-fw"></i>
                          <FontAwesomeIcon className = "icons_nav" icon={faSignal}/>Services
                      </Link>
              </li>
              <li class="nav-item">
                <Link to="/main/dashboard" class="nav-link text-dark fonts_are">
                          <i class="fa fa-picture-o mr-3 text-primary fa-fw"></i>
                          <FontAwesomeIcon className = "icons_nav" icon={faSignal}/>Gallery
                      </Link>
              </li>
            </ul>

        }


    return (

        <div>
         
  <div class="py-4 px-3 mb-4 bg-light">
    <div class="media d-flex align-items-center"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556074849/avatar-1_tcnd60.png" alt="..." width="65" class="mr-3 rounded-circle img-thumbnail shadow-sm"/>
      <div class="media-body">
    <h4 class="m-0">{this.props.name}</h4>
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
      name : state.auth.name= "Aayush",
      designation : state.auth.designation
    }
  }

export default connect(mapStateToProps)(Sidebar);