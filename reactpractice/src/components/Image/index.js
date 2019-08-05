import React, { Component } from "react";
import "./style.css";


class Image extends Component {
  handleClick = () => {
    const { selected, id } = this.props;
    if (selected) {
      this.props.resetScore();
    } else {
      this.props.incrementScore(id);
    }
  }

  // const { selected, id } = this.props; is equivalent to:
  // const selected = this.props.selected;
  // const id = this.props.id'

  render() {
    const { id, alt, src } = this.props;
    return (
      <div className="img-container">
        <img
          alt={alt}
          src={src}
          onClick={() => this.handleClick(id)}
        />
      </div>
    );
  }

}

export default Image;

// const imageComponents = imageData.map(image => <Image key={image.id} alt={image.name} src={image.image} />)
// renderImages = (imageData) => {
//   return imageData.map(image => {
//     return <img key={image.id} alt={image.name} src={image.image} onClick={this.handleIncrement} />
//   })
