import React, { Component } from "react";

import "./App.css";
import "antd/dist/antd.css";
import { Divider } from "antd";

import Header from "./components/Header/Header";
import Result from "./container/Result/Result";
import AboutPerson from "./container/AboutPerson/AboutPerson";
import Highscore from "./container/Highscore/Highscore";

class Home extends Component {
  render() {
    const { loggedInUser } = this.props;
    return (
      <div className="app">
        <Header />
        <div className="container">
          <AboutPerson loggedInUser={loggedInUser} />
          <Result />
          <Highscore />
        </div>
      </div>
    );
  }
}

export default Home;
