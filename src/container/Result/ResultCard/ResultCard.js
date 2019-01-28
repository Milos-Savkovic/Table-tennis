import React from "react";

import "./ResultCard.css";
import { Divider } from "antd";
import ResultCardGems from "./ResultCardGems/ResultCardGems";

const ResultCard = props => {
  return (
    <div className="result-card">
      <div className="time-and-date">
        <div>27/1/2019</div>
        <div>18:08</div>
      </div>
      <div>
        <div>Milos Savkovic</div>
        <div>Stefan Sukara</div>
      </div>
      <div className="score-gems-order">
        <ResultCardGems />
        <ResultCardGems />
        <ResultCardGems />
      </div>
      <div className="score-sets">
        <div>
          <p className="winner">3</p>
        </div>
        <div>
          <p>2</p>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
