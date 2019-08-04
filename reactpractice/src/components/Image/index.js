import React, { Component } from "react";
import "./style.css";


class Image extends Component {
  handleClick = () => {
    const { selected, id } = this.props;
    if (selected) {
      this.props.resetScore(id);
    } else {
      this.props.incrementScore(id);
    }
  }

  render() {
    const { id, alt, src, selected } = this.props;
    return (
      <div className="img-container">
        <img
          key={id}
          alt={alt}
          src={src}
          selected={selected}
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
