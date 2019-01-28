import React from "react";

import Avatar from "../../avatar.png";
import "./Avatar.css";

const avatar = () => (
  <div className="avatar-div">
    <img className="avatar" src={Avatar} alt="avatar-logo" />
  </div>
);

export default avatar;
