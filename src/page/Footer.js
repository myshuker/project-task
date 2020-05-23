import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Player from "../Components/Player";

export default class Footer extends Component {
  playerHandle = () => {
    return(
      // console.log("player")
      <Player />
    )
  };
  render() {
    return (
      <div className="PlayBtn">
        <button  onClick={this.playerHandle}>Play Again</button> <br />
        <Link to="/about"> How to play?</Link>
      </div>
    );
  }
}
