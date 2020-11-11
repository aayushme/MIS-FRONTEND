import React,{Component} from 'react'
import {connect} from 'react-redux';

class Dashboard extends Component{
    render(){
        return(
            <>
            <section class="grid">
        <article>This is {this.props.designation}</article>
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
  </footer></>
        );
    }
}

const mapStateToProps = state =>{
    return{
      name : state.auth.name= "AAYUSH",
      designation : state.auth.designation
    }
  }

export default connect(mapStateToProps)(Dashboard);