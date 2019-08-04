import React from "react";
import "./style.css";

function NavBar({message, score, topScore}) {
  return (
    <nav className="navbar sticky-top navbar-light bg-dark">
      <a className="ClickyGame" href="/">Clicky Game</a>
      <a className="Message" href="/">{message}</a>
      <a className="Score" href="/">Score: {score} | Top Score: {topScore}</a>
    </nav>
  );
}

export default NavBar;



// function Title(props) {
//   return <h1 className="title">{props.children}</h1>;
// }
// {/* <Title>Friends List</Title> */}

// function Navbar() {
//   return (
//     <nav style={styles.navbarStyle} className="navbar">
//       <a href="/">Welcome</a>
//     </nav>
//   );
// }

// export default Navbar;
/* <Navbar /> */