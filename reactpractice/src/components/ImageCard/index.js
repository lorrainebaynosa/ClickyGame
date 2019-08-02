// Reference: 19-react/Activities 10-11, 27
// Re

import React from "react";
import Navbar from "./components/Navbar";
import "../styles/Counter.css";
import "/assets/images";

// 1. What does "/" , "./", "../" represent while giving path?
// 2. Root directory, current working directory, and parent directory, respectively.
// 3. parent directory: Refers to the directory above another directory. Every directory, except the root directory, lies beneath another directory.

class Counter extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    images: [
      {count: 0, source: "assets/images/  .png"},
      {count: 0, source: "assets/images/  .png"},
      {count: 0, source: "assets/images/  .png"},
      {count: 0, source: "assets/images/  .png"},
      {count: 0, source: "assets/images/  .png"},
      {count: 0, source: "assets/images/  .png"},
      {count: 0, source: "assets/images/  .png"},
      {count: 0, source: "assets/images/  .png"},
      {count: 0, source: "assets/images/  .png"},
      {count: 0, source: "assets/images/  .png"},
      {count: 0, source: "assets/images/  .png"},
      {count: 0, source: "assets/images/  .png"} 
    ],
    title: "Clicky Game",
    message: score === 0? "You guessed correctly!" : "You guessed incorrectly!",
    score: 0, 
    topScore: 0
  };

  // handleIncrement increments this.state.count by 1
  handleIncrement = () => {
    console.log('clicked');
    // We always use the setState method to update a component's state
    const newCountState = this.state.images.map((image) => {
      const tempImage = image;
      tempImage.count +1;
      return tempImage;
    });
    // const newIndexState = this.state.
    this.setState({
      newCountState,
      newIndexState,
      score: this.state.score,
      topScore: this.state.topScore
    });
  }
      
    // this.setState 1) lets React know that something has changed - to update virtual DOM; 2) tells React to compare original state to setState to determine what's changed & only update what's changed; 3) occurs asynchronously (creates React object, compares it to virtual DOM, finds div, update div with overall JSX/"HTML")

  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div className="body">
          {/* https://reactjs.org/docs/state-and-lifecycle.html */}
          {/* IF NO STATE, would be {this.props.count} */}
          <h1>{this.state.title}</h1>
          <h1>{this.state.message}</h1>
          <h1>{this.state.highScore}</h1> 
          {/* Would require a image functional component */}
          <image onClick={this.handleIncrement}>Increment if clicked1st Time</image>
          {/* use "this" in {this.handleIncrement} because it's a class : https://www.youtube.com/watch?v=DJtI3Pogd88*/}
          {/* When click on image, click calls function handleIncrement, which calls method this.setState (13:11) */}
          {
             this.state.images.map((image) => {
              return <Image count={image.count}>{image.source}</Image> 
              })  
          }
      </div>
    );
  // {/* // closes render () */}
  }
// {/* // closes Counter Class Component */}
}

export default Counter;

// {/* {Math.floor(Math.random() * 10) + 1}   */}
// {/* <image src="assets/images/  .png alt "   " className="image" onClick={this.handleIncrement}> */}

// {/* STATE only gets used if a component has an INTERNAL/PRIVATE value that only affects that component and doesn't affect the any other part of the APP */}
// {/* // By importing the Counter.css file, it is added to the DOM whenever this component loads

// // div class= "wrapper">
// //         <div class="imageContainer">
// //             <div class="images" id="GOTimages">
// //                 <img src="assets/images/GOTlogo.png" alt="Game of Thrones" id="GOT">
// //             </div>
// //         </div> */}


    

// {/* var MAX_GUESSES = 12;
//     var IMG_ROOT = "assets/images/";

//     var words = ["targaryen", "lannister", "stark", "bolton", "baratheon"];
//     var currentWord = "";
//     var wins = 0;
//     var userInput = [];
//     var totalGuesses = 0;
//     var gameInProgress = false;
//     var guessedCorrectly = false;

//     function selectRandomWord(wordChoices) {
//       var numberOfChoices = wordChoices.length;
//       var randomIndex = Math.floor(Math.random() * numberOfChoices);
//       return wordChoices[randomIndex];
//     }

//     function startNewGame() {
//       gameInProgress = true;
//       guessedCorrectly = false;
//       currentWord = selectRandomWord(words);
//       guessesTaken = 0;
//       totalGuesses = 0;
//       userInput = [];
//       renderWord();
//       resetGameBoard();
//     }

//     function resetGameBoard() {
//       updateNumGuessesRemaining(MAX_GUESSES);
//       updateLettersGuessed("");
//       updateMessage("");
//       updateCurrentWord("");
//       setImage(IMG_ROOT + "gameOfThrones.jpg", "Game of Thrones");
//     }

//     function setImage(src, alt) {
//       var imgDivId = document.querySelector("#GOT");
//       imgDivId.src = src;
//       imgDivId.alt = alt;
//     }

//     function updateWins(num) {
//       document.querySelector("#wins").innerHTML = num;
//     }

//     function updateMessage(msg) {
//       document.querySelector("#message").innerHTML = msg;
//     }

//     function updateNumGuessesRemaining(num) {
//       document.querySelector("#num-guesses-remaining").innerHTML = num;
//     }

//     function updateLettersGuessed(letters) {
//       document.querySelector("#letters-guessed").innerHTML = letters;
//     }
//     function updateCurrentWord(word) {
//       document.querySelector("#current-word").innerHTML = word;
//     }

//     function playGame() {
//       if (userInput.includes(event.key)) {
//         updateMessage("You already guessed " + event.key);
//       } else {
//         updateMessage("");
//         userInput.push(event.key);
//         totalGuesses++;
//         updateNumGuessesRemaining(MAX_GUESSES - totalGuesses);
//         renderWord();
//       }
//     }

//     function renderWord() {
//       var result = "";
//       var incorrectGuesses = 0;
//       for (var i = 0; i < currentWord.length; i++) {
//         var currentLetter = currentWord.charAt(i);
//         if (userInput.includes(currentLetter)) {
//           result = result + currentLetter;
//         } else {
//           result = result + "_";
//           incorrectGuesses++;
//         }
//       }
      
//       updateCurrentWord(result); 
//       var userInputWord = "";
//       for (var i = 0; i < userInput.length; i++) {
//         userInputWord = userInputWord + userInput[i];
//       }
//       updateLettersGuessed(userInputWord.toUpperCase());
//       if (incorrectGuesses === 0) {
//         winner();
//       }
//       //testing if lose after 12th wrong guess
//       if ((MAX_GUESSES - totalGuesses) === 0 && incorrectGuesses > 0) {
//         endGame();
//       }
//     }

//     function endGame() {
//       gameInProgress = false;
//       updateMessage("You lose! " + currentWord + " was the answer.");
//       setImage(IMG_ROOT + currentWord + ".jpg", currentWord);
//     }

//     function winner() {
//       gameInProgress = false;
//       wins++;
//       updateWins(wins);
//       updateMessage("You win! Congratulations!");
//       setImage(IMG_ROOT + currentWord + ".jpg", currentWord);
//     }

//     document.addEventListener('keyup', function (event) {
//       if (gameInProgress === false) {
//         startNewGame();
//       }
//       else {
//         if (totalGuesses >= MAX_GUESSES) {
//           endGame();
//         }
//         else {
//           playGame();
//         }
//       }
//     });

//   */}