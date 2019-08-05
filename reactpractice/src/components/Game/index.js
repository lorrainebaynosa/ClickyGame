// 1. Render different images (of your choice) to the screen. Each image should listen for click events.
// 2. keep track of the user's score. The user's score should be incremented when clicking an image for the first time. The user's score should be reset to 0 if they click the same image more than once.
// 3. Every time an image is clicked, the images rendered to the page should shuffle themselves in a random order.
// 4. Once the user's score is reset after an incorrect guess, the game should restart.

import React from "react";
import NavBar from "../NavBar";
import Jumbotron from "../Jumbotron";
import Wrapper from "../Wrapper";
import Image from "../Image";
import imageData from "../../images.json";


// from stackoverflow: https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

class Game extends React.Component {
  state = {
    images: imageData,
    navBarMessage: "Click an image to begin!",
    score: 0,
    topScore: 0,
  };

  resetScore = () => {
    const imagesCopy = this.state.images.map(image => ({ ...image, selected: false }))

    this.setState({
      images: imagesCopy,
      score: 0,
      navBarMessage: "You guessed incorrectly. Try again."
    });
  }

  incrementScore = id => {
    const imagesCopy = [...this.state.images];
    imagesCopy.forEach(image => {
      if (image.id === id) {
        image.selected = true;
      }
    });

    this.setState(prevState => ({
      images: imagesCopy,
      score: prevState.score + 1,
      topScore: Math.max(prevState.topScore, prevState.score + 1),
      navBarMessage: "You guessed correctly!"
    }))
  }

  renderImages = () => {
    const shuffledImages = shuffle([...this.state.images]) || [];

    return shuffledImages.map(image => 
       <Image
        key={image.id}
        id={image.id}
        alt={image.name}
        src={image.image}
        selected={image.selected}
        resetScore={this.resetScore}
        incrementScore={this.incrementScore}
      />
    )
  }

  render() {
    const {navBarMessage, score, topScore} = this.state;
 
    return (
      <div>
        <NavBar
          message={navBarMessage}
          score={score}
          topScore={topScore}
        />
        <Jumbotron />
        <Wrapper>
          {this.renderImages()}
        </Wrapper>
      </div>
    );
  }
}

export default Game;









