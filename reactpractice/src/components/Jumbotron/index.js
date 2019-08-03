import React from "react";
import "./style.css";


// REVIEW OF CONCEPTS:
// By importing the Header.css file, it is added to the DOM whenever this component loads
// must convert everying in css to string and camelCase (instead of dashes)
// https://codeburst.io/4-four-ways-to-style-react-components-ac6f323da822

function Jumbotron() {
  return (
    <header className="header">
      <h1 className="header h1">Clicky Game!</h1>
      <h2 className="header h2">Click on an image to earn points, but don't click on any more than once!</h2>
    </header>
  );
}

export default Jumbotron;

