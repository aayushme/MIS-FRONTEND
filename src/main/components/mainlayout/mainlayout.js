import React from "react";
import Sidebar from './navbar/navbar'
import "./main.css"
import HeaderNav from './header/headernav'
import Dashboard from './dashboard/dashboard'


function MainLayout() {
  return (
<>
    
    <div>
    <HeaderNav/>
 
<header className="page-header">
   <Sidebar/>
</header>
<section class="page-content">
  
  <Dashboard/>
</section>
    </div>
    </>
  );
}
export default MainLayout;
