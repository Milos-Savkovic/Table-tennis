import React from "react";

import "./Header.css";

import TableTennisLogo from "../../Assets/Logos/TableTennisLogo/TableTennisLogo";
import Settings from "./Settings/Settings";

const header = () => {
  return (
    <div className="header">
      <TableTennisLogo />
      {/* <Settings /> */}
    </div>
  );
};

export default header;
