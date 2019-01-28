import React, { Component } from "react";

import "./App.css";
import "antd/dist/antd.css";

import Home from "./Home";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "./components/Login page/LoginPage";
// import Error from "./components/ErrorPage/Error";
// import EditProfile from "./components/EditProfile/EditProfile";
import { auth } from "./api/firebaseApp";

class App extends Component {
  state = {
    loggedInUser: null
  };

  componentDidMount() {
    auth.onAuthStateChanged(loggedInUser => {
      console.log("AUTH_CHANGED", loggedInUser);
      this.setState({
        loggedInUser: loggedInUser
      });
    });
  }

  render() {
    const { loggedInUser } = this.state;
    return (
      <div className="main-class-for-app">
        {loggedInUser ? <Home loggedInUser={loggedInUser} /> : <LoginPage />}
      </div>
    );
  }
}

export default App;

// <BrowserRouter>
//   <Switch>

//     <Route path="/home" component={Home} />
//     <Route path="/" exact component={LoginPage} />
//     <Route path="/edit-profile" component={EditProfile} />
//     <Route component={Error} />
//   </Switch>
// </BrowserRouter>
