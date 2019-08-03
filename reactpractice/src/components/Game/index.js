// Reference: 19-react/Activities 10-11, 27
// Reference: 20-react/Activities: 4
// Instructions

// 1. Render different images (of your choice) to the screen. Each image should listen for click events.

// 2. keep track of the user's score. The user's score should be incremented when clicking an image for the first time. The user's score should be reset to 0 if they click the same image more than once.

// 3. Every time an image is clicked, the images rendered to the page should shuffle themselves in a random order.

// 4. Once the user's score is reset after an incorrect guess, the game should restart.

import React, { Component } from "react";
import GameReset from "../NavBar/GameReset";
import GuessedIncorrectly from "../NavBar/GuessedIncorrectly";
import GuessedCorrectly from "../NavBar/GuessedCorrectly";
import Jumbotron from "../Jumbotron";
import Wrapper from "../Wrapper";
// import ImageCard from "../ImageCard";
import imageData from "../../images.json";


class Game extends Component {
  // Setting the initial state of the Game component
  state = {
    currentNavBar: "GameReset",
    imageData: imageData,
    score: 0,
    topScore: 0
  };


  // SHUFFLE:
  // function shuffle(a) {
  //   for (let i = a.length - 1; i > 0; i--) {
  //       const j = Math.floor(Math.random() * (i + 1));
  //       [a[i], a[j]] = [a[j], a[i]];
  //   }
  //   return a;
  // }

  // selectImage = image => {
  //   // Shuffle imageData array
  //   const imageData = this.state.imageData.shuffle(image =>)
  // }

  // handleIncrement increments this.state.count by 1
  handleIncrement = () => {
    console.log('clicked');
    // We always use the setState method to update a component's state
    // const newCountState = this.state.images.map((image) => {
    //   const tempImage = image;
    //   tempImage.count +1;
    //   return tempImage;
    // });
    // const newIndexState = this.state.
    this.setState({
      score: this.state.score + 1,
      topScore: this.state.topScore + 1

    });
  }


  
  
  // handleTopScore = ()=> {
  //   if(this.state.score >=this.state.topScore)
  // }

  handleNavBarChange = navbar => {
    this.setState({ currentNavBar: navbar })
  }

  renderNavBar = () => {
    if (this.state.currentNavBar === "Game Reset") {
      return <GameReset />;
    } else if (this.state.currentNavBar === "Guessed Incorrectly") {
      return <GuessedIncorrectly />;
    } else {
      return <GuessedCorrectly />;
    }
  }

  // const imageComponents = imageData.map(image => <Image key={image.id} image={image} />) see 1:45:00 freeCodeCamp -> return {imageComponents}

  // this.setState 1) lets React know that something has changed - to update virtual DOM; 2) tells React to compare original state to setState to determine what's changed & only update what's changed; 3) occurs asynchronously (creates React object, compares it to virtual DOM, finds div, update div with overall JSX/"HTML")

  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div>
        {this.renderNavBar()}
        Score: {this.state.score} | Top Score: {this.state.topScore}
        <Jumbotron />
        <Wrapper>
          <img alt={imageData[0].name} src={imageData[0].image} onClick={this.handleIncrement} />
          <img alt={imageData[1].name} src={imageData[1].image} onClick={this.handleIncrement} />
          <img alt={imageData[2].name} src={imageData[2].image} onClick={this.handleIncrement} />
          <img alt={imageData[3].name} src={imageData[3].image} onClick={this.handleIncrement} />
          <img alt={imageData[4].name} src={imageData[4].image} onClick={this.handleIncrement} />
          <img alt={imageData[5].name} src={imageData[5].image} onClick={this.handleIncrement} />
          <img alt={imageData[6].name} src={imageData[6].image} onClick={this.handleIncrement} />
          <img alt={imageData[7].name} src={imageData[7].image} onClick={this.handleIncrement} />
          <img alt={imageData[8].name} src={imageData[8].image} onClick={this.handleIncrement} />
          <img alt={imageData[9].name} src={imageData[9].image} onClick={this.handleIncrement} />
          <img alt={imageData[10].name} src={imageData[10].image} onClick={this.handleIncrement} />>
          <img alt={imageData[11].name} src={imageData[11].image} onClick={this.handleIncrement} />

          {/* use "this" in {this.handleIncrement} because it's a class : https://www.youtube.com/watch?v=DJtI3Pogd88*/}
          {/* When click on image, click calls function handleIncrement, which calls method this.setState (13:11) */}
        </Wrapper>
      </div>
    );
    // {/* // closes render () */}
  }
  // {/* // closes Game Class Component */}
}

export default Game;




// {/* {Math.floor(Math.random() * 10) + 1}   */}


// {/* STATE only gets used if a component has an INTERNAL/PRIVATE value that only affects that component and doesn't affect the any other part of the APP */}
// {/* // By importing the Counter.css file, it is added to the DOM whenever this component loads



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