import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(<App />, document.getElementById('root'));

// Each image listens for CLICK EVENTS:
// Every time an image is clicked, images rendered to page shuffle themselves in random order.
    // math.random (images in array)
// User's score should be incremented (score ++) when clicking image for 1st time
    // need score = 0; to start
// If user clickss image more than once (way to identify how many times image is clicked): 
    // 1. score should be reset to zero (score = 0) === GAME RESTARTS

// 