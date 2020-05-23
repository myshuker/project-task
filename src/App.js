import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./page/Login";
import Leaderboard from "./Components/Leaderboard";
import Player from "./Components/Player";
import About from "./page/About";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {/* <Route path="/" exact component={Login} /> */}
        
          {/* <Route path="/">
            <Login />
          </Route> */}

          <Route path="/">
            <Leaderboard />
          </Route>

          <Route path="/about">
            <About />
          </Route>
          {/* <Route path="/player" exact component={Player} /> */}
          <Route path="/player">
            <Player />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
