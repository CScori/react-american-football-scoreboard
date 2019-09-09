//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";

import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [count, sethCount] = useState(0)
  const [acount, setaCount] = useState(0)
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">All Black</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{count}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Force</h2>
            <div className="away__score">{acount}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={ ()=> sethCount(count + 5)}>Home Try</button>
          <button className="homeButtons__fieldGoal" onClick={ ()=> sethCount(count + 3)}>Home Penalty/Drop</button>
          <button className="homeButtons__fieldGoal" onClick={ ()=> sethCount(count + 2)}>Home Conversion</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={ ()=> setaCount(acount + 5)}>Away Try</button>
          <button className="awayButtons__fieldGoal" onClick={ ()=> setaCount(acount + 3)}>Away Penalty/Drop</button>
          <button className="awayButtons__fieldGoal" onClick={ ()=> setaCount(acount + 2)}>Away Conversion</button>
        </div>
      </section>
    </div>
  );
}

export default App;
