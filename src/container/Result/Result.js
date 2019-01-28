import React, { Component } from "react";

import "./Result.css";
import { Icon, Modal, Input, InputNumber, message } from "antd";
import ResultCard from "./ResultCard/ResultCard";

class Result extends Component {
  state = {
    modalVisible: false,
    numberOfSets: 3,
    playerOne: "",
    playerTwo: "",
    sets: [
      {
        player1: "",
        player2: ""
      },
      {
        player1: "",
        player2: ""
      },
      {
        player1: "",
        player2: ""
      }
    ]
  };

  render() {
    const {
      state: { numberOfSets, modalVisible, sets, playerOne, playerTwo },
      handleCancel,
      handleInput,
      handleOk,
      showModal,
      handleGameScore
    } = this;

    console.log("state", this.state.sets);
    return (
      <div className="result">
        <div className="add-score">
          <p>Result</p>
          <Icon
            type="plus-square"
            style={{ fontSize: "24px", cursor: "pointer" }}
            onClick={showModal}
          />
          <Modal
            title="Score Modal"
            visible={modalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <div className="result-modal">
              <div className="number-of-sets">
                <label>Number of sets: </label>
                <InputNumber
                  className="number-of-sets-input"
                  style={{ marginLeft: "15px" }}
                  min={1}
                  max={5}
                  defaultValue={3}
                  value={numberOfSets}
                  onChange={value => handleInput(value, "numberOfSets")}
                />
              </div>
              <div className="result-input">
                <div className="players-fullname">
                  <div className="player-one">
                    <Input
                      className="result-modal-player-input"
                      type="text"
                      placeholder="Player one"
                      value={playerOne}
                      onChange={event => {
                        event.preventDefault();
                        const value = event.target.value;

                        handleInput(value, "playerOne");
                      }}
                    />
                  </div>
                  <div className="player-two">
                    <Input
                      className="result-modal-player-input"
                      type="text"
                      placeholder="Player two"
                      value={playerTwo}
                      onChange={event => {
                        event.preventDefault();
                        const value = event.target.value;

                        handleInput(value, "playerTwo");
                      }}
                    />
                  </div>
                </div>
                <div className="players-game-score">
                  {sets.length &&
                    sets.map((set, index) => {
                      return (
                        <div key={index} className="players-score-wrapper">
                          <InputNumber
                            className="games-input"
                            type="text"
                            value={set.player1}
                            onChange={value =>
                              handleGameScore(value, index, "player1")
                            }
                          />
                          <InputNumber
                            className="games-input"
                            type="text"
                            value={set.player2}
                            onChange={value =>
                              handleGameScore(value, index, "player2")
                            }
                          />
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </Modal>
        </div>
        <div className="show-score">
          <ResultCard />
          <ResultCard />
          <ResultCard />
          <ResultCard />
          <ResultCard />
          <ResultCard />
          <ResultCard />
          <ResultCard />
        </div>
      </div>
    );
  }

  showModal = () => {
    this.setState({
      modalVisible: true
    });
  };

  handleOk = e => {
    console.log("handle ok e was clicked", e);
    this.setState({
      modalVisible: false
    });
  };

  handleCancel = e => {
    console.log("handle cancel e was clicked", e);
    this.setState({
      modalVisible: false
    });
  };

  handleGameScore = (value, index, type) => {
    const { sets } = this.state;
    const modifiedSets = sets.map((set, indexInArray) => {
      if (indexInArray === index) {
        return { ...set, [type]: value };
      }

      return set;
    });

    console.log("modifiedSets", modifiedSets);

    this.setState({
      ...this.state,
      sets: modifiedSets
    });
  };

  handleInput = (value, type) => {
    switch (type) {
      case "numberOfSets": {
        const newSets = [];

        if (value > 5) {
          return message.warning("Max number of sets is 5");
        }

        for (let i = 0; i < value; i++) {
          newSets.push({
            player1: "",
            player2: ""
          });
        }

        return this.setState({
          numberOfSets: value,
          sets: newSets
        });
      }
      default:
        this.setState({
          [type]: value
        });
    }
  };
}

export default Result;
