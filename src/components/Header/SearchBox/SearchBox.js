import React from "react";

import "./SearchBox.css";

import { Input } from "antd";

const Search = Input.Search;

const SearchBox = props => {
  return (
    <div className="searchbox">
      <Search type="text" placeholder="Search for a player" />
    </div>
  );
};

export default SearchBox;
