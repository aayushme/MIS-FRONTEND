import React from 'react';
import Header from '../header/header'
import Navbar from "../navbar/navbar"


function Upload(){
    return(
        
<div className="container_absolute">

<Header/>
    <div>
      
      <br/>
    
      <div class="vertical-nav bg-white" id="sidebar">
  <Navbar/>

 
</div>

<div class="page-content p-5" id="content">
 
  
 
  <h2 class="display-4 text-white">Upload Sheets</h2>
 
 

</div>

    </div>
    </div>
    );
}

export default Upload;