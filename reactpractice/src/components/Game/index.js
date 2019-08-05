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
    const { navBarMessage, score, topScore } = this.state;

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









