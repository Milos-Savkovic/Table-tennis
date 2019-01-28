import React from "react";

import "./TableTennisLogo.css";
import tennisLogo from "../../tableTennisLogo.png";

const logo = () => (
  <div className="table-tennis-logo">
    <img className="logo" src={tennisLogo} alt="tennis logo" />
  </div>
);

export default logo;
