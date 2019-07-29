// Reference: 19-react/Activity 27

import React from "react";
import Navbar from "./components/Navbar";
import "../styles/Counter.css";

// 1. What does "/" , "./", "../" represent while giving path?
// 2. Root directory, current working directory, and parent directory, respectively.
// 3. parent directory: Refers to the directory above another directory. Every directory, except the root directory, lies beneath another directory.

class Counter extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    count: 0
  };

  // handleIncrement increments this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
  };

  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div className="body">
          <p className="card-text">Click Count: {this.state.count}</p>
          {/* https://reactjs.org/docs/state-and-lifecycle.html */}
          {/* IF NO STATE, would be {this.props.count} */}
          {Math.floor(Math.random() * 10) + 1}  
          <image className="image" onClick={this.handleIncrement}>
            Increment
          </image>
      </div>
    );
  // closes render ()
  }
// closes Counter Class Component
}

export default Counter;


// By importing the Counter.css file, it is added to the DOM whenever this component loads


    
// Each image listens for CLICK EVENTS:
// Every time an image is clicked, images rendered to page shuffle themselves in random order.
    // math.random (images in array)
// User's score should be incremented (score ++) when clicking image for 1st time
    // need score = 0; to start
// If user clickss image more than once (way to identify how many times image is clicked): 
    // 1. score should be reset to zero (score = 0) === GAME RESTARTS

// 
