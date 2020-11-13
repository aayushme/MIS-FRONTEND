import React from 'react'
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCogs, faThumbsDown, faNewspaper, faPlus,faFile,faInfo,faSignal } from '@fortawesome/free-solid-svg-icons'

const List = (props)=>{
    let iconName

    switch(props.icon_name){
        case("faSignal"):
        iconName = faSignal;
        break;
        case("faCogs"):
        iconName=faCogs;
        break;
        case("faNewspaper"):
        iconName = faNewspaper;
        break;
        case("faThumbsDown"):
        iconName=faThumbsDown;
        break;
        case("faPlus"):
        iconName = faPlus;
        break;
        case("faFile"):
        iconName=faFile;
        break;
        case("faInfo"):
        iconName = faInfo;
        break;
        case(null):
        iconName=null;
        default:
            iconName=props.icon_name;
        
    }

    return(
        <div >
            <li class="nav-item">
              <Link to={props.to} class="nav-link text-dark fonts_are" >
                        <i class="fa fa-th-large mr-3 text-primary fa-fw"></i>
                        <FontAwesomeIcon className = "icons_nav" icon={iconName}/>{props.link_name}
                    </Link>
            </li>

        </div>
    )
}

export default List;