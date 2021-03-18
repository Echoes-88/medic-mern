import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard.js";
import Login from "./components/Login/Login.js";
import Signup from "./components/Signup/Signup.js";
import { PrivateRoute } from "./components/PrivateRoute.js";

import Logo from './assets/logo.webp';

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <img className="logo" src={Logo} alt="Logo MadeCell"/>
        <div className="App-content">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </div>
    );
  }
}
export default App;