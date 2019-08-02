import React from "react";
import "./style.css";

function GuessedCorrectly(props) {
  return (
    <nav className="navbar sticky-top navbar-light bg-light">
      <a className="ClickyGame" href="/">Clicky Game</a>
      <a className="Intro" href="/">You guessed correctly!</a>
      <a className="Score" href="/">Score:{props.score} | Top Score: {props.topScore} </a>
    </nav>
  );
}

export default GuessedCorrectly;