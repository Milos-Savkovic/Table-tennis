import React from "react";

import GoogleLogo from "../../google.png";
import "./GoogleLogo.css";

const googleLogo = () => {
  return (
    <div>
      <img className="google-logo" src={GoogleLogo} alt="google-logo" />
    </div>
  );
};

export default googleLogo;
