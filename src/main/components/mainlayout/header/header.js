import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import "./header.css";

function Header(){
    return(
        
<div className="topnav">
  <a className="mis_b" href="#home">MisPortal</a>
  <a className="mis_a" href="#"><FontAwesomeIcon icon={faSignOutAlt} /></a>
</div>
    );
}

export default Header;