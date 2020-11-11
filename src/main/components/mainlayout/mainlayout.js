import React from "react";
import Sidebar from './navbar/navbar'
import "./main.css"
import Header from './header/header'
import Navbar from "./navbar/navbar"


function MainLayout() {
  return (
<div className="container_absolute">

<Header/>
    <div>
      
      <br/>
    
      <div class="vertical-nav bg-white" id="sidebar">
  <Navbar/>

 
</div>

<div class="page-content p-5" id="content">
 
  
 
  <h2 class="display-4 text-white">Dashboard</h2>
 
 

</div>

    </div>
    </div>
  );
}
export default MainLayout;
