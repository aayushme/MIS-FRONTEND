import React from "react";
import Sidebar from './navbar/navbar'
import "./main.css"
import HeaderNav from './header/headernav'


function MainLayout() {
  return (
<>
    
    <div>
    <HeaderNav/>
 
<header className="page-header">
   <Sidebar/>
</header>
<section class="page-content">
  
  <section class="grid">
    <article></article>
    <article></article>
    <article></article>
    <article></article>
    <article></article>
    <article></article>
    <article></article>
    <article></article>
  </section>
  <footer class="page-footer">
    <small>Made with <span>❤</span> by <a href="http://georgemartsoukos.com/" target="_blank">George Martsoukos</a>
    </small>
  </footer>
</section>
    </div>
    </>
  );
}
export default MainLayout;
