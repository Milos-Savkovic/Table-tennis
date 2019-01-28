import React from "react";

import "./Highscore.css";
import { Divider } from "antd";
import SearchBox from "../../components/Header/SearchBox/SearchBox";

const highscore = props => {
  return (
    <div className="highscore">
      <div className="search">
        <h3>Players</h3>
        <Divider className="divider" />
        <SearchBox />
        <Divider className="divider" />
      </div>
      <div className="player-list">
        <ul className="list">
          <li>blah blah</li>
          <li>blah blah</li>
          <li>blah blah</li>
          <li>blah blah</li>
          <li>blah blah</li>
          <li>blah blah</li>
          <li>blah blah</li>
          <li>blah blah</li>
          <li>blah blah</li>
          <li>blah blah</li>
          <li>blah blah</li>
          <li>blah blah</li>
          <li>blah blah</li>
          <li>blah blah</li>
          <li>blah blah</li>
          <li>blah blah</li>
          <li>blah blah</li>
          <li>blah blah</li>
          <li>blah blah</li>
          <li>blah blah</li>
          <li>blah blah</li>
          <li>blah blah</li>
          <li>blah blah</li>
          <li>blah blah</li>
          <li>blah blah</li>
          <li>blah blah</li>
          <li>blah blah</li>
          <li>blah blah</li>
        </ul>
      </div>
    </div>
  );
};

export default highscore;
