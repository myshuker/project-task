import React, { Component, Fragment, browserHistory } from "react";
import img from "./img.gif";
import "../App.css";
import { Link, Redirect } from "react-router-dom";
// import { browserHistory } from "react-router";

export default class Leaderboard extends Component {
  state = {
    users: [
      {
        name: "Name1",
        img: `https://i.imgur.com/FmFAhXh.png`,
      },
      {
        name: "Name2",
        img: `https://i.imgur.com/FmFAhXh.png`,
      },
      {
        name: "Name3",
        img: `https://i.imgur.com/FmFAhXh.png`,
      },
    ],
  };

  playerHandle = () => {
     this.props.history.push("/player");
  };

  render() {
    const img = `img src=" https://i.imgur.com/FmFAhXh.png"`;
    return (
      <Fragment>
        <div className="Leaderboard">
          <ul>
            {this.state.users.map((user) => {
              return (
                <div className="liContainer">
                  <li style={{ listStyleType: "none" }}>
                    <img src={user.img} alt="userpicture" />
                    {user.name}

                    <div className="dotContainer">
                      <div className="dot"></div>
                      <div className="dot"></div>
                      <div className="dot"></div>
                    </div>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>

        <div className="PlayBtn">
          <button onClick={this.playerHandle}>Play Again</button> <br />
          <Link to="/about"> How to play?</Link> <br />
        </div>
      </Fragment>
    );
  }
}
