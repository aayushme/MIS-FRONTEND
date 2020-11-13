import React from 'react';
import Header from '../header/header'
import Navbar from "../navbar/navbar"


function ProjectDetail(){
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
    

  </div>
 
 
 

</div>

    </div>
    </>
    );
}

export default ProjectDetail;