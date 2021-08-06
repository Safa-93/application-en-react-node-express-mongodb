import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Dashboard } from "./component/dashboard/Dashboard";
import { Login } from "./component/login/Login";
import { Signup } from "./component/signup/Signup";
import { PrivateRoute } from "./component/PrivateRoute";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='App-content'>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <PrivateRoute path='/dashboard' component={Dashboard} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
