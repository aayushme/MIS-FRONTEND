import React,{Component} from "react";
import Login from "./components/login/login";
import MainLayout from "./components/mainlayout/mainlayout";
import {connect} from 'react-redux';



import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class AppRouter extends Component {
  render(){

    let final_route;

    if(this.props.isAuthenticated){
      final_route =  <Switch>
      <div className="AppRouter">
        <Route path="/" exact component={Login} />
        <Route path="/main" exact component={MainLayout} />
      </div>
    </Switch>
    }
    if(!this.props.isAuthenticated){
      final_route = <Switch>
      <div className="AppRouter">
        <Route path="/" exact component={Login} />
      </div>
    </Switch>
    }

  return (

    <Router>
      {final_route}
    </Router>

  );
}
}

const mapStateToProps = state =>{
  return{
    token : "ahevfuw",
    isAuthenticated : true
  }
}

export default connect(mapStateToProps)(AppRouter);
