import React, { Component } from "react";

import "./AboutPerson.css";
import Avatar from "../../Assets/Logos/Avatar/Avatar";
import {
  Divider,
  Menu,
  Dropdown,
  Icon,
  Switch,
  notification,
  Button
} from "antd";
// import { NavLink } from "react-router-dom";
import { userInfo } from "os";

import { auth, database } from "../../api/firebaseApp";

const openNotification = () => {
  notification.open({
    message: "Active",
    description:
      "You are now active! Other players can see you and challenge you. (If theyre brave    enough)",
    placement: "bottomRight",
    onClick: () => {
      console.log("Notification Clicked!");
    }
  });
};

const menu = (
  <Menu>
    <Menu.Item>
      {/* <NavLink to="/edit-profile">Edit profile</NavLink> */}
      <a href="#">Edit profile</a>
    </Menu.Item>
    <Menu.Item>
      <p>
        <span style={{ marginRight: "5px" }}>Active</span>
        <Switch size="small" onChange={openNotification} />
      </p>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item>
      <Button className="sign-out-button" onClick={() => auth.signOut()}>
        Sign Out
      </Button>
      {/* <NavLink to="/">Log out</NavLink> */}
    </Menu.Item>
  </Menu>
);

class AboutPerson extends Component {
  componentDidMount() {
    console.log("USER ID ID USER", this.props.loggedInUser.uid);
  }

  render() {
    const { loggedInUser } = this.props;
    console.log("LOGGED IN USER PROP", loggedInUser);

    return (
      <div className="main">
        <div className="avatar-logo">
          <img
            className="user-image"
            src={loggedInUser.photoURL}
            alt={loggedInUser.displayName}
          />
          <Divider className="divider" />
        </div>
        <div>
          <h2>{loggedInUser.displayName}</h2>
          <p>user email: {loggedInUser.email}</p>
          <p>Win ratio: 50%</p>
        </div>
        <div>{menu}</div>
      </div>
    );
  }
}

export default AboutPerson;
