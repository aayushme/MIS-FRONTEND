import React,{Component} from "react";
import Login from "./components/login/login";
import MainLayout from "./components/mainlayout/mainlayout";
import Upload from "./components/mainlayout/upload/upload"
import Report from "./components/mainlayout/report/report"
import {connect} from 'react-redux';



import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class AppRouter extends Component {
  render(){

    let final_route;

    if(this.props.isAuthenticated){
      final_route =  <Switch>
      <div className="AppRouter">
        <Route path="/" exact component={Login} />
        <Route path="/main/dashboard" exact component={MainLayout} />
        <Route path="/main/upload" exact component={Upload} />
        <Route path="/main/report" exact component={Report} />
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
